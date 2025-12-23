import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProductDetailPage from '@/pages/product/page';



const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
  path: '/products/:slug',
  element: <ProductDetailPage />,
}
];

export default routes;
