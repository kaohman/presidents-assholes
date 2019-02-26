import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { setParty } from '../../actions';

export class FilterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: ''
    }
  }

  updateParty = (e) => {
    this.props.setParty(e.target.value)
    this.setState({ party: e.target.value });
  }

  render() {
    return (
      <div>
        <select onChange={this.updateParty}>
          <option default value=''>All</option>
          <option value='No Party'>No Party</option>
          <option value='Federalist'>Federalist</option>
          <option value='Democratic-Republican'>Democratic-Republican</option>
          <option value='Whig'>Whig</option>
          <option value='Democratic'>Democratic</option>
          <option value='Republican'>Republican</option>
        </select>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setParty: (party) => dispatch(setParty(party)),
});

export default connect(null, mapDispatchToProps)(FilterControls);