import React from 'react';
import { connect } from 'react-redux';
import President from '../../components/President/President';

export const Presidents = ({ presidents }) => {

  return (
    <div className='presidents-container'>
      {
        presidents.map(president => {
          return <President president={president} key={president.number}/>
        })
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
});

export default connect(mapStateToProps)(Presidents);