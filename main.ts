import App from './App';
import { routes } from './routes';
import viteSSR, { ClientOnly } from 'vite-ssr';
import { createHead } from '@vueuse/head';

export default viteSSR(App, { routes }, ({ app, initialState }) => {
  const head = createHead();
  app.use(head);

  app.component(ClientOnly.name, ClientOnly);
  app.provide('initialState', initialState);
  return { head };
});
