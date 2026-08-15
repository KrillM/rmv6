import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx"
import Home from "./screens/Home.tsx";
import About from "./screens/About.tsx";
import NotFound from "./screens/NotFound.tsx";
import User from "./screens/users/User.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        // errorElement: <HomeCrashed/> // 일부 페이지 에러 처리 방법
      },
      {
        path: "about",
        element: <About />
      },
      {
        path:"users/:userId",
        element: <User />
      }
    ],
    errorElement: <NotFound />
  }
]);

export default router;