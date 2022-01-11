import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import Views from "./views";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Views} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
