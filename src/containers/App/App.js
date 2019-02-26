import React, { Component } from 'react';
import { getPresidents } from '../../thunks/getPresidents';
import { connect } from 'react-redux';
import Presidents from '../Presidents/Presidents';
import FilterControls from '../FilterControls/FilterControls';


export class App extends Component {

  componentDidMount() {
    this.props.getPresidents();
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div>
        <header>
          <h1>Presidents Assholes</h1>
          {loading && <h2>Loading data...</h2>}
          {error && <h2>Error fetching data: {error}</h2>}
        </header>
        <FilterControls />
        <Presidents />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
});

export const mapDispatchToProps = (dispatch) => ({
  getPresidents: () => dispatch(getPresidents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
