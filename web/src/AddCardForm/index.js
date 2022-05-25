import { Fragment } from "react";
import {addCreditCard} from "../service/card-api"

function AddCardForm(props) {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: event.target["name"].value,
            cardNumber: event.target["cardNumber"].value,
            limit: event.target["limit"].value,
        }
        addCreditCard(JSON.stringify(data)).then(() => props.onSuccess());
    }

    const setCustomError = (event, error) => {
        event.target.setCustomValidity(error)
    }

    return (
        <Fragment>
            <div><h1>Credit Card System</h1></div>
            <h2>Add Card</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <div>
                    <input
                        type={"text"} 
                        pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
                        name="name"
                        style={{border: "groove", height: "2rem", width: "15rem"}}
                        onInput={(event) => setCustomError(event, "")}
                        onInvalid={(event) => setCustomError(event, "Must be alphanumeric")}
                    />
                </div>
                <br />
                <label>Card number</label>
                <div>
                    <input
                        type={"numeric"} 
                        pattern={"[0-9]+"}
                        maxLength={19}
                        name="cardNumber"
                        style={{border: "groove", height: "2rem", width: "15rem"}}
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
                        style={{border: "groove", height: "2rem", width: "15rem"}}
                        onInvalid={(event) => setCustomError(event, "Must be a valid amount")}
                    />
                </div>
                <br />
                <button
                    type="submit"
                    style={{border: "groove", backgroundColor: "lightgray", color: "white", width: "8rem", height: "2rem"}}
                >
                    Add
                </button>
            </form>
        </Fragment>
    )
}

export default AddCardForm;