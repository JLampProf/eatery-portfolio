import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, MainSection, Menu, DownloadApp } from "./pages";

const router = createBrowserRouter([
  {
    path: "/eatery-portfolio/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <MainSection />,
      },
      {
        path: "/eatery-portfolio/menu",
        element: <Menu />,
      },
      {
        path: "/eatery-portfolio/app",
        element: <DownloadApp />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
