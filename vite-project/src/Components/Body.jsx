import image from "../assets/icons8-down-arrow-24.png"
import '../stylesheets/header.css'
export default function Body(){
    return(
        <>
          <div className="main-body">
            <p>WE BACK THE COMPANIES OF TOMORROW BEFORE IT'S OBVIOUS.</p>
            <img src={image}></img>
          </div>
        </>
    )
}