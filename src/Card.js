import React from 'react';

const Card = (props) => {
  const {name, email, id} = props;
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="cats" src={`https://robohash.org/${id}?150x150&set=set4`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
