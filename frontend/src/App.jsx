import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import NotFoundPage from "./screens/NotFoundPage";
 import Navbar from './components/Navbar'
 import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
