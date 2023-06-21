import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OtherPages/About/History/History";
import MissionandObjectives from "../Pages/OtherPages/About/MissionandObjectives/MissionandObjectives";
import Campus from "../Pages/OtherPages/About/Campus/Campus";
import GeneralRulesandRegulations from "../Pages/OtherPages/About/GeneralRulesandRegulations/GeneralRulesandRegulations";
import Career from "../Pages/OtherPages/About/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/missionandobjectives",
        element: <MissionandObjectives></MissionandObjectives>,
      },
      {
        path: "/campus",
        element: <Campus></Campus>,
      },
      {
        path: "/GeneralRulesandRegulations",
        element: <GeneralRulesandRegulations></GeneralRulesandRegulations>,
      },
      {
        path: "/career",
        element: <Career></Career>
      },
    ],
  },
]);

export default router;
