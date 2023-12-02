import { Navigate, Route, Routes } from "@solidjs/router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AboutPage from "./pages/AboutPage";
import AboutBelu from "./pages/AboutPages/AboutBelu";
import AboutDavid from "./pages/AboutPages/AboutDavid";
import AboutJimmy from "./pages/AboutPages/AboutJimmy";
import AboutKomal from "./pages/AboutPages/AboutKomal";
import AboutLuis from "./pages/AboutPages/AboutLuis";
import AboutMankit from "./pages/AboutPages/AboutMankit";
import AboutTin from "./pages/AboutPages/AboutTin";
import DashboardPage from "./pages/DashboardPage";
import ForgetPage from "./pages/ForgetPage";
import HiddenTrackingPage from "./pages/HiddenTrackingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegistrationPage from "./pages/RegistrationPage";
import SettingsPage from "./pages/SettingsPage";
import EtcPage from "./pages/SettingsPages/EtcPage";
import ProfilePage from "./pages/SettingsPages/ProfilePage";
import BusinessProfilePage from "./pages/SettingsPages/BusinessProfilePage";
import SupportPage from "./pages/SupportPage";
import TrackingInfoPage from "./pages/TrackingInfoPage";
import TrackingPage from "./pages/TrackingPage";
import BusinessTrackingPage from "./pages/BusinessTrackingPage";
import ShipmentsTrackingPage from "./pages/ShipmentsTrackingPage";
import UploadPage from "./pages/UploadPage";
import BusinessUploadPage from "./pages/BusinessUploadPage";
import TOSPage from "./pages/TOSPage";

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
              <Route path="/businessupload" component={BusinessUploadPage} />
              <Route path="/tracking">
                <Route path="/" component={TrackingPage} />
                <Route path="/:id" component={TrackingInfoPage} />
              </Route>
              <Route path="/businesstracking">
                <Route path="/" component={BusinessTrackingPage} />
                <Route path="/:id" component={TrackingInfoPage} />
              </Route>
              <Route path="/hiddentracking">
                <Route path="/" component={HiddenTrackingPage} />
                <Route path="/:id" component={TrackingInfoPage} />
              </Route>
              <Route path="/shipmentstracking">
                <Route path="/" component={ShipmentsTrackingPage} />
                <Route path="/:id" component={TrackingInfoPage} />
              </Route>
              <Route path="/support" component={SupportPage} />
              <Route path="/tos" component={TOSPage} />
              <Route path="/settings" component={SettingsPage}>
                <Route path="/" element={<Navigate href={"profile"} />} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/etc" component={EtcPage} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}