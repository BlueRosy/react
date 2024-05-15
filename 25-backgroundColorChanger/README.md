# 25: create a backgroundColor changer, by clicking the button, we can update the backgroundColor
technique: vite bundler, tailwindcss, useState in react
for centering the button box: 
1. you can choose position absolute, and bottom: 30px, left = calc(50% - half of box width);
2. you can choose flex box: align-items: bottem and justify-content: center. note: set the outer div height and width
3. for the setColor:
 1. generate 3 functions
 2. generate one for all function and pass a color params
 3. generate 3 arrow functions inside the {js code}, directly use the setColor("red"/"green"/"blue")
