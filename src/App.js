/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React /*useEffect, useState*/ from 'react';
import { Route } from 'react-router';
import { Header } from './components/';
import { Cart, Home } from './pages';
import axios from 'axios';
import store from './redux/store';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

// function App() {
// const [pizzas, setPizzas] = useState([]);
// useEffect(() => {
//   axios
//     .get('http://localhost:3000/db.json')
//     .then(({ data }) => setPizzas(data.pizzas));
// }, []);

//   return (
//     <div className='wrapper'>
//       <Header />
//       <div className='content'>
//         <Route path='/' render={() => <Home items={pizzas} />} exact />
//         <Route path='/cart' component={Cart} exact />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => this.props.setPizzas(data.pizzas));
  }
  render() {
    console.log(this.props);
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route
            path='/'
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { setPizzas: (items) => dispatch(setPizzasAction(items)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
