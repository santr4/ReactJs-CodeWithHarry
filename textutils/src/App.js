// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const arr = ["Santra ", "Kya ", "Hai ", "- "];

function App() {
  return (
    <>
      <Navbar title="Textutils" contact="Contact" about="About" />
      <Body bodyContent={arr} />
    </>
  );
}

export default App;
