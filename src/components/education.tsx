import "./education.css"
import { useReveal } from "../hooks/useReveal"

interface EducationEntry {
    degree: string
    institution: string
    period: string
    CGPA?: string
    GPA?: number
}

const EDUCATION: EducationEntry[] = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "BRAC University",
        period: "2022 — 2026",
        CGPA: "*",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shaheed Bir Uttam Lt. Anwar Girls' College",
        period: "2021",
        GPA: 5.00,
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Shaheed Bir Uttam Lt. Anwar Girls' College",
        period: "2019",
        GPA: 5.00,
    },
]

export default function Education() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="education" ref={ref} className={`education reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">03 / education</span>
            <h2 className="section-heading">Education</h2>
            <div className="timeline">
                {EDUCATION.map(entry => (
                    <div key={entry.degree} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-period">{entry.period}</span>
                            <h3>{entry.degree}</h3>
                            <p className="timeline-institution">{entry.institution}</p>
                            {entry.CGPA && <p className="timeline-result">CGPA: {entry.CGPA}</p>}
                            {entry.GPA !== undefined && <p className="timeline-result">GPA: {entry.GPA.toFixed(2)}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}