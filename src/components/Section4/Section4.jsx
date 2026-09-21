import { useState } from "react"
import { Photo } from "../../Images.js"
import "../../components/Section4/Section4.scss"

const faq =[
    {number: "01", title: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."},
    {number: "02", title: "How much does StreamVibe cost?", answer: "dj cupcake party"},
    {number: "03", title: "What content is available on StreamVibe?", answer: "dj cupcake party"},
    {number: "04", title: "How can I watch StreamVibe?", answer: "dj cupcake party"},
    {number: "05", title: "How do I sign up for StreamVibe?", answer: "dj cupcake party"},
    {number: "06", title: "What is the StreamVibe free trial?", answer: "dj cupcake party"},
    {number: "07", title: "How do I contact StreamVibe customer support?", answer: "dj cupcake party"},
    {number: "08", title: "What are the StreamVibe payment methods?", answer: "dj cupcake party"},
]

const leftColumn = faq.filter((_, index) => index < 4)
const rightColumn = faq.filter((_, index) => index >= 4)

export default function Section4(){

    const [openQuestion, setOpenQuestion] = useState(null)
    const toggleQuestion = (que) => {
        setOpenQuestion((prev) => (prev === que ? null : que))
    }

    const renderCard = (meow) => (
        <article key={meow.title} onClick={() => toggleQuestion(meow)} className={openQuestion === meow ? "open" : ""}>
            <div className="art_number"><h3>{meow.number}</h3></div>
            <div className="art_right">
                <div className="art_right_title">
                    <h3>{meow.title}</h3>
                    <img src={openQuestion === meow ? Photo.ButtonMinus : Photo.ButtonPlus} alt="" />
                </div>
                <div className={`art_descr ${openQuestion === meow ? "open" : ""}`}>
                    <p>{meow.answer}</p>
                </div>
            </div>
        </article>
    )

    return(
        <>
            <section className="section4" id="faq">
                <div className="section4_title">
                    <div className="section4_title_text">
                        <h2>Frequenly Asked Questions</h2>
                        <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    </div>
                    <button>Ask a Question</button>
                </div>
                <div className="section4_main">
                    <div className="faq_column">
                        {leftColumn.map(renderCard)}
                    </div>
                    <div className="faq_column">
                        {rightColumn.map(renderCard)}
                    </div>
                </div>
            </section>
        </>
    )
}