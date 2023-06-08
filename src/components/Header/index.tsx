import { HeaderStyle } from "./styled";
import {useState} from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    const [menu, setMenu] = useState(false);

    return (
        <HeaderStyle>
                <div className="logo">
                    Eliel Jacomit Fernandes
                </div>
                <nav id="nav" className={menu ? "active" : ""}>
                    <button id="btn-mobile" onClick={() =>setMenu(!menu)}>
                        { menu ? "Close" : "Menu"}
                        <span id="hamburger"></span>
                    </button>
                    <ul id="menu">
                        <li><Link className="link" onClick={() =>setMenu(false)} to="/">Home</Link></li>
                        <li><Link className="link" onClick={() =>setMenu(false)} to="/about">About</Link></li>
                    </ul>
                </nav>
        </HeaderStyle>
    );
}