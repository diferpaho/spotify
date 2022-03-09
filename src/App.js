import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Podcast from './components/Podcast';
import Home from './components/Home';
import Left from "./components/Left";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid ">
      <div id="row" className="row">
        <Left></Left>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="podcast/:id" element={<Podcast />} />

          </Routes>
        </BrowserRouter>


      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
