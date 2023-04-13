interface Route {
  name: string;
  path: string;
  context: Function;
}

function matchRoute(routes: Route[]) {
  const currentPath = window.location.pathname;
    const route = routes.find((route) => route.path === currentPath);
    if (route) {
      route.context();
    }
}

export default function XRouter(routes: Route[] = []) {
  matchRoute(routes)

  const router = {
    addRoute: (route: Route) => {
      routes.push(route);
    },
    getRoutes: () => routes,
  };

  return router;
}
