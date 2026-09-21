import "../Section2/Section2.scss"
import { Photo } from "../../Images.js"
import { useState } from "react"

const categories = [
    {image: Photo.ArtImage1, title: "Action"},
    {image: Photo.ArtImage2, title: "Adventure"},
    {image: Photo.ArtImage3, title: "Comedy"},
    {image: Photo.ArtImage4, title: "Drama"},
    {image: Photo.ArtImage5, title: "Horror"},
]

export default function Section2(){

    const [activeDot, setActiveDot] = useState(0)
    const totalDots = 4

    const goPrev = () => {
        setActiveDot((prev) => (prev === 0 ? totalDots - 1 : prev - 1))
    }
    const goNext = () => {
        setActiveDot((next) => (next === totalDots - 1 ? 0 : next + 1))
    }
    return(
        <>
            <section className="section2" id="categories">
                <div className="section2_title">
                    <div className="section2_title_text">
                        <h2>Explore our wide variety of categories</h2>
                        <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                    <div className="section2_title_slider">
                        <button onClick={goPrev}><img src={Photo.ArrowLeft} alt="" /></button>
                        <div>
                            {Array.from({ length: totalDots }).map((_, meow) => (
                                <span
                                    key={meow}
                                    className={activeDot === meow ? "active" : ""}
                                    onClick={() => setActiveDot(meow)}
                                ></span>
                            ))}
                        </div>
                        <button onClick={goNext}><img src={Photo.ArrowRight} alt="" /></button>
                    </div>
                </div>
                <div className="section2_main">
                    {categories.map((cat) => (
                        <article key={cat.title}>
                            <img src={cat.image} alt="" />
                            <div>
                                <h4>{cat.title}</h4>
                                <img src={Photo.ArrowRight} alt="" />
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}