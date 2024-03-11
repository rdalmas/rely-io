import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loading, Layout } from "./components";
import './App.css'

const Welcome = React.lazy(() => import('./pages/welcome'));
const Task = React.lazy(() => import('./pages/task'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="/" /> 
        <Route element={<Layout />} path="/task">
          <Route index element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default App
