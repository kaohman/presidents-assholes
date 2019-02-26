import React from 'react';

const President = (props) => {
  const { number, president, birth_year, death_year, took_office, left_office, party } = props.president;
  return (
    <div className='president-card'>
      <h3>{president}</h3>
      <h4>{number}</h4>
      <h4>{party}</h4>
      <p>Birth: {birth_year}, Death: {death_year}</p>
      <p>Office: {took_office}-{left_office}</p>
    </div>
  )
}

export default President;