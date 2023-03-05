import Chat_Bot from "../components/Chat_Bot/Chat_Bot"
import Conversation from "../components/Conversation/Conversation"
import Dashboard from "../components/Dashboard/Dashboard"
import Description from "../components/Description/Description"
import Footer from "../components/Footer/Footer"
import Info_1 from "../components/Info_1/Info_1"
import Info_2 from "../components/Info_2/Info_2"
import Login from "../components/Login/Login"
import Pay_Pal from "../components/Pay_Pal/Pay_Pal"
import Singup from "../components/Signup/Singup"
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
      <Login />
      <Chat_Bot />
      <Pay_Pal />
      <Singup />
      <Dashboard />
    </>
  )
}

export default Home