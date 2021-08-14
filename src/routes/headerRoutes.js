/** @format */

import { lazy } from "react";
import sprite from "../image/sprite.svg";

export const headerRoutes = [
  {
    name: (
      <svg className="logoIcon">
        <use href={sprite + "#phone-book"} />
      </svg>
    ),
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/home/Home")),
  },
  {
    name: "contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/contacts/Contacts")),
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/login/Login")),
  },
  {
    path: "/register",
    exact: true,
    component: lazy(() => import("../pages/registration/Registration")),
  },
];
