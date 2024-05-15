

function Button2(){
    /* .jsx convention: 
      1. property naming no '-' short-dashes, change all into camel cases. 
      2. all values should be string
      3. all should be using , dot connected

      Good point: inline styling also prevent global naming conflict because we define styling inside the function. it is good for isolating for minimal styling.
      Bad points: if have lots of css property, it can reduce the performance
    */
    const styles = {
        backgroundColor: "pink",
        color:"white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (
        <button style={styles}>
            Click you
        </button>
    );
}

export default Button2