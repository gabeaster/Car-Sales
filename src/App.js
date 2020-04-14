import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeFeature, buyItem } from './actions/actions';

export const App = ({removeFeature, store, car, additionalPrice, buyItem, additionalFeatures}) => {


  const remove = item => {
    removeFeature(item)
  };

  const buy = item => {
    buyItem(item);
  };
  console.log(store);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} remove={remove}/>
      </div>
      <div className="box">
        <AdditionalFeatures features={additionalFeatures} buy={buy}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);