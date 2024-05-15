import Student from "./Student.jsx"

function App() {
  

  return (
    // we can send sth as params into Student component. one property is .name which can be the key, if 
    // we want to send some data (number): {number}; if we want to send some string "strings"
    // note: the fifth student we don't give any params, but it uses our default params
    <>
      <Student name="Rose" age={32} isStudent={true}/>
      <Student name="Tom" age={42} isStudent={false}/>
      <Student name="Squidward" age={52} isStudent={false}/>
      <Student name="Sandy" age={25} isStudent={true}/>
      <Student></Student>
     </>
  )
}

export default App
