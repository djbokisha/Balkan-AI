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
    </>
  );
}

export default App;
