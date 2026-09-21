import { useState } from "react"
import "./Section5.scss"

const plans = [
    {title: "Basic Plan", descr: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.", price: "$9.99"},
    {title: "Standart Plan", descr: "Access to a wider selection of movies and shows, including most new releases and exclusive content.", price: "$12.99"},
    {title: "Premium Plan", descr: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.", price: "$14.99"},
]

const Buttons = ["Monthly", "Yearly"]

export default function Section5(){

    const [activeButton, setActiveButton] = useState("Monthly")

    return(
        <>
            <section className="section5" id="pricing">
                <div className="section5_title">
                    <div className="section5_title_text">
                        <h2>Choose the plan that's right you</h2>
                        <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                    </div>
                    <div className="section5_title_buttons">
                    {Buttons.map((meow) => (
                        <button
                            key={meow}
                            onClick={() => setActiveButton(meow)}
                            className={activeButton === meow ? "current" : ""}
                        >
                            {meow}
                        </button>
                    ))}
                    </div>
                </div>
                <div className="section5_main">
                    {plans.map((meow) => (
                        <article>       {/*  */}
                            <div className="art_inside">
                                <div className="art_inside_title">
                                    <h4>{meow.title}</h4>
                                    <p>{meow.descr}</p>
                                </div>
                                <span><h2>{meow.price}</h2><p>/month</p></span>
                                <div className="art_inside_buttons">
                                    <button id="free_trial">Start Free Trial</button>
                                    <button id="choose_plan">Choose Plan</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}