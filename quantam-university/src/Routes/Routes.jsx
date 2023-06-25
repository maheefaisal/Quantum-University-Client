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
import CreditTransfer from "../Pages/OtherPages/Admission/CreditTransfer/CreditTransfer";
import ContactUs from "../Pages/OtherPages/ContactUs/ContactUs";
import BBA from "../Pages/OtherPages/Programs/BBA/BBA";
import BaHonsEnglish from "../Pages/OtherPages/Programs/BaHonsEnglish/BaHonsEnglish";
import BscCse from "../Pages/OtherPages/Programs/BscCse/BscCse";
import BscEconomics from "../Pages/OtherPages/Programs/BscEconomics/BscEconomics";
import BSCEEE from "../Pages/OtherPages/Programs/BSCEEE/BSCEEE";
import BSCHonsEnglish from "../Pages/OtherPages/Programs/BSCHonsEnglish/BSCHonsEnglish";
import BSCTextileEngineering from "../Pages/OtherPages/Programs/BSCTextileEngineering/BSCTextileEngineering";
import LLB from "../Pages/OtherPages/Programs/LL.BHons/LL.B";
import LLMTwoYear from "../Pages/OtherPages/Programs/LLMTwoYear/LLMTwoYear";
import LLMOneYear from "../Pages/OtherPages/Programs/LLMOneYear/LLMOneYear";
import MSCINECONOMICS from "../Pages/OtherPages/Programs/MSCINECONOICS/MSCINECONOICS";
import MSCINMATHEMATICS from "../Pages/OtherPages/Programs/MSCINMATHEMATICS/MSCINMATHEMATICS";
import MAInEnglish from "../Pages/OtherPages/Programs/MAInEnglish/MAInEnglish";
import ExecutiveMba from "../Pages/OtherPages/Programs/ExecutiveMBA/ExecutiveMba";
import MBA from "../Pages/OtherPages/Programs/MBA/MBA";

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
      {
        path: "/credittransfer",
        element: <CreditTransfer></CreditTransfer>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/bba",
        element: <BBA></BBA>,
      },
      {
        path: "/bahonsenglish",
        element: <BaHonsEnglish></BaHonsEnglish>,
      },
      {
        path: "/bsccse",
        element: <BscCse></BscCse>,
      },

      {
        path: "/bsceconomics",
        element: <BscEconomics></BscEconomics>,
      },
      {
        path: "/bsceee",
        element: <BSCEEE></BSCEEE>,
      },
      {
        path: "/bschonsenglish",
        element: <BSCHonsEnglish></BSCHonsEnglish>,
      },
      {
        path: "/bsctextileengineering",
        element: <BSCTextileEngineering></BSCTextileEngineering>,
      },
      {
        path: "/LLB",
        element: <LLB></LLB>,
      },
      {
        path: "/LLMTwoYear",
        element: <LLMTwoYear></LLMTwoYear>,
      },
      {
        path: "/LLMOneYear",
        element: <LLMOneYear></LLMOneYear>,
      },
      {
        path: "/msceconomics",
        element: <MSCINECONOMICS></MSCINECONOMICS>,
      },
      {
        path: "/MSCINMATHEMATICS",
        element: <MSCINMATHEMATICS></MSCINMATHEMATICS>,
      },
      {
        path: "/mainenglish",
        element: <MAInEnglish></MAInEnglish>,
      },
      {
        path: "/executivemba",
        element: <ExecutiveMba></ExecutiveMba>,
      },
      {
        path: "/MBA",
        element: <MBA></MBA>,
      },
    ],
  },
]);

export default router;
