import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Gallery, Home, SingleImage, Error } from "./pages";

const App = () => {
  return (
    <>
      <main className="container mx-auto px-8 lg:px-24">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/singleimage/:id" element={<SingleImage />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
