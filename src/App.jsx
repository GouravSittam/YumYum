import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutMe from "./components/About";
// import Contact from "./components/Contact";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import PaymentSystem from "./components/Payment";
// import Footer from "./components/Footer";
// import Test from "./components/Test";

//  VERY IMPORTANT CONCEPTS

//chunking
//Bundling
//code splitting
//dynamic Bundling
//lazy loading
//OnDemand Loading
// Dynamic Import

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="app">
        {/* <Test /> */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentSystem />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
