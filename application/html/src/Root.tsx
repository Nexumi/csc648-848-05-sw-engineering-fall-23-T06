import { Routes, Route, Navigate } from "@solidjs/router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutBelu from "./pages/AboutPages/AboutBelu";
import AboutDavid from "./pages/AboutPages/AboutDavid";
import AboutJimmy from "./pages/AboutPages/AboutJimmy";
import AboutKomal from "./pages/AboutPages/AboutKomal";
import AboutLuis from "./pages/AboutPages/AboutLuis";
import AboutMankit from "./pages/AboutPages/AboutMankit";
import AboutTin from "./pages/AboutPages/AboutTin";
import LoginPage from "./pages/LoginPage";
import ForgetPage from "./pages/ForgetPage";
import TrackingPage from "./pages/TrackingPage";
import PageNotFound from "./pages/PageNotFound";
import DashboardPage from "./pages/DashboardPage";
import UploadPage from "./pages/UploadPage";
import Footer from "./components/Footer";
import RegistrationPage from "./pages/RegistrationPage";
import TrackingInfoPage from "./pages/TrackingInfoPage";
import ApiTestPage from "./pages/ApiTestPage";
import SupportPage from "./pages/SupportPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/SettingsPages/ProfilePage";
import EtcPage from "./pages/SettingsPages/EtcPage";

export default function Root() {
  return (
    <>
      <div class="flex overflow-y-hidden h-screen">
        <SideBar />
        <div class="grow flex flex-col overflow-y-auto min-h-screen">
          <div class="grow px-10 py-8">
            <Header />
            <Routes>
              <Route path="/*" component={PageNotFound} />
              <Route path="/" component={HomePage} />
              <Route path="/about" component={AboutPage}>
                <Route path="/" />
                <Route path="/belu" component={AboutBelu} />
                <Route path="/david" component={AboutDavid} />
                <Route path="/jimmy" component={AboutJimmy} />
                <Route path="/komal" component={AboutKomal} />
                <Route path="/luis" component={AboutLuis} />
                <Route path="/mankit" component={AboutMankit} />
                <Route path="/tin" component={AboutTin} />
              </Route>
              <Route path="/login" component={LoginPage} />
              <Route path="/registration" component={RegistrationPage} />
              <Route path="/forget" component={ForgetPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/upload" component={UploadPage} />
              <Route path="/tracking">
                <Route path="/" component={TrackingPage} />
                <Route path="/:id" component={TrackingInfoPage} />
              </Route>
              <Route path="/support" component={SupportPage} />
              <Route path="/settings" component={SettingsPage}>
                <Route path="/" element={<Navigate href={"profile"} />} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/etc" component={EtcPage} />
              </Route>
              {/* <Route path="/api_test" component={ApiTestPage} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}