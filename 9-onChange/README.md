# Lesson 9: onChange
onChange = event handler used primarily with form elements 主要用于表格中用户选择和输入的元素，
ex. <input>, <textarea>, <select>, <radio>
Triggers a function every time the value of the input changes, 每一次当元素的值变化的时候，就会触发公式，若是结合useState(), 我们就可以同步的记录用户的数据修改到虚拟DOM变量的值上。❤️❤️

1. <input value={var} onChange={func}> store a variable to simulately update its value when inputs are changing!

2. <textarea placeholder="" value={varname} onChange={func}> for comment box

3. <select value={var} onChange={funcname}>
         <option value="">Select an option</option>
         <option value="opt1">opt1</option>
         <option value="opt2">opt2</option>
</select> is for selecting menu: e.g a payment method. 


4. <input type="radio" value="value" checked={var === "value" onChange={funname}}> 单选button， note: checked to check if shipping value === "Delivery", for example, our default value = "Delivery", then it will automatically select that input button, 但是不管checked 是否成立，只要input的value一变化，var的值就会跟着变化 

