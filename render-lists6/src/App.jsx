import GeneralList from "./List.jsx"


function App(){
  // if we want to return a list [x,y,z,```] -> save into a const list -> put <List />  -> convert into a long string without any splits or []
  // return result : appleorangebananacoconutpineapple

  const fruits = [
    {id:1, name:"apple", calories: 95},
    {id:2, name:"orange", calories: 45},
    {id:3, name:"banana", calories: 105},
    {id:4, name:"coconut", calories: 159},
    {id: 5, name:"pineapple", calories: 37}
];


  const vegetables = [
    {id:6, name:"potatoes", calories: 110},
    {id:7, name:"celery", calories: 15},
    {id:8, name:"carrots", calories: 25},
    {id:9, name:"corn", calories: 63},
    {id: 10, name:"broccoli", calories: 50}
];


  return (
  <>
     <GeneralList items={fruits} category="fruits" />
     <GeneralList items={vegetables} category="vegetables" />
     <GeneralList items={[]} category="vegetables" />
  </>
 )
}

export default App;