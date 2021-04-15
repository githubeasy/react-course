import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/Allmeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/Newmeetups";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
