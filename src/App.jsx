import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Intro from "./pages/Intro";
import ContactUs from "./pages/ContactUs";
import GettingStarted from "./pages/GettingStarted";

console.log(import.meta.env.MODE);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/getting-started",
    element: <GettingStarted />,
  },
]);

function App() {
  return (
    <div className="relative w-screen h-screen">
      <AppBar />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
