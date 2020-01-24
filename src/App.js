import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PokemonGallery from "./components/PokemonGallery";
import Header from "./components/Header";
import About from "./components/About";
import NotFound from "./components/NotFound";
import "./App.css";

const Home = () => {
  return (
    <div>
      <p>Hello, welcome to the Pokemon fansite!</p>
      <img alt="pokeball" src={`${process.env.PUBLIC_URL}/img/pokeball.gif`} />
      <p>
        source: <a href="https://rewatchingpokemon.tumblr.com">tumblr</a>
      </p>
    </div>
  );
};

const Gallery = () => {
  return <PokemonGallery />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
