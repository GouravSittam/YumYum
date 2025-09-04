import React, { FC } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../src/Utils/AppStore";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Payment from "./components/Payment";
import Test from "./components/Test";
import { tsSmoke } from "./ts-smoke";
console.debug("TS smoke:", tsSmoke);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const AppLayout: FC = () => (
  <Provider store={AppStore}>
    <Header />
    <RouterProvider router={appRouter} />
    <Footer />
  </Provider>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  import("react-dom/client").then(({ createRoot }) => {
    createRoot(rootElement).render(<AppLayout />);
  });
} else {
  throw new (Object.getPrototypeOf(Error))(
    'Root element with id "root" not found'
  );
}
