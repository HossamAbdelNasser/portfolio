import { useContext } from "react";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Intro from "./components/Intro/Intro.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import Toggle from "./components/Toggle/Toggle.jsx";
import { ThemeContext } from './context'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div  style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
    </div>;
};

export default App;