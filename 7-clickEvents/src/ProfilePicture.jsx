function ProfilePicture(){
    // note: here. the relative path should be correct. else we cannot find the image
    const imageUrl = "./src/assets/myfacepic.png";

    const handleClick = () => console.log("OUCH!");

    // no parameters in the function, then we can use onClick={functionname}
    return <img className="picImage" src={imageUrl} alt="" onClick={handleClick} />
}

function HideImage(){
    const imageUrl = "./src/assets/myfacepic.png";

    const handleClick = (e) => {
        // note: display is inside the style
        e.target.style.display="none";
    }

    return <img className="picImage" src={imageUrl} onClick={(e) => handleClick(e)}></img>

}

export default HideImage
