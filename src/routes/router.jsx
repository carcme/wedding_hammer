import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import BgImage from "./BgImage";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import Vendor from "./Vendor";
import Error from "./Error";
import Temp from "./Temp";
import Gallery from "./Gallery";
import { Old } from "./Old";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/temp",
        element: <Temp />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/old",
        element: <Old />,
      },
      {
        path: "/image",
        element: <BgImage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/vendor",
        element: <Vendor />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
