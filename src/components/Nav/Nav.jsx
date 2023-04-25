//import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(props) {

    // const {onSearch}=props;

    return (
        <>
        <div className="nav">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
            <div className="menu">
                <li><Link to="/home">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/formcreate">Form</Link></li>
                <li><Link to="#" onClick={()=>props.logout()} > logout </Link> </li>
            </div>
        </div>
        </>
    )

}