import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Footer } from "../pages/Footer.jsx";
import ChatPanelview from "../pages/ChatPanelview.jsx";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 w-full py-6 px-6">
        <Outlet />
      </main>
      <ChatPanelview/>
      <Footer />
    </div>
  );
};

export default MainLayout;
