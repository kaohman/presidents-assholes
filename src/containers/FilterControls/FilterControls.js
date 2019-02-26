import React from 'react';
import { connect } from 'react-redux'; 
import { setParty } from '../../actions';

export const FilterControls = ({ setParty }) => {
  const updateParty = (e) => {
    setParty(e.target.value)
  }

  return (
    <div className='filter-container'>
      <select onChange={updateParty}>
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

export const mapDispatchToProps = (dispatch) => ({
  setParty: (party) => dispatch(setParty(party)),
});

export default connect(null, mapDispatchToProps)(FilterControls);