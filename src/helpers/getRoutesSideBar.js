import { ROUTE } from "../share/constants/routeConstants";

const getRoutesSideBar = (routes, type) => {
  switch (type) {
    case ROUTE.ADMIN:
      return routes.filter(
        (route) =>
          route.layout === ROUTE.ADMIN_LAYOUT ||
          route.layout === ROUTE.MANAGEMENT_LAYOUT ||
          route.path === ROUTE.CRYPTO_HOME_PATH
      );
    case ROUTE.CRYPTO:
      return routes.filter(
        (route) =>
          route.path === ROUTE.ADMIN_INDEX_PATH ||
          (route.layout === ROUTE.CRYPTO_LAYOUT && route.isCrypto)
      );
    // case ROUTE.MANAGEMENT:
    //   return routes.filter((route) => route.layout === ROUTE.MANAGEMENT_LAYOUT);
    default:
      return [];
  }
};

export default getRoutesSideBar;
