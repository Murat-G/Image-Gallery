import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageStore from "../pages/album/ImageStore";
import MyImages from "../pages/collection/MyImages";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import  DataContextProvider from '../context/DataContext';

function AppRouter() {

  return (
    <Router>
      <Header />
      <Switch>
        <DataContextProvider>
          <Route exact path="/album" component={ImageStore} />
          <Route exact path="/" component={MyImages} />
        </DataContextProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;