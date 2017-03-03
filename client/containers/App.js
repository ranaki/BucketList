import React from 'react';
import Buckets from '../components/Buckets';
import Nav from '../components/Nav';
// import Career from '../components/Career';
// import Travel from '../components/Travel';
// import Food from '../components/Food';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <Buckets />
      </div>
    );
  }
}

export default App;
