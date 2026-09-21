import "./Footer.scss"
import { Photo } from "../../Images.js"

export default function Footer(){
    return(
        <>
            <footer>
                <div className="footer_inside">
                    <div className="footer_inside_top">
                        <div>
                            <h3>Home</h3>
                            <ul>
                                <a href="#categories">Categories</a>
                                <a href="#devices">Devices</a>
                                <a href="#pricing">Pricing</a>
                                <a href="#faq">FAQ</a>
                            </ul>
                        </div>
                        <div>
                            <h3>Movies</h3>
                            <ul>
                                <a href="#">Genres</a>
                                <a href="#">Trending</a>
                                <a href="#">New Release</a>
                                <a href="#">Popular</a>
                            </ul>
                        </div>
                        <div>
                            <h3>Shows</h3>
                            <ul>
                                <a href="#">Gernes</a>
                                <a href="#">Trending</a>
                                <a href="#">New Release</a>
                                <a href="#">Popular</a>
                            </ul>
                        </div>
                        <div>
                            <h3>Support</h3>
                            <ul>
                                <a href="#">Contsct Us</a>
                            </ul>
                        </div>
                        <div>
                            <h3>Subscription</h3>
                            <ul>
                                <a href="#pricing">Plans</a>
                                <a href="#">Features</a>
                            </ul>
                        </div>
                        <div>
                            <h3>Connect With Us</h3>
                            <span>
                                <button onClick={() => window.open("https://facebook.com")} rel="noopener noreferrer">
                                    <img src={Photo.FacebookLogo} alt="Facebook" />
                                </button>
                                <button onClick={() => window.open("https://twitter.com")} rel="noopener noreferrer">
                                    <img src={Photo.TwitterLogo} alt="Twitter" />
                                </button>
                                <button onClick={() => window.open("https://linkedin.com")} rel="noopener noreferrer">
                                    <img src={Photo.LinkedinLogo} alt="LinkedIn" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="footer_inside_bot">
                        <p>@2023 streamvib, All Rights Reserved</p>
                        <div>
                            <a href="https://policies.google.com/terms?hl=en-US&client_theme=dark" target="_blank">Terms of Use</a>
                            <span></span>
                            <a href="https://policies.google.com/privacy?hl=en-US&client_theme=dark" target="_blank">Privacy Policy</a>
                            <span></span>
                            <a href="https://policies.google.com/technologies/cookies?hl=en-US&client_theme=dark#:~:text=Functionality" target="_blank">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}