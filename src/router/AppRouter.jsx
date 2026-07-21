import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Programs from "../pages/programs/index.jsx";
import BEP from "../components/Programs/ProgramsSeparatePgs/BEP.jsx";
import BioAcademy from "../components/Programs/ProgramsSeparatePgs/bioAcademy.jsx";
import Startups from "../pages/Startups.jsx";
import StartupDetails from "../pages/StartupDetails.jsx";
import Contact from "../pages/Contact.jsx";
import DIYBiolab from "../pages/DIYBiolab.jsx";
import IBSC from "../pages/ibsc";
import Research from "../pages/Research/index.jsx";
import GrantsAgent from './../pages/Grantsagent/index';
// Import StartupDeals only once
import StartupDealsPage from "../pages/StartupDeals/index.jsx"; 
import UserDashboard from "../components/StartupDeals/Dashboard/UserDashboard.jsx";
import ForgotPassword from "../components/StartupDeals/Dashboard/ForgotPassword.jsx";
import AuthPage from "../components/StartupDeals/AuthenticationPg/AuthPg.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/bep" element={<BEP />} />
        <Route path="/programs/bio-academy" element={<BioAcademy />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/startups/:startupId" element={<StartupDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diy-biolab" element={<DIYBiolab />} />
        <Route path="/ibsc" element={<IBSC />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/grantsagent" element={<GrantsAgent/>} />
        <Route path="/startupdeals" element={<StartupDealsPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/startupdeals/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;