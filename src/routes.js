import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import {
  CryptoHome,
  Cryptocurrencies,
  CryptoDetail,
  Exchanges,
  News,
} from "views/crypto";
import TodoList from "views/todo/TodoList";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  // Crypto routes
  {
    path: "/home",
    name: "Crypto ",
    icon: "fab fa-bitcoin text-yellow",
    component: CryptoHome,
    layout: "/crypto",
    isCrypto: true,
  },
  {
    path: "/cryptocurrencies",
    name: "Cryptocurrencies",
    icon: "ni ni-money-coins text-primary",
    component: Cryptocurrencies,
    layout: "/crypto",
    isCrypto: true,
  },
  {
    path: "/detail/:coinId",
    name: "CryptoDetail",
    icon: "ni ni-tv-2 text-primary",
    component: CryptoDetail,
    layout: "/crypto",
    // isCrypto: true,
  },
  // {
  //   path: "/exchanges",
  //   name: "Exchanges",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Exchanges,
  //   layout: "/crypto",
  //   isCrypto: true,
  // },
  {
    path: "/news",
    name: "News",
    icon: "far fa-newspaper text-blue",
    component: News,
    layout: "/crypto",
    isCrypto: true,
  },
  {
    path: "/todos",
    name: "Todo List",
    icon: "ni ni-bullet-list-67 text-green",
    component: TodoList,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },

  // Auth
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
