import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { TiTick } from "react-icons/ti";
import { BiMailSend } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { useLanguage } from "@/LanguageContext";
import subscribeWidgetText from "@/data/subscribeWidgetText";

const ProcessForm = ({ status, message, onValidated, source, text }) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState();
  // start, sending, success, error
  // const [test, setTest] = useState("error");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
    else {
      setState(status);
    }
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const reset = () => {
    clearFields();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {status == null && (
        <div className="mx-0 mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-[#717171]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="webkitAutoFillOverrideLight block w-full rounded-lg border border-gray-600 bg-transparent p-3 pl-10 text-sm text-black placeholder-[#717171] shadow-none focus:border-gray-400 focus:text-primaryGreen focus:outline-none focus:ring-0 active:text-primaryGreen sm:rounded-none sm:rounded-l-lg"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={text.emailPlaceholder}
              autoComplete="email"
              type="email"
              id="email"
              required={true}
            />
          </div>
          <div>
            <button
              type="submit"
              className="relative w-full cursor-pointer overflow-hidden rounded-lg border border-gray-500 bg-primaryGreen px-5 py-3 text-center text-sm font-medium text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 hover:text-primaryGreen hover:before:left-0 hover:before:w-full hover:before:bg-white sm:rounded-none sm:rounded-r-xl"
            >
              <span className="relative z-10">{text.subscribeBtnTxt}</span>
            </button>
          </div>
        </div>
      )}
      {status == "success" && (
        <div
          className={`animate-txtBlur mx-0 mb-3 items-center space-y-4 py-3 sm:flex sm:space-y-0 ${
            source === "component"
              ? "max-w-full justify-center"
              : "max-w-screen-sm"
          }}`}
        >
          <TiTick size={24} className="text-accentDecoration" />
          <p className="mr-2 italic text-neutral-200">{text.success}</p>
        </div>
      )}
      {state == "error" && (
        <div className="mx-0 mb-3 max-w-screen-sm items-center space-y-4 py-3 sm:flex sm:space-y-0">
          <MdErrorOutline
            size={24}
            className="animate-shuffle mr-2 text-red-700"
          />

          <p className="italic text-neutral-200"></p>
          <button
            onClick={reset}
            className="ml-4 h-6 border-2 border-neutral-700 bg-transparent hover:bg-neutral-700 hover:italic"
          >
            Reset
          </button>

          <div className="pl-2 text-[10px]">
            <p>{message}</p>
          </div>
        </div>
      )}
      {status == "sending" && (
        <div className="animate-txtBlur mx-0 mb-3 max-w-screen-sm items-center space-y-4 py-3 sm:flex sm:space-y-0">
          <BiMailSend
            size={24}
            className="mr-2 animate-pulse text-accentDecoration"
          />

          <p className="animate-pulse text-neutral-200">{text.sending}</p>
        </div>
      )}
    </form>
  );
};

const SubscribeWidget = ({ source }) => {
  const url = `${import.meta.env.VITE_MC_SIGNUP_URL}?u=${
    import.meta.env.VITE_MC_U
  }&id=${import.meta.env.VITE_MC_ID}`;

  const language = useLanguage();
  const text =
    language === "en" ? subscribeWidgetText.en : subscribeWidgetText.de;

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status = "", message }) => (
          <ProcessForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            source={source}
            text={text}
          />
        )}
      />

      <div className="newsletter-form-footer mx-0 max-w-screen-sm text-left text-[12px] text-[#717171]">
        <p>{text.weCare}</p>
        <p className="group">
          <Link
            to={
              "https://www.termsfeed.com/live/e603faa6-c19c-4be8-92c2-06deaaf42075"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            {text.readOur}
            <span className="hover:font-bold group-hover:text-primaryGreen">
              {" "}
              {text.privacyPolicy}
            </span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SubscribeWidget;
