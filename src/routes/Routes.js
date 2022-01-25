import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "utils/pathNames";
// ========= Containers =========
import Users from "containers/Users";
import UserForm from "containers/Users/Form";

const AppRoutes = (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_PATHS.usersList} element={<Users />} />
      <Route path={ROUTE_PATHS.addUser} element={<UserForm />} />
      <Route
        path={`${ROUTE_PATHS.editUser}/:id`}
        element={<UserForm />}
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
