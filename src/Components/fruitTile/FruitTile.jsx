import React from 'react';
import Button from "../button/Button";
import "./fruitTile.css"


function FruitTile({fruitEmoticon, fruitName,stateFruit,clickHandler}) {



    return (

        <section className={fruitName}>
            <p className="name">{fruitEmoticon}  {fruitName} </p>
            <Button
            type="button"
            clickHandler={clickHandler}
            className="plusMinusButton"
            name="minus">-</Button>
            <p>{stateFruit.[fruitName]}</p>
            <Button
            type="button"
            clickHandler={clickHandler}
            className="plusMinusButton"
            name="plus">+</Button>
        </section>

    );
}

export default FruitTile;

