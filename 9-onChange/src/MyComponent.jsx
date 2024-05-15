import React, {useState} from 'react'

function MyCompnent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    // note: we could set an initial value for the payment, if this option exists, then the button will jump to that option display in the screen
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick ");

    // when user input sth, which change the input elment content, then, set variable name = input value that user inputs
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    // effect, now when we change the input value, the following name: xx will update simulateously!! 会同时更新的！！！
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

            <textarea name="" id="" cols="30" rows="10" value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Your Selection: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping Method: {shipping}</p>
        </div>
    )
}

export default MyCompnent