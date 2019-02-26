import React from 'react';
import { connect } from 'react-redux'; 
import { setParty } from '../../actions';

export const FilterControls = () => {

  return (
    <div>
      <select>
        <option>

        </option>
      </select>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  setParty: (party) => dispatch(setParty(party)),
});

export default connect(null, mapDispatchToProps)(FilterControls);