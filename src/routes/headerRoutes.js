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
    isPrived: false,
    restricted: false,
  },
  {
    name: "contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/contacts/Contacts")),
    isPrived: true,
    restricted: false,
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/login/Login")),
    isPrived: false,
    restricted: true,
  },
  {
    path: "/register",
    exact: true,
    component: lazy(() => import("../pages/registration/Registration")),
    isPrived: false,
    restricted: true,
  },
];
