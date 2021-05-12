import "bootstrap/dist/css/bootstrap.min.css";
//https://stackoverflow.com/questions/63748312/react-bootstrap-cards-and-carddeck-components-responsive-layout
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
// import Error404 from "./pages/error404";
// import Movie from "./pages/movie";∫
import MenuTop from "./components/MenuTop";

export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop></MenuTop>
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home></Home>
            </Route>
            <Route path="/upload" exact={true}>
              {/* <Movie></Movie> */}
            </Route>

            <Route path="/*">{/* <Error404></Error404> */}</Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}
