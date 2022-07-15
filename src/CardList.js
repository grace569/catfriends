import React from 'react';
import Card from './Card';


const CardList = (props) => {
  const { cats } = props;
  const cards = cats.map((user,i) => {
    return <Card key={i}
                 id={cats[i].id}
                 name={cats[i].name}
                 email={cats[i].email}
            />
  });

  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList;
