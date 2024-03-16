import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loading, Layout } from "./components";
import { UserProvider } from "./providers/user.provider";

const Welcome = React.lazy(() => import('./pages/welcome'));
const Task = React.lazy(() => import('./pages/task'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome />} path="/" /> 
          <Route element={<Layout />} path="/task">
            <Route index element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </Suspense>
);

export default App
