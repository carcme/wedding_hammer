import React from "react";

const FullPage = ({ headline, subheading }) => {
  return (
    <>
      <section class="container mx-auto flex flex-col items-center px-6 py-12 pt-32 lg:flex-row">
        <div class="lg:w-1/2">
          <h1 class="max-w-xl font-serif text-4xl font-medium capitalize tracking-wide text-[#343D33] md:text-6xl">
            Recommended Vendors
          </h1>

          <p class="mt-4 max-w-lg text-gray-500">
            Wedding vendors are an important part of your event. We have
            developed a list of recommended vendors for our venue.
          </p>

          <div class="mt-6 sm:flex sm:items-center">
            <a
              href="#"
              class="block border-2 border-[#475F45] bg-[#475F45] px-6 py-3 text-center text-sm font-bold uppercase leading-4 tracking-widest text-white transition-colors duration-300 hover:bg-[#475F45]/80"
            >
              Buy Tickets
            </a>

            <a
              href="#"
              class="mt-4 block border-2 border-[#475F45] px-6 py-3 text-center text-sm font-bold uppercase leading-4 tracking-widest text-[#475F45] transition-colors duration-300 hover:bg-[#475F45] hover:text-white sm:mx-4 sm:mt-0"
            >
              Learn More
            </a>
          </div>
        </div>

        <div class="mx-auto mt-12 h-[38rem] w-full max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40 lg:mt-0">
          <img
            class="h-full w-full rounded-t-full object-cover"
            src="../assets/image/cerimony_port.jpg"
            alt="main page"
          />
        </div>
      </section>

      <section class="mt-12 bg-[#343D33]">
        <div class="container mx-auto mt-12 flex flex-col px-6 py-16">
          <div class="order-2 mt-8 lg:order-1 lg:-mx-6 lg:mt-0 lg:flex lg:items-center">
            <img
              class="h-72 w-full object-cover lg:mx-6 lg:h-96 lg:w-1/2"
              src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />

            <div class="mt-8 lg:mx-6 lg:mt-0 lg:w-1/2">
              <h3 class="font-serif text-2xl capitalize text-white md:text-4xl lg:text-5xl">
                Discover yourself with nature
              </h3>

              <p class="mt-4 text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, nisi fugiat dicta impedit sed quisquam quas veritatis
                consectetur neque saepe, autem facilis dolore officiis minima
                explicabo perferendis ab porro magnam!
              </p>

              <a
                class="mt-6 inline-flex border-2 border-white px-6 py-3 text-white transition-colors duration-300 hover:bg-[#475F45]"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          <img
            class="w-ful order-1 h-72 object-cover lg:order-2 lg:mt-12 lg:h-96"
            src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 lg:py-16">
        <h3 class="font-serif text-3xl capitalize text-[#343D33] md:text-4xl lg:text-5xl">
          News & Updates
        </h3>

        <div class="mt-8 xl:-mx-6 xl:flex">
          <div class="xl:mx-6 xl:w-1/2">
            <img
              class="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />

            <h2 class="mt-6 font-serif text-3xl font-medium text-gray-700">
              Plants Around Us
            </h2>

            <p class="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit...
            </p>

            <p class="mt-4 italic text-gray-600">December 23, 2021</p>
          </div>

          <div class="mt-8 space-y-8 xl:mx-6 xl:mt-0 xl:w-1/2">
            <div class="md:-mx-4 md:flex md:items-center">
              <img
                class="h-56 w-full shrink-0 object-cover md:mx-4 md:h-48 md:w-80"
                src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
                alt=""
              />

              <div class="mt-6 md:mx-4 md:mt-0">
                <h2 class="font-serif text-2xl font-medium text-gray-700">
                  Lush Gardens
                </h2>

                <p class="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt facilisis nuncLorem ipsum dolor sit...
                </p>

                <p class="mt-4 italic text-gray-600">December 16, 2021</p>
              </div>
            </div>

            <div class="md:-mx-4 md:flex md:items-center">
              <img
                class="h-56 w-full shrink-0 object-cover md:mx-4 md:h-48 md:w-80"
                src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                alt=""
              />

              <div class="mt-6 md:mx-4 md:mt-0">
                <h2 class="font-serif text-2xl font-medium text-gray-700">
                  Exotic Nature
                </h2>

                <p class="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt facilisis nuncLorem ipsum dolor sit...
                </p>

                <p class="mt-4 italic text-gray-600">November 11, 2021</p>
              </div>
            </div>

            <div class="md:-mx-4 md:flex md:items-center">
              <img
                class="h-56 w-full shrink-0 object-cover md:mx-4 md:h-48 md:w-80"
                src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="mt-6 md:mx-4 md:mt-0">
                <h2 class="font-serif text-2xl font-medium text-gray-700">
                  It Starts with Soil
                </h2>

                <p class="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt facilisis nuncLorem ipsum dolor sit...
                </p>

                <p class="mt-4 italic text-gray-600">November 3, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-[#414840]">
        <div class="container mx-auto space-y-8 px-6 py-8 lg:flex lg:justify-between lg:space-y-0">
          <div>
            <a class="-mx-2 flex items-center" href="#">
              <svg
                class="mx-2 h-10 w-10"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 30.8612 2.87918 37.05 7.49526 41.424C8.08984 41.0512 8.68027 40.6742 9.26615 40.293C9.3248 39.9639 9.39513 39.5653 9.47378 39.1119C9.5149 38.8804 9.5591 38.6352 9.61087 38.3794C9.65099 38.1735 9.69699 37.9618 9.74472 37.742L9.76469 37.6501C9.96246 36.7464 10.1699 35.731 10.3397 34.6667H10.2671C8.37285 34.7017 6.63539 34.1901 5.6319 33.0602C5.17355 32.5455 4.84917 31.9014 4.75323 31.1294C4.65121 30.304 4.80959 29.331 5.28012 28.2057L5.35317 27.9971L5.67298 28.0671C6.89574 28.3047 8.46113 28.6214 9.52705 30.004C10.0181 30.6397 10.4037 31.5041 10.5955 32.6987C10.6133 32.515 10.6293 32.3309 10.6433 32.1469C10.7258 31.0637 10.7451 29.9828 10.6567 28.9657C8.59508 28.153 6.94127 25.7409 6.4609 23.1092C6.27513 22.0905 6.25835 21.0382 6.47001 20.053C6.79283 18.55 7.61516 17.1994 9.01 16.2919L9.15619 16.1882L9.38613 16.3816C11.1982 17.8602 12.1072 19.9555 12.3539 22.2229C12.5869 24.3791 12.2123 26.6906 11.4449 28.7737L11.3249 29.0855C11.4751 30.076 11.5325 31.1274 11.5234 32.1849C11.5051 34.1995 11.2585 36.2324 10.9494 37.8906C10.9022 38.1495 10.8504 38.3993 10.794 38.6384C10.7316 38.8987 10.6647 39.1454 10.5961 39.3769L10.5819 39.4243C14.6626 36.6908 18.5016 33.7437 21.9554 30.5686C21.946 30.4399 21.9314 30.1898 21.9284 29.8475C21.9269 29.6846 21.9269 29.5049 21.9421 29.3069C21.957 29.1336 21.9831 28.9495 22.0105 28.7561C22.0281 28.6318 22.0463 28.5036 22.0624 28.372C22.1223 27.8919 22.1836 27.3759 22.2165 26.8523C20.9644 26.0101 19.901 24.8183 19.2086 23.5555C18.8706 22.9403 18.6209 22.3084 18.4747 21.7023C18.3178 21.0491 18.2661 20.4247 18.3483 19.8765C18.5051 18.8228 19.0549 18.0233 20.0934 17.7629C20.832 17.4812 21.6177 17.7554 22.3029 18.4102C22.9912 19.068 23.5729 20.1248 23.882 21.3384C24.3153 23.0507 24.1847 25.0613 23.0917 26.7086C23.1213 26.9646 23.1438 27.2213 23.1603 27.4751C23.1893 27.8984 23.2029 28.3095 23.1938 28.6933C23.1867 28.963 23.1784 29.2171 23.148 29.4481C25.3876 27.2974 27.4489 25.0448 29.2893 22.6859C29.7847 22.0523 30.1914 21.46 30.5528 20.8502L30.3927 20.545C29.5217 18.9324 29.0024 16.825 29.0283 14.8454C29.0405 13.9546 29.1623 13.0896 29.4029 12.313C29.6511 11.5136 30.0135 10.8009 30.5069 10.2482C31.2789 9.38021 32.3312 8.86713 33.6925 8.96001C34.559 8.94174 35.1574 9.45486 35.5046 10.2985C35.9964 11.4923 35.9476 13.4048 35.4284 15.2763C34.7874 17.5828 33.4125 19.7875 31.5636 20.6094C31.1214 21.488 30.6188 22.3009 29.9579 23.1929C29.6088 23.6637 29.2514 24.1308 28.8858 24.5941C29.0908 24.4987 29.3037 24.4057 29.5231 24.3153C29.8722 24.172 30.2361 24.0374 30.6104 23.9182C31.3077 22.558 32.5349 21.3509 33.9019 20.5661C34.5308 20.2053 35.1886 19.9343 35.8266 19.7744C36.4996 19.6054 37.1514 19.5475 37.7285 19.6327C38.8005 19.7911 39.6334 20.3546 39.9197 21.4433C40.2197 22.2199 40.2151 22.864 40.0141 23.3909C39.6928 24.2391 38.8279 24.7994 37.7057 25.1116C35.5327 25.7177 32.3837 25.3765 30.8259 24.7415L30.8253 24.7412C30.7593 24.7735 30.6937 24.8061 30.6286 24.8391C29.9478 25.1841 29.3387 25.5912 28.7974 25.953C28.6243 26.0687 28.4582 26.1797 28.2989 26.2826C28.014 26.467 27.7498 26.6175 27.5223 26.7471L27.5223 26.7471L27.5222 26.7472L27.5116 26.7532C27.1168 26.9764 26.8411 27.1164 26.742 27.1657C24.1986 30.0597 21.3428 32.7996 18.2555 35.3886C18.3518 35.3749 18.4521 35.3619 18.5563 35.3503C18.7243 35.3317 18.9009 35.3148 19.0844 35.2972C19.7144 35.2368 20.4261 35.1686 21.1525 35C21.3675 34.9498 21.5837 34.8942 21.7994 34.8319L21.8827 34.6502C22.8725 32.4193 24.6388 31.163 26.6275 30.595C27.4376 30.3651 28.2843 30.2479 29.1248 30.2342C30.4252 30.2144 31.7013 30.4322 32.8069 30.7352L33.1098 30.8052L32.9743 31.1737C32.0531 33.8294 30.3765 35.1572 28.5674 35.7298C26.3876 36.4192 23.9929 35.9881 22.4192 35.3969C21.8453 35.6873 21.251 35.9184 20.6713 36.1024C20.1978 36.2532 19.7394 36.3735 19.3069 36.4557C18.9765 36.5197 18.6644 36.573 18.3781 36.5897C18.0812 36.605 17.8177 36.5897 17.5939 36.5699C17.2871 36.5421 17.0611 36.5042 16.9311 36.4787C14.3234 38.5859 11.5651 40.5901 8.70176 42.4931C12.855 45.9327 18.1861 48 24 48ZM10.9601 27.4186C11.4983 25.7551 11.7613 23.9786 11.6291 22.2899C11.4722 20.2799 10.7596 18.3963 9.27646 16.9908C8.24404 17.8496 7.71414 19.0115 7.50705 20.2495C7.36086 21.1174 7.37604 22.0265 7.53289 22.9158C7.897 24.9848 8.996 26.9552 10.5111 27.8616C10.3961 27.2289 10.2271 26.6338 9.99156 26.0939C9.94283 25.9934 9.98548 25.8716 10.086 25.8229C10.188 25.7742 10.3099 25.8168 10.3586 25.9173C10.6014 26.3768 10.8 26.8811 10.9601 27.4186ZM22.4416 24.1494C22.5801 24.4412 22.695 24.7624 22.7897 25.1018C23.2784 23.9467 23.3198 22.6613 23.0901 21.518C22.8297 20.2222 22.2329 19.0969 21.4974 18.5457C21.1091 18.2548 20.6873 18.1239 20.2655 18.2579C19.6868 18.5228 19.4219 19.0101 19.3366 19.6024C19.2605 20.1339 19.3625 20.7445 19.568 21.3993C19.731 21.9139 19.9655 22.4485 20.2579 22.9799C20.7532 23.8808 21.4185 24.773 22.2255 25.4933C22.2019 25.0695 22.1485 24.6648 22.0472 24.2971C22.0076 24.1889 22.0624 24.0672 22.1705 24.026C22.2801 23.9865 22.4005 24.0413 22.4416 24.1494ZM24.1097 34.2798C23.9019 34.4599 23.6841 34.6272 23.4588 34.7826C24.8344 35.2304 26.6524 35.4928 28.3558 35.0172C29.9258 34.5771 31.3891 33.5035 32.3225 31.3762C31.1439 31.1935 29.8055 31.1707 28.4853 31.3413C27.5884 31.457 26.696 31.658 25.8707 32.0249C24.7991 32.5015 23.8372 33.2353 23.1337 34.3375C23.3823 34.2205 23.6248 34.0894 23.8585 33.9417C23.9513 33.8731 24.0838 33.893 24.1523 33.9859C24.2224 34.0788 24.2026 34.2097 24.1097 34.2798ZM32.2969 24.1333C33.8057 24.5482 35.9294 24.7384 37.5199 24.3791C38.9665 24.0502 39.9562 23.2447 39.4248 21.6199C39.1416 21.0032 38.6299 20.7154 38.0163 20.6226C37.4559 20.5373 36.8133 20.6454 36.1372 20.8647C35.5966 21.0383 35.0424 21.291 34.4987 21.6047C33.6285 22.1058 32.7917 22.7644 32.1563 23.5388C32.5888 23.4664 33.0266 23.4233 33.464 23.4184C33.5797 23.4093 33.6817 23.4945 33.6908 23.6102C33.7 23.726 33.6147 23.828 33.499 23.8371C33.0913 23.9018 32.6896 24.0043 32.2969 24.1333ZM32.9957 17.1385C32.7578 17.7985 32.5365 18.3895 32.3154 18.9355C33.3752 18.0202 34.169 16.5441 34.6488 15.0434C35.1878 13.3592 35.3325 11.6248 34.932 10.5208C34.7081 9.9071 34.3138 9.49902 33.6925 9.48532C32.7758 9.55079 32.0875 9.92841 31.5591 10.4857C31.0399 11.0339 30.7079 11.7771 30.4947 12.6207C30.3196 13.3151 30.2358 14.0749 30.2252 14.8606C30.2069 16.4976 30.5176 18.2381 31.1465 19.6527C31.1675 19.6446 31.1885 19.6363 31.2094 19.6278C31.5967 18.8338 31.9586 17.9598 32.3715 16.904C32.4354 16.7304 32.6288 16.6436 32.8008 16.7075C32.9744 16.773 33.0612 16.9664 32.9957 17.1385ZM5.89381 28.6625C5.67148 29.5625 5.66844 30.3208 5.79482 30.9634C5.90294 31.5116 6.12372 31.9669 6.44959 32.34C7.19269 33.1928 8.42302 33.6298 9.81024 33.7287C9.78284 32.2075 9.4509 31.1644 8.94078 30.435C8.13677 29.2838 6.91861 28.9168 5.89381 28.6625Z"
                  fill="white"
                />
              </svg>

              <div class="mx-2 text-white">
                <h3 class="font-medium uppercase tracking-widest">
                  Mist Gardens
                </h3>
                <p class="mt-1 text-xs capitalize italic leading-3 tracking-wide">
                  museum & botanical garden
                </p>
              </div>
            </a>

            <p class="mt-6 max-w-lg leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptatum amet molestiae consequatur quam velit sint modi aut
              illo dolorem.
            </p>
          </div>

          <div class="flex flex-col space-y-4">
            <a href="#" class="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              Visit
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              Exhibitions
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              Programs & Events
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              Store
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              Membership
            </a>
          </div>

          <div>
            <p class="font-medium capitalize text-white">Connect</p>

            <div class="-mx-4 mt-6 flex">
              <a class="mx-4 text-white hover:text-gray-300" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <a class="mx-4 text-white hover:text-gray-300" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <a class="mx-4 text-white hover:text-gray-300" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <a class="mx-4 text-white hover:text-gray-300" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p class="mx-auto w-full bg-[#343D33] py-6 text-center text-white">
          &copy; 2022 Mist Gardens. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default FullPage;
