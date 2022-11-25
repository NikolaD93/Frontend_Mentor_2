import Articles from "./components/Articles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  

  return (
    <div>
      <Navbar/>
      <Header/>
      <MainContent/>
      <Articles/>
      <Footer/>
    </div>
  )
}

export default App;
