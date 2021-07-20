import {BrowserRouter, Switch, Route,} from "react-router-dom";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";
import { About } from "../Container/About";
import { Home } from "../Container/Home";
import { Informacion } from "../Container/Informacion";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path='/informacion'component={Informacion}/>
          <Route path="*" component={NotFound} />
        </Switch>
        </Layout>
    </BrowserRouter>
  );
}


