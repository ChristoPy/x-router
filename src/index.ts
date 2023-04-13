import XRouter from "./main";

const app = document.getElementById('app')!;

XRouter([
  {
    name: 'home',
    path: '/',
    context: () => app.innerHTML = 'home',
  },
  {
    name: 'about',
    path: '/about',
    context: () => app.innerHTML = 'about',
  }
]);
