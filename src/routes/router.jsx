import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
