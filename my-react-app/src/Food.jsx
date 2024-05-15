function Food() {

    const food1 = "orange";
    const food2 = "Banana";
    const food3 = "Watermelon";


    return(
        <ul>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    );

}

export default Food