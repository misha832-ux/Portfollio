import "./about.css"
import { useReveal } from "../hooks/useReveal"

export default function About() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="about" ref={ref} className={`about reveal ${visible ? "is-visible" : ""}`}>
            <div className="about-inner">
                <div>
                    <span className="section-kicker">01 / about</span>
                    <h2 className="section-heading">About Me</h2>
                    <p>Building things for the web and solving real problems through code is what drives me. 
                        Balancing multiple projects alongside coursework has sharpened my time management and coordination skills. 
                        I've also co-authored a research paper published in the ACM COMPASS 2026 proceedings and I'm always looking for the next challenge worth taking on.</p>
                </div>
            </div>
        </section>
    )
}
