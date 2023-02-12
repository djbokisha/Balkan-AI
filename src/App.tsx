import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import Description from "./components/Description/Description";
import Conversation from "./components/Conversation/Conversation";
import Info_1 from "./components/Info_1/Info_1";
import Info_2 from "./components/Info_2/Info_2";
import Vide_2 from "./components/Video_2/Vide_2";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <Description />
      <Conversation />
      <Info_1 />
      <Info_2 />
      <Vide_2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
