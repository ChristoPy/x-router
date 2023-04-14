interface RouteParams {
  name: string;
  path: string;
  context: Function;
  title?: string;
}
interface Route extends RouteParams {
  params: Record<string, string>;
}

export default function XRouter(routes: RouteParams[] = []) {
  window.onpopstate = back;
  function matchRoute(routes: RouteParams[]): Route {
    const currentPath = window.location.pathname;
    const route = routes.find((route) => route.path === currentPath);
    const params: Record<string, string> = {};

    new URLSearchParams(window.location.search).forEach((value, key) => {
      params[key] = value;
    })

    if (route) {
      route.context();
      document.title = route.title || document.title;
      return {
        ...route,
        params
      }
    }

    return {
      context: () => {},
      name: '',
      path: currentPath,
      title: '',
      params
    }
  }
  function back() {
    matchRoute(routes);
  }
  function navigate(path: string, data?: any) {
    window.history.pushState(data, '', path)
    matchRoute(routes);
  }

  let route = matchRoute(routes);

  return {
    navigate,
    get route() {
      return route
    }
  };
}
