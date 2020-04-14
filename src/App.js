import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeFeature, buyItem } from './actions/actions';

const App = ({removeFeature, store}) => {


  const removeFeature = item => {
    removeFeature(item)
  };

  const buyItem = item => {
    buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} remove={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} add={buyIt}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);