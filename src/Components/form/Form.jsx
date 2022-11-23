import React, {useState} from 'react';
import "./form.css"
import Button from "../button/Button";


function Form({fruitState, handleClickFruitForm}) {

    const [stateForm, setStateForm] = useState({
        surname: "",
        lastname: "",
        age: 0,
        zipcode: "",
        frequentie: "everyMonth",
        deliveryMoment: "evening",
        comments: "",
        termsAndConditions: false
    })

    function handleChange(event) {
        if (event.target.name === "submit") {
            setStateForm({
                surname: "",
                lastname: "",
                age: 0,
                zipcode: "",
                frequentie: "everyMonth",
                deliveryMoment: "evening",
                comments: "",
                termsAndConditions: false
            })
        } else {
            const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            setStateForm({...stateForm, [event.target.name]: value});
        }
    }

    function submitFormFunction(event) {
        event.preventDefault()
        const order = {...stateForm, ...fruitState};
        console.log(order);
        handleClickFruitForm(event);
        handleChange(event);
    }

    return (
        <form>
            <label htmlFor="surname">Voornaam:
                <input onChange={handleChange} name="surname" type="text" id="surname" value={stateForm.surname}/>
            </label>
            <label htmlFor="lastname">Achternaam:
                <input onChange={handleChange} name="lastname" type="text" id="lastname" value={stateForm.lastname}/>
            </label>
            <label htmlFor="age">Leeftijd:
                <input onChange={handleChange} name="age" type="number" id="age" value={stateForm.age}/>
            </label>
            <label htmlFor="zipcode">Postcode
                <input onChange={handleChange} name="zipcode" type="text" id="zipcode" value={stateForm.zipcode}/>
            </label>
            <label htmlFor="frequentie">Bezorgfrequentie</label>
            <select name="frequentie" id="frequentie" onChange={handleChange} value={stateForm.frequentie}>
                <option value="everyWeek">Iedere week</option>
                <option value="everyOtherWeek">Om de week</option>
                <option value="everyMonth">Iedere maand</option>
            </select>
            <div>
                <label htmlFor="daytime">
                    <input type="radio" id="daytime" name="deliveryMoment" value="daytime"
                           checked={stateForm.deliveryMoment === "daytime"} onChange={handleChange}/>Overdag
                </label>
                <label htmlFor="evening">
                    <input type="radio" id="evening" name="deliveryMoment" value="evening"
                           checked={stateForm.deliveryMoment === "evening"} onChange={handleChange}/>'s Avonds
                </label>
            </div>
            <label htmlFor="comments">Opmerkingen</label>
            <textarea name="comments" id="comments" cols="30" rows="10" onChange={handleChange} value={stateForm.comments}></textarea>
            <label htmlFor="TermsAndConditions">
                <input type="checkbox" id="TermsAndConditions" checked={stateForm.termsAndConditions}
                       name="termsAndConditions" onChange={handleChange}/>Ik ga akkoord met de voorwaarden
            </label>
            <Button
                type="submit"
                clickHandler={submitFormFunction}
                className="submitButton"
                name="submit">Verzenden</Button>

        </form>

    );
}

export default Form;