# State Puzzle
1. only state can trigger page re-rendering or updating, whereas let variable and use function to update it will only trigger a console log update , rather than a web browser screen update !!! (because React is a UI library. it will update the UI only when page re-rendering !!!, even though JS has already update the value in the terminal)

2. state should combine with updater function, because React algorithm designs batching updates rather than update immediately whenever there is a change. so it is a good practice to save the middle state and update the value based on the middle state. (updater function will allow this to come true)


