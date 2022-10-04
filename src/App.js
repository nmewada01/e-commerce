import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes /><br/>
      <Footer />
    </div>
  );
}

export default App;

export const nav = () => {
  return <>navigate("/cart")</>;
};
