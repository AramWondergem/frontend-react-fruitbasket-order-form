import React from 'react';
import Button from "./Button";


function FruitTile({fruitEmoticon, fruitName,stateFruit,setStateFruit}) {

    setStateFruit({...stateFruit, aubergine:1})
    console.log(stateFruit.aubergine)


    return (
        <section>
            <p>{fruitEmoticon}  {fruitName} </p>
            <Button
            type="button"
            clickHandler={() => {
                const value = stateFruit.[fruitName] === 0 ? stateFruit.[fruitName] : (stateFruit.[fruitName] - 1);
                console.log(value);
                // () => setStateFruit({...stateFruit, [fruitName]:value});

            }}
            className="plusMinusButton">-</Button>
            <p>{stateFruit.[fruitName]}</p>
            <Button
            type="button"
            clickHandler={() => {
                const value = (stateFruit.[fruitName] + 1);
                console.log(value)
                // setStateFruit({...stateFruit, [fruitName]:value};
            }}
            className="plusMinusButton">+</Button>
        </section>
    );
}

export default FruitTile;

//({fruitName}) => plusFunction({fruitName})
//