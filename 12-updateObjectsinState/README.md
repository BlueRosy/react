# Lesson 12: Update Objects in state
1. define useState() of an object
define useState() of an object
const [car, setCar] = useState({   
        year:2024, 
        make:"Ford", 
        model: "Mustange"});

2. define update function
function handleYearChange(event){
        // this is not an updater function
    
        setCar({...car, year:event.target.value});

        // an updater function / arrow function would be like, our '{}' object should be inside the '()'. Good practice

        setCar(c => ({...c, year:event.target.value}));

    }