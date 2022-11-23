import React, {useState} from 'react';
import './App.css';
import FruitTile from "./Components/fruitTile/FruitTile";
import Button from "./Components/button/Button";


function App() {

    const [stateFruit, setStateFruit] = useState({aubergine: 0, mais: 0, peper: 0, brocolli: 0})

// const {aubergine, mais, peper, brocolli} = stateFruit;

    function handleClick(event) {
        const classNameParent = event.target.parentElement.className

        if (event.target.name === "minus") {
            if (stateFruit.[classNameParent] > 0) {
                const value = stateFruit.[classNameParent] - 1
                setStateFruit({...stateFruit, [classNameParent]: value})
            }
        } else if (event.target.name === "plus") {
            const value = stateFruit.[classNameParent] + 1
            setStateFruit({...stateFruit, [classNameParent]: value})
        } else if (event.target.name === "reset") {
            setStateFruit({aubergine: 0, mais: 0, peper: 0, brocolli: 0})
        }

    }


    return (
        <>

                <h1>Fruitmand bezorgservice</h1>
<div className="vegetable-box">
    <div>
                <FruitTile
                    fruitEmoticon="🍆"
                    fruitName='aubergine'
                    stateFruit={stateFruit}
                    setStateFruitFunctin={setStateFruit}
                    clickHandler={handleClick}/>

                <FruitTile
                    fruitEmoticon="🌽"
                    fruitName="mais"
                    stateFruit={stateFruit}
                    clickHandler={handleClick}/>

                <FruitTile
                    fruitEmoticon="🌶"
                    fruitName="peper"
                    stateFruit={stateFruit}
                    clickHandler={handleClick}/>

                <FruitTile
                    fruitEmoticon="🥦"
                    fruitName="brocolli"
                    stateFruit={stateFruit}
                    clickHandler={handleClick}/>
    </div>
</div>
                <Button
                    type="button"
                    className="reset-button"
                    clickHandler={handleClick}
                    name="reset">reset</Button>

        </>
    );
}

export default App;