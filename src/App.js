import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HbookForm from "./components/HbookForm";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
	return (
		<div>
			<Navigation />
      <Switch>
      <Route path="/hbookform">
        <HbookForm />
      </Route>
      <Route path="/">
        <Main />
      </Route>

      </Switch>
      <Footer />
		</div>
	);
}

export default App;
