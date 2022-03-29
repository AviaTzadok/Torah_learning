import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Showcase from "./components/Showcase/Showcase";
import Cards from "./components/Cards/Cards";
import Location from "./components/Location/Location";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Slider />
      <Cards />
      <Location />
    </div>
  );
}

export default App;
