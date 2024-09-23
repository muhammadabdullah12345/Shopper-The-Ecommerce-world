import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Shopper from "./components/Pages/Shopper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Landingpage/Navbar";
import Cart from "./components/Pages/Cart/Cart";
import Shop from "./components/Pages/Shop";
import Footer from "./components/Landingpage/Footer";
import Contact from "./components/Pages/Contact";
import Policies from "./components/Pages/Policies";
import Jewelery from "./components/Pages/Jewelery";
import DetailedMenItem from "./components/Items/DetailedMenItem";
import DetailedWomenItem from "./components/Items/DetailedWomenItem";
import DetailedJeweleryItem from "./components/Items/DetailedJeweleryItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shopper />,
  },
  {
    path: "/men",
    element: (
      <>
        <Navbar />
        <Men />
        <Footer />
      </>
    ),
  },
  {
    path: "/women",
    element: (
      <>
        <Navbar />
        <Women />
        <Footer />
      </>
    ),
  },
  {
    path: "/jewelery",
    element: (
      <>
        <Navbar />
        <Jewelery />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <Shop />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/policies",
    element: (
      <>
        <Navbar />
        <Policies />
        <Footer />
      </>
    ),
  },
  {
    path: "/mendetail",
    element: (
      <>
        <Navbar />
        <DetailedMenItem />
        <Footer />
      </>
    ),
  },
  {
    path: "/womendetail",
    element: (
      <>
        <Navbar />
        <DetailedWomenItem />
        <Footer />
      </>
    ),
  },
  {
    path: "/jewelerydetail",
    element: (
      <>
        <Navbar />
        <DetailedJeweleryItem />
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
