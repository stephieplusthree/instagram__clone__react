import React from "react";
import "./App.css";
import Post from './Post';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://toogreen.ca/instagreen/img/instagreen.svg"
          height="40px;"
          alt=""
        />
      </div>

      <Post username="stephieplusthree" caption="WOW, it works" imageUrl="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
      <Post username="Ryan" caption="Awesome" imageUrl="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
      <Post username="Malia" caption="Fantastic" imageUrl="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />

    </div>
  );
}

export default App;
