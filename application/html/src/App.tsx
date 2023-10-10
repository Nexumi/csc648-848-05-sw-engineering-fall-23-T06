import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { Router } from "@solidjs/router";
import Root from "./Root";
import { Toaster } from 'solid-toast';

const App: Component = () => {
  return (
    <Router>
      <Root />
      <Toaster />
    </Router>
  );
};

export default App;
