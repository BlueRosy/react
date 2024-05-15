# Lesson 9: onChange
onChange = event handler used primarily with form elements
ex. `<input>, <textarea>, <select>, <radio>`
Triggers a function every time the value of the input changes,if combined with useState(),we can synchronically update state based on user inputs ❤️❤️

1. `<input value={var} onChange={func}>` store a variable to simulately update its value when inputs are changing!

2. `<textarea placeholder="" value={varname} onChange={func}> `for comment box

3. `
<select value={var} onChange={funcname}>
         <option value="">Select an option</option>
         <option value="opt1">opt1</option>
         <option value="opt2">opt2</option>
</select> is for selecting menu: e.g a payment method. 
`

4. `
 <input type="radio" value="value" checked={var === "value" onChange={funname}}> 
`
radio button， note: checked to check if shipping value === "Delivery", for example, our default value = "Delivery", then it will automatically select that input button, with onChange, whether or note checked is true，once input value changes ，var will change

