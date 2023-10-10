import { Routes, Route } from "@solidjs/router";
import Header from "./components/Header";
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
import PageNotFound from "./pages/PageNotFound";
import TrackingPage from "./pages/TrackingPage";

export default function Root() {
  return (
    <div class="h-screen">
      <div class="h-full px-10 py-8">
        <Header />
        <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/about">
              <Route path="/" component={AboutPage} />
              <Route path="/belu" component={AboutBelu} />
              <Route path="/david" component={AboutDavid} />
              <Route path="/jimmy" component={AboutJimmy} />
              <Route path="/komal" component={AboutKomal} />
              <Route path="/luis" component={AboutLuis} />
              <Route path="/mankit" component={AboutMankit} />
              <Route path="/tin" component={AboutTin} />
            </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/forget" component={ForgetPage} />
          <Route path="/*" component={PageNotFound} />
          <Route path="/tracking" component={TrackingPage} />
        </Routes>
      </div>
    </div>
  );
}