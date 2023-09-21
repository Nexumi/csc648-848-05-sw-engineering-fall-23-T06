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

export default function Root() {
  return (
    <div class="h-screen">
      <div class="px-10 py-8">
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
        </Routes>
      </div>
    </div>
  );
}