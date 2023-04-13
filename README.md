# X-Router
X-Router is an agnostic SPA (Single Page Application) router for any framework.  
It allows you to easily define and navigate between routes within your application.

## Installation
You can install X-Router using npm or yarn:

```bash
npm install @christopy/x-router
```

```bash
yarn add @christopy/x-router
```

## Usage
First, import XRouter into your application:

```bash
import XRouter from "@christopy/x-router";
```

Then, define your routes as an array of route objects, each containing a `name`, `path`, and a `context` function.  
The `context` function will be called whenever the corresponding route is navigated to, and can be used to update the content of your application:

```js
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
```

When a user navigates to a defined route, X-Router will execute the `context` function associated with that route, allowing you to update the content of your application dynamically.

# License
X-Router is released under the [MIT License](LICENSE).
