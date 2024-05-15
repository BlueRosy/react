# Project2: color picker app
主要考点：useState() 建立a stateful var: color, onChange={handleColorChange} 用户改变color input的时候，需要在calor board上实时反应这些变化
element: <input type="color" value={color} onChange={handleColorChange}>
element2: colorDisplayBoard -> a div, style setting <div class="xxx" style={{backgroundColor:color}}>