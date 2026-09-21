
import Header from "../Header/Header.jsx"
import "../Section1/Section1.scss"
import { Photo } from "../../Images.js"

export default function Section1(){
    return(
        <>
            <section className="section1" id="home">
                <Header/>
                <button id="button-play"><span></span></button>
                <div className="main">
                    <h1>The Best Streaming Experience</h1>
                    <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                    <button className="main_button"><img src={Photo.PlayButton} alt="" />Start Watching Now</button>
                </div>
            </section>
        </>
    )
}