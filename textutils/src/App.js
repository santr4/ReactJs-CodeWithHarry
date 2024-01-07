// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import TextForm from "./components/TextForm";

// const arr = ["Hello ", "Everyone "];

function App() {
  return (
    <>
      <Navbar title="Textutils" contact="Contact" about="About" />
      {/* <Body bodyContent={arr} /> */}
      <br />
      <div className="container">
        <TextForm />
      </div>
    </>
  );
}

export default App;
