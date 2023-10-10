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
import SearchPage from "./pages/SearchPage";
import TrackingPage from "./pages/TrackingPage";
import PageNotFound from "./pages/PageNotFound";



export default function Root() {
  return (
    <div class="grid min-h-screen px-10 py-8">
      {/* <Header /> */}
      <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
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
  );
}