import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
import About from "../pages/Home/About/Pages/About";
import Vision from "../pages/Home/About/Pages/Vision";
import Mission from "../pages/Home/About/Pages/Mission";
import Objectives from "../pages/Home/About/Pages/Objectives";
import Employment from "../pages/Home/About/Pages/Employment";
import SocialInclusion from "../pages/Home/About/Pages/SocialInclusion";
import ResearchInnovation from "../pages/Home/About/Pages/ResearchInnovation";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
        children: [
          {
            index: true,
            Component: Vision,
          },
          {
            path: "mission",
            Component: Mission,
          },
          {
            path: "objectives",
            Component: Objectives,
          },
          {
            path: "employment",
            Component: Employment,
          },
          {
            path: "socialInclusion",
            Component: SocialInclusion,
          },
          {
            path: "researchInnovation",
            Component: ResearchInnovation,
          },
        ],
      },
    ],
  },
]);
