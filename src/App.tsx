import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import Description from "./components/Description/Description";
import Conversation from "./components/Conversation/Conversation";
import Info_1 from "./components/Info_1/Info_1";
import Info_2 from "./components/Info_2/Info_2";
import Vide_2 from "./components/Video_2/Vide_2";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Login from "./components/Login/Login";
import Chat_Bot from "./components/Chat_Bot/Chat_Bot";
import Pay_Pal from "./components/Pay_Pal/Pay_Pal";
import Singup from "./components/Signup/Singup";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navbar />} />
        <Route element={<Video />} />
        <Route element={<Description />} />
        <Route element={<Conversation />} />
        <Route element={<Info_1 />} />
        <Route element={<Info_2 />} />
        <Route element={<Vide_2 />} />
        <Route element={<Footer />} />
        <Route element={<Login />} />
        <Route element={<Chat_Bot />} />
        <Route element={<Pay_Pal />} />
        <Route element={<Singup />} />
        <Route element={<Dashboard />} />
      </Route>
    )
  );
  return (
    <>
      <Helmet>
        <title>Balkan AI</title>
        <link rel="canonical" href="#" />
      </Helmet>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
