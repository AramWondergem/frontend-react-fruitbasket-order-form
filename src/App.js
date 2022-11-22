import React, {useState} from 'react';
import './App.css';
import FruitTile from "./Components/FruitTile";

function App() {
    const [stateFruit, setStateFruit] = useState({aubergine: 0, mais: 0, peper: 0, brocolli: 0})
    // const {aubergine, mais, peper, brocolli} = stateFruit;


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitTile
                fruitEmoticon="🍆"
                fruitName='aubergine'
                stateFruit={stateFruit}
                {/*todo uitzoeken hoe je state kan doorgeven aan child component*/}
                setStateFruit={setStateFruit}/>
            <FruitTile
                fruitEmoticon="🌽"
                fruitName="mais"
                stateFruit={stateFruit}
                setStateFruit={setStateFruit}/>
            <FruitTile
                fruitEmoticon="🌶"
                fruitName="peper"
                stateFruit={stateFruit}
                setStateFruit={() => setStateFruit}/>
            <FruitTile
                fruitEmoticon="🥦"
                fruitName="brocolli"
                stateFruit={stateFruit}
                setStateFruit={setStateFruit}/>
        </>
    );
}

export default App;
