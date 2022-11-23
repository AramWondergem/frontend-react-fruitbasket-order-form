import React from 'react';
import "./form.css"
import Button from "../button/Button";
import InputTextOrNumber from "./InputTextOrNumber";


function Form({state, clickHandler, setState}) {


    function handleChange(event) { //function to handle all the changes in the form
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({...state, [event.target.name]: value});
    }


    return (
        <form>
            <InputTextOrNumber
                label="Voornaam"
                type="text"
                name="surname"
                onChange={handleChange}
                value={state.surname}/>

            <InputTextOrNumber
                label="Achternaam"
                type="text"
                name="lastname"
                onChange={handleChange}
                value={state.lastname}/>

            <InputTextOrNumber
                label="Leeftijd"
                type="number"
                name="age"
                onChange={handleChange}
                value={state.age}/>

            <InputTextOrNumber
                label="Postcode"
                type="text"
                name="zipcode"
                onChange={handleChange}
                value={state.zipcode}/>

            <label htmlFor="frequentie">Bezorgfrequentie</label>
            <select name="frequentie" id="frequentie" onChange={handleChange} value={state.frequentie}>
                <option value="everyWeek">Iedere week</option>
                <option value="everyOtherWeek">Om de week</option>
                <option value="everyMonth">Iedere maand</option>
            </select>

            <div>
                <label className="radiobutton" htmlFor="daytime">
                    <input type="radio" id="daytime" name="deliveryMoment" value="daytime"
                           checked={state.deliveryMoment === "daytime"} onChange={handleChange}/><span>Overdag</span>
                </label>
                <label className="radiobutton" htmlFor="evening">
                    <input type="radio" id="evening" name="deliveryMoment" value="evening"
                           checked={state.deliveryMoment === "evening"} onChange={handleChange}/><span>'s Avonds</span>
                </label>
            </div>

            <label htmlFor="comments">Opmerkingen</label>
            <textarea name="comments" id="comments" cols="30" rows="10" onChange={handleChange}
                      value={state.comments}></textarea>

            <label htmlFor="TermsAndConditions">
                <input type="checkbox" id="TermsAndConditions" checked={state.termsAndConditions}
                       name="termsAndConditions" onChange={handleChange}/>Ik ga akkoord met de voorwaarden
            </label>

            <Button
                type="submit"
                clickHandler={clickHandler}
                className="submitButton"
                name="submit">Verzenden</Button>

        </form>

    );
}

export default Form;