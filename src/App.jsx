import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, MainSection, Menu, DownloadApp } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <MainSection />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/app",
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
