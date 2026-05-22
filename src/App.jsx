import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Home/Landing/Landing';
import Video from './Components/Home/Video';
import About from './Components/Home/About';
import Book from './Components/Home/Book';
import Connect from './Components/Home/Connect';
import Footer from './Components/Footer/Footer';
import Series from './Components/Series/Series';
import Allepisode from './Components/Episode/Allepisode';
import Episode from './Components/Episode/Episode';
import Episodes from './Components/Episode/Episode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Video />
              <About />
              <Book />
              <Connect />
              <Footer />
            </>
          }
        />

        {/* Series page */}
        <Route path="/series" element={<Series />} />

        {/* Episodes */}
        <Route path="/episode" element={<Episode />} />
        <Route path="/all-episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
