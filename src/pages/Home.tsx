import Conversation from "../components/Conversation/Conversation";
import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer";
import Info_1 from "../components/Info_1/Info_1";
import Info_2 from "../components/Info_2/Info_2";
import Video from "../components/Video/Video";
import Vide_2 from "../components/Video_2/Vide_2";
import { useRef } from "react";

const Home = () => {
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Video resultRef={resultRef} />
      <Description ref={resultRef} />
      <Conversation />
      <Info_1 />
      <Info_2 />
      <Vide_2 />
      <Footer />
    </>
  );
};

export default Home;
