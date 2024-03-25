import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home page");
  return (
    <>
      <section
        className="relative flex h-screen bg-cover shadow-2xl "
        style={{
          background: `url(https://source.unsplash.com/1600x900/?nature)`,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-screen text-white">
          <h1 className="text-4xl font-bold text-center">Home Page</h1>
          <p className="p-6 text-xl text-center">
            Dynamic image load... should probably change it :o
          </p>
          <Link
            to="/image"
            className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700"
          >
            Start Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
