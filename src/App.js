import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import TeamDetails from "./Screens/TeamDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styles/main.css";
import "./bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/teamDetails/:id" component={TeamDetails} />
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
