import "./Header.scss"
import { useState } from "react"

const buttons = ["Home", "Movies & Shows", "Support", "Subscription"]

export default function Header(){

    const [activeButton, setActiveButton] = useState("Home")
    
    return(
        <>
            <header>
                <nav>
                    <a href="#home">{/* фон лого */}</a>
                    <div className="header_nav_center">
                        {buttons.map((meow) => (
                            <button
                                key={meow}
                                onClick={() => setActiveButton(meow)}
                                className={activeButton === meow ? "pressed" : ""}
                            >
                                {meow}
                            </button>
                        ))}
                    </div>
                    <div className="header_nav_left">
                        <button id="button-search">{/* фон лупы */}</button>
                        <button id="button-notification">{/* фон фон колокола */}</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
