import {BrowserRouter, Switch, Route,} from "react-router-dom";
import { Layout } from "../components/Layout";
import { About } from "../Container/About";
import { Home } from "../Container/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about">
           <About/>
          </Route>
          <Route path="/users">
          
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </Layout>
    </BrowserRouter>
  );
}


