
import City from "./components/City";
import Collection from "./components/Collection";
import Explore from "./components/Explore";
import Footer from "./components/Footer"
import Main from "./components/Main";
import Nav from "./components/Nav";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Collection/>
      <City />
      <Signup />
      <Explore/>
      <Footer />
    </>
  );
}

export default App;
