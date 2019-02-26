import React from 'react';
import { connect } from 'react-redux';
import President from '../../components/President/President';

export const Presidents = ({ presidents, party }) => {
  let filteredPresidents;
  if (party === '') {
    filteredPresidents = presidents;
  } else {
    filteredPresidents = presidents.filter(president => president.party === party);
  }

  return (
    <div className='presidents-container'>
      {
        filteredPresidents.map(president => {
          return <President president={president} key={president.number}/>
        })
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  party: state.party,
});

export default connect(mapStateToProps)(Presidents);