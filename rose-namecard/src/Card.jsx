import cardImg from "./assets/coding-edit.gif"
import './Card.css'
// need to import css style sheet.

function Card(){
    // in react, class is a reserved keyword, so we must change to use className
    // 2. to quote sth. {name} without ""
    // 3. place the image in the assets folder
    return (
        <div className="card">
            <img src={cardImg} alt="my image" />
            <h2>Rose Liu</h2>
            <p>I am currently a cs student, studying at UNSW, NSW, SYDNEY. I also got my master degree of Applied Analytics at Columbia Univeristy. I inject full of enthusiasm and energy to become a full-time frontend developer.</p>
        </div>
    );
}

export default Card