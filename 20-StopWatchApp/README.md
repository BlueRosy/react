# Stop Watch Program
I do the StopWatch.jsx, but MR teaches me to use StopWatchLearn.jsx.
refer to StopWatchLearn.jsx
1. we use useState to save frequently changed variables (here, we store the IsRunning state and elapsedTime state, as they always changed)
2. we use useRef to save the first update and then unchanged var (here, we store intervalId and startTime as ref because they just set at the beginning and not frequently required to be updated)
3. we use useEffect to run function and control setInterval when some condition hitted, in this app: if the start button clicks, if the app isRunning (the state is true): then we could setInterval to update the elapseTime . else we should not update it.
4. if you want to update the html element textContent in real time: 2 methods
 - inside the function: select that element, and update its textContext = updated variable
 - inside the html element: {functionanme()} to run the function automatically to display the result (it has to update the displayedResult , which is returned by the function)
