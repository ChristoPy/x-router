import XRouter from "./main";

const app = document.getElementById('app')!;

const router = XRouter([
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

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const path = link.getAttribute('href');
    const target = link.getAttribute('target') || '';
    const isExternal = target.length > 0;

    if (path && !isExternal) {
      e.preventDefault();
      router.navigate(path);
    }
  });
});
