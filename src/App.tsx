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

function App(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Balkan AI</title>
        <link rel="canonical" href="#" />
      </Helmet>

      <Navbar />
      <Video />
      <Description />
      <Conversation />
      <Info_1 />
      <Info_2 />
      <Vide_2 />
      <Contact />
      <Footer />
      <Login />
      <Chat_Bot />
      <Pay_Pal />
      <Singup />
      <Dashboard/>
    </>
  );
}

export default App;
