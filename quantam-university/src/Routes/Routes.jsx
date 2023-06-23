import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OtherPages/About/History/History";
import MissionandObjectives from "../Pages/OtherPages/About/MissionandObjectives/MissionandObjectives";
import Campus from "../Pages/OtherPages/About/Campus/Campus";
import GeneralRulesandRegulations from "../Pages/OtherPages/About/GeneralRulesandRegulations/GeneralRulesandRegulations";
import Career from "../Pages/OtherPages/About/Career/Career";
import EvaluationGradingSystem from "../Pages/OtherPages/Academic/EvaluationGradingSystem/EvaluationGradingSystem";
import RulesRegulation from "../Pages/OtherPages/Academic/RulesRegulations/RulesRegulation";
import SemesterPolicy from "../Pages/OtherPages/Academic/Semester Policy/SemesterPolicy";
import SpecialFeaturesofBUBT from "../Pages/OtherPages/Academic/SpecialFeaturesofBUBT/SpecialFeaturesofBUBT";
import TuitionFees from "../Pages/OtherPages/Admission/TuitionFees/TuitionFees";
import ScholarshipsWaiver from "../Pages/OtherPages/Admission/ScholarshipsWaiver/ScholarshipsWaiver";

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
        element: <Career></Career>,
      },
      {
        path: "/evaluationgradingsystem",
        element: <EvaluationGradingSystem></EvaluationGradingSystem>,
      },
      {
        path: "/rulesregulation",
        element: <RulesRegulation></RulesRegulation>,
      },
      {
        path: "/semesterpolicy",
        element: <SemesterPolicy></SemesterPolicy>,
      },
      {
        path: "/specialfeatures",
        element: <SpecialFeaturesofBUBT></SpecialFeaturesofBUBT>,
      },
      {
        path: "/tuitionfees",
        element: <TuitionFees></TuitionFees>,
      },
      {
        path: "/scholarshipswaiver",
        element: <ScholarshipsWaiver></ScholarshipsWaiver>,
      },
    ],
  },
]);

export default router;
