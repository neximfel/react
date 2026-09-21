import { Photo } from "../../Images.js"
import "./Section3.scss"

const devices = [
    {image: Photo.Logo1 ,title: "Smartphones"},
    {image: Photo.Logo2 ,title: "Tablet"},
    {image: Photo.Logo3 ,title: "Smart TV"},
    {image: Photo.Logo4 ,title: "Laptops"},
    {image: Photo.Logo5 ,title: "Gaming Consoles"},
    {image: Photo.Logo6 ,title: "VR Headsets"},
]

export default function Section3(){
    return(
        <>
            <section className="section3" id="devices">
                <div className="section3_title">
                    <h2>We Provide you streaming experience across various devices.</h2>
                    <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>
                <div className="section3_main">
                    {devices.map((meow) => (
                        <article key={meow}>
                        <div className="art_title">
                            <div><img src={meow.image} alt="" /></div>
                            <h3>{meow.title}</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </article>
                    ))}
                </div>
            </section>
        </>
    )
}