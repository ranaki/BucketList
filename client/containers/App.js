import React from 'react';
import Nav from '../components/Nav';
import Career from '../components/Career';
import Travel from '../components/Travel';
import Food from '../components/Food';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <Career />
        <Travel />
        <Food />
      </div>
    );
  }
}

export default App;
