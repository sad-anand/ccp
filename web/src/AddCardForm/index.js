import "./styles.css";

import React, { Fragment } from "react";
import {addCreditCard} from "../Service/card-api"

function AddCardForm(props) {
	const [errorMessage, setErrorMessage] = React.useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
		const form = event.target;
        const data = {
            name: form["name"].value,
            cardNumber: form["cardNumber"].value,
            limit: form["limit"].value,
        }
		form.reset();
        addCreditCard(JSON.stringify(data))
			.then(() => props.onSuccess())
			.catch(err => setErrorMessage("Invalid Card!"));
    }

    const setCustomError = (event, error) => {
        event.target.setCustomValidity(error)
    }

    return (
        <Fragment>
            <div><h1>Credit Card System</h1></div>
            <h2>Add Card</h2>
            <form onSubmit={handleFormSubmit}>
                <label className="cards-input-label">Name</label>
                <div>
                    <input
                        type={"text"} 
                        pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
                        name="name"
						className="cards-input-box"
                        onInput={(event) => {
							setCustomError(event, ""); 
							setErrorMessage("");
						}}
                        onInvalid={(event) => setCustomError(event, "Must be alphanumeric")}
                    />
                </div>
                <br />
                <label className="cards-input-label">Card number</label>
                <div>
                    <input
                        type={"numeric"} 
                        pattern={"[0-9]+"}
                        maxLength={19}
                        name="cardNumber"
                        className="cards-input-box"
						onInput={(event) => {
							setCustomError(event, ""); 
							setErrorMessage("");
						}}
                        onInvalid={(event) => setCustomError(event, "Must be a valid card number")}
                    />
                </div>
                <br />
                <label>Limit</label>
                <div>
                    <input
                        type={"numeric"} 
                        pattern={"[0-9]+"}
                        minLength={1}
                        maxLength={5}
                        name="limit"
                        className="cards-input-box"
                        onInvalid={(event) => setCustomError(event, "Must be a valid amount")}
						onInput={(event) => {
							setCustomError(event, ""); 
							setErrorMessage("");
						}}
                    />
                </div>
                <br />
				{errorMessage && <div className="error"> {errorMessage} </div>}
                <button
                    type="submit"
                    className="card-button"
                >
                    Add
                </button>
            </form>
        </Fragment>
    )
}

export default AddCardForm;