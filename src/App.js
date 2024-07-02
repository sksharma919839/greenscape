import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Service from "./Page/Service";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
