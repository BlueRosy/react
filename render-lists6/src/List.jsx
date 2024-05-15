import PropTypes from 'prop-types'

// first example: convert a string list

function List(){
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    fruits.sort();

    // in tag if we want to use a variable name, must use {};
    const ListItems = fruits.map((fruit) => <li>{fruit}</li>);

    // ul is unordered list with dot
    // ol is ordered list with number order 1 2 3 4 5
    return <ol>{ListItems}</ol>;
}

// second example: convert an object array, each object will have some properties, like the calorie per serving and name
function ObjectList() {
    //to create a unqiue id and assign it the list key
    const fruits = [
        {id:1, name:"apple", calories: 95},
        {id:2, name:"orange", calories: 45},
        {id:3, name:"banana", calories: 105},
        {id:4, name:"coconut", calories: 159},
        {id: 5, name:"pineapple", calories: 37}
    ]

    // to sort by number
    fruits.sort((a, b) => a.calories - b.calories);

    // to sort by alphatical order
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const ListItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)

    // filter method to filter lowCalfruit
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    lowCalFruits.sort((a, b) => a.calories - b.calories);

    const LowCalListItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)

    // filter method to filter highCalfruit
    const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    HighCalFruits.sort((a, b) => a.calories - b.calories);

    const HighCalListItems = HighCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)


    return <ol>{ListItems}</ol>
}


// return a reusable function with acceptable props into function
function GeneralList(props){
    const category = props.category;
    const itemLists = props.items;

    itemLists.sort((a, b) => a.name.localeCompare(b.name));

    const ListItem = itemLists.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.calories}</b></li>);


    // to judge only when itemLists.length > 0 (more than one item in the list, the result will be shown in the web page. one way is to use the ternary operator, or if statement; another way is to use && operator, this way will judge the second statemnt only when first statement is true)

    // return (itemLists.length > 0?  <>
    //     <h3 className="list-category">{category}</h3>
    //     <ol className="list-items">{ListItem}</ol>
    // </>:null);

    return (itemLists.length > 0 && <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{ListItem}</ol>
    </>);

}

// to define propTypes , if one prop has an array of object, we need to define object properties datetypes and shape too!!!
GeneralList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
           name:PropTypes.string, 
           calories:PropTypes.number})),
    category:PropTypes.string,
}

GeneralList.defaultProps = {
    items:[],
    category:"Category",
}

export default GeneralList