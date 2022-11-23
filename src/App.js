import React, {useState} from 'react';
import './App.css';
import FruitTile from "./Components/fruitTile/FruitTile";
import Button from "./Components/button/Button";
import Form from "./Components/form/Form";


function App() {

    const [state, setState] = useState({
        aubergine: 0, mais: 0, peper: 0, brocolli: 0, surname: "",
        lastname: "",
        age: 0,
        zipcode: "",
        frequentie: "everyMonth",
        deliveryMoment: "evening",
        comments: "",
        termsAndConditions: false
    })


    function handleClick(event) {
        const vegetableName = event.target.parentElement.id


        if (event.target.name === "minus") {
            if (state.[vegetableName] > 0) {
                const value = state.[vegetableName] - 1
                setState({...state, [vegetableName]: value})

            }
        } else if (event.target.name === "plus") {
            const value = (state.[vegetableName] + 1);
            setState({...state, [vegetableName]: value})

        } else if (event.target.name === "reset" || event.target.name === "submit") {
            if (event.target.name === "submit") {
                event.preventDefault()
                console.log(state)
                setState({
                    aubergine: 0, mais: 0, peper: 0, brocolli: 0, surname: "",
                    lastname: "",
                    age: 0,
                    zipcode: "",
                    frequentie: "everyMonth",
                    deliveryMoment: "evening",
                    comments: "",
                    termsAndConditions: false
                })
            } else {
                setState({...state, aubergine: 0, mais: 0, peper: 0, brocolli: 0})
            }

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
                        stateFruit={state}
                        clickHandler={handleClick}/>

                    <FruitTile
                        fruitEmoticon="🌽"
                        fruitName="mais"
                        stateFruit={state}
                        clickHandler={handleClick}/>

                    <FruitTile
                        fruitEmoticon="🌶"
                        fruitName="peper"
                        stateFruit={state}
                        clickHandler={handleClick}/>

                    <FruitTile
                        fruitEmoticon="🥦"
                        fruitName="brocolli"
                        stateFruit={state}
                        clickHandler={handleClick}/>
                </div>
            </div>
            <Button
                type="button"
                className="reset-button"
                clickHandler={handleClick}
                name="reset">reset</Button>

            <div className="formwrapper">
                <div>
                    <Form
                        state={state}
                        clickHandler={handleClick}
                        setState={setState}></Form>
                </div>
            </div>
        </>
    );
}

export default App;