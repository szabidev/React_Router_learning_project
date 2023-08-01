import {
  // BrowserRouter,
  // Routes,
  Route,
  // Link,
  // NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    // not using Routes component as parent component anymore, instead just Route - layout component that will wrap the rest of the components
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* NESTED ROUTES */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      {/* For Loaders example - careersLoader to load the Api before page renders*/}
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        {/* : changeable part of the route */}
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // associate the error page with this component - better yet put it on the parent route to apply for all routes, error bubbles up
          // errorElement={<CareersError />}
        />
      </Route>

      {/* If none of the above pages match * - show this page instead (error page) */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  // OLDER WAY OF WORKING, BEFORE REACT ROUTER 6.4
  // return (
  //   <BrowserRouter>
  //     <header>
  //       <nav>
  //         <h1>Jobarouter</h1>
  //         {/* NavLink gets the active className when on page, easier to style if wanted */}
  //         <NavLink to="/">Home</NavLink>
  //         <NavLink to="about">About</NavLink>
  //       </nav>
  //     </header>
  //     <main>
  //       <Routes>
  //         {/* for index page I can use the property path='/' or just the index property */}
  //         <Route index element={<Home />} />
  //         <Route path="about" element={<About />} />
  //       </Routes>
  //     </main>
  //   </BrowserRouter>
  // );

  return <RouterProvider router={router} />;
}

export default App;
