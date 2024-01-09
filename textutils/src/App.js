// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import TextForm from "./components/TextForm";
import About from "./components/About";

// const arr = ["Hello ", "Everyone "];

function App() {
  return (
    <>
      <Navbar title="Textutils" contact="Contact" about="About" />
      {/* <Body bodyContent={arr} /> */}
      <div className="container my-5">
        <TextForm heading="Enter Your Text here!" />
      </div>
      <div className="container my-3">
        <About heading="About Us" />
      </div>
    </>
  );
}

export default App;
