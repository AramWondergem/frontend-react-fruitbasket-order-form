import React from 'react';
import Button from "../button/Button";
import "./fruitTile.css"


function FruitTile({fruitEmoticon, fruitName, stateFruit, clickHandler}) {

    // At className row 12: condition for the green background when at least on piece of the vegetable is ordered
    return (
        <section
            id={fruitName} // I use ID to make it possible to find the vegetablename in the click event. This section is the parent of the button. IT is used in the handleClick function on app.js21
            className={stateFruit.[fruitName] > 0 ? `${fruitName} fruitTileWithProduct` : {fruitName}}>

            <p className="name">{fruitEmoticon} {fruitName} </p>

            <Button
                type="button"
                clickHandler={clickHandler}
                className="plusMinusButton"
                name="minus">-</Button>

            <p>{stateFruit.[fruitName]}</p>

            <Button
                type="button"
                clickHandler={(event) => {
                    clickHandler(event);
                }}
                className="plusMinusButton"
                name="plus">+</Button>
        </section>

    );
}

export default FruitTile;

