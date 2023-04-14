interface Route {
  name: string;
  path: string;
  context: Function;
  title?: string;
}

export default function XRouter(routes: Route[] = []) {
  window.onpopstate = back;
  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const path = link.getAttribute('href');
      const target = link.getAttribute('target') || '';
      const isExternal = target.length > 0;

      if (path && !isExternal) {
        e.preventDefault();
        navigate(path);
      }
    });
  });

  function matchRoute(routes: Route[]): Route {
    const currentPath = window.location.pathname;
    const route = routes.find((route) => route.path === currentPath);
    if (route) {
      route.context();
      document.title = route.title || document.title;
      return route
    }

    return {
      context: () => {},
      name: '',
      path: currentPath,
      title: ''
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
