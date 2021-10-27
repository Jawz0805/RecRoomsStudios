
import './App.scss';
import Header from "./Containers/Header/Header";

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Containers/Footer/Footer";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;

