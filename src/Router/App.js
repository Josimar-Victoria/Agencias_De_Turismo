import {BrowserRouter, Switch, Route,} from "react-router-dom";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";
import { About } from "../Container/About";
import { Home } from "../Container/Home";
import { Informacion } from "../Container/Informacion";
import { ViajesDetalles } from "../Container/ViajesDetalles";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path='/informacion'component={Informacion}/>
          <Route exact path='/viajes/:viajesId' component={ViajesDetalles}/>
          <Route path="*" component={NotFound} />
        </Switch>
        </Layout>
    </BrowserRouter>
  );
}


