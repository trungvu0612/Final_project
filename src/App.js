import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux";
import { MainLayout } from "./layout/MainLayout";
import Home from "./page/home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </MainLayout>
      </BrowserRouter>{" "}
    </Provider>
  );
}

export default App;
