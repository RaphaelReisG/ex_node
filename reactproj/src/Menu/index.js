import { Link } from "react-router-dom";
import './style.css';

function Menu() {
    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/teste">CRUD</Link>
        </div>
    )
}
export default Menu