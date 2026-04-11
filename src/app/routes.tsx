import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Publications } from "./pages/Publications";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "publications", Component: Publications },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);
