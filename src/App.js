
import './App.scss';
import Header from "./Containers/Header/Header";
import PageRouter from "./Navigation/PageRouter/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <PageRouter />
      <Footer />
    </Router>
  );
}

export default App;

