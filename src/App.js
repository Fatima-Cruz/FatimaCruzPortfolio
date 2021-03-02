import "../src/App.css";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HomePage from "../src/components/HomePage/HomePage"
import ProjectsPage from "../src/components/ProjectsPage/ProjectsPage";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ProjectsPage" component={ProjectsPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
