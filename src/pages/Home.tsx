import Conversation from "../components/Conversation/Conversation"
import Description from "../components/Description/Description"
import Footer from "../components/Footer/Footer"
import Info_1 from "../components/Info_1/Info_1"
import Info_2 from "../components/Info_2/Info_2"
import Pay_Pal from "../components/Pay_Pal/Pay_Pal"
import Video from "../components/Video/Video"
import Vide_2 from "../components/Video_2/Vide_2"


const Home = () => {
  return (
    <>
      <Video />
      <Description />
      <Conversation />
      <Info_1 />
      <Info_2 />
      <Vide_2 />
      <Footer />
      <Pay_Pal />
    </>
  )
}

export default Home