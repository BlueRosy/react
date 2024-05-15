// define a function with the same name of our .jsx file
function Header(){
    
    // we can include js codes with html, we need to return sth. return (can write html)
    // react components are only capable of returning a single element, but we can place children element within this element

    return(
        <header>
            <h1>
                My website
            </h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
    



}


// we can reuse this component otherwhere
export default Header
