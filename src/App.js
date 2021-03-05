import Home from "./components/pages/Home";
import Properties from "./components/pages/property/Properties";
import Lands from "./components/pages/land/Lands";
import Rents from "./components/pages/rent/Rents";
import LandDetails from "./components/pages/landdetails/LandDetails";
import PropertyDetails from "./components/pages/propertydetails/PropertyDetails";
import RentDetails from "./components/pages/rentdetails/RentDetails";
import RequestForm from "./components/pages/requestform/RequestForm";
import Contact from "./components/pages/contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./fonts.css";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/properties">
            <Properties />
          </Route>

          <Route path="/lands">
            <Lands />
          </Route>

          <Route path="/property-details">
            <PropertyDetails />
          </Route>

          <Route path="/land-details">
            <LandDetails />
          </Route>

          <Route path="/rents">
            <Rents />
          </Route>

          <Route path="/rent-details">
            <RentDetails />
          </Route>

          <Route path="/request-form">
            <RequestForm />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </div>
      </Switch>
      
    </Router>
  );
}

export default App;
