import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Booking from "./Booking";
import About from "./About";
import Contact from "./Contact";
import Vendor from "./Vendor";
import Error from "./Error";
import Gallery from "./Gallery";

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/booking",
        element: <Booking />,
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
