import "./projects.css"
import { useReveal } from "../hooks/useReveal"

interface Project {
    title: string
    description: string
    tags: string[]
    liveLink?: string
    githubLink: string
    status?: string
}

const PROJECTS: Project[] = [
    {
        title: "NoboJatra",
        description: "A smart travel-planning web app for comparing routes, estimating fares, checking live conditions, and saving repeat journeys — all in one place.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "BetterAuth", "MongoDB", "Mongoose"],
        liveLink: "https://nobojatra.onrender.com",
        githubLink: "https://github.com/Sakif16/nobojatra.git",
        status: "In Development"
    },
    {
        title: "Study Buddy",
        description: "A web-based study management and productivity platform designed to help students organize tasks, improve focus, collaborate with classmates, and build productive study habits.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Prisma", "Zod"],
        liveLink: "https://study-buddy-pqwb.onrender.com",
        githubLink: "https://github.com/Sakif16/study-buddy.git"
    },
    {
        title: "AI Assisted Writing Research Tool",
        description: "A research data-collection web application designed to study how people write with and without AI assistance.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Prisma", "Zod"],
        liveLink: "https://p2-diin.onrender.com",
        githubLink: "https://github.com/misha832-ux/AI-Assisted-Writing-Research-Tool.git"
    },
    {
        title: "verse4u",
        description: "A Next.js app for browsing Quranic verses organized by how you feel — Happy, Sad, Confused, Tired, Angry, Patience, Gratitude, Fear & Anxiety, and Hope. Users can sign in, browse verses by category, bookmark favorites, copy verses to share, and suggest new verses for an admin to review and approve.",
        tags: ["Next.js", "Neon", "Drizzle ORM", "Tailwind CSS", "TypeScript", "BetterAuth"],
        liveLink: "https://verse4u.vercel.app",
        githubLink: "https://github.com/misha832-ux/verse4u.git",
        status: "In Development"
    },
    {
        title: "Taskify",
        description: "A full-stack to-do app with deadlines, live urgency indicators, and account-based task lists.",
        tags: ["Supabase", "Express.js", "React.js", "Node.js", "TypeScript"],
        githubLink: "https://github.com/misha832-ux/Taskify.git"
    },
    {
        title: "Operation Locker Loot",
        description: "A 3D top-down heist game built with Python and OpenGL. Navigate a bank vault, dodge laser beams, avoid vanishing trap tiles, and collect treasures before the 5-minute timer runs out!",
        tags: ["Python", "PyOpenGL"],
        githubLink: "https://github.com/misha832-ux/Operation_Locker_Loot.git"
    },
        {
        title: "Customer Category Classifier",
        description: "A machine learning project — classifies customers into four segments using KNN, Logistic Regression, and a Neural Network, with SMOTE balancing and full model evaluation.",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"],
        liveLink: "https://colab.research.google.com/github/misha832-ux/Customer-Category-Classifier/blob/main/Group_F.ipynb",
        githubLink: "https://github.com/misha832-ux/Customer-Category-Classifier.git"
    },
    {
        title: "GlowTrust – Trusted Skincare Reviews & Recommendations",
        description: "A PHP/MySQL web application for browsing skincare products, getting recommendations based on skin type, reading and leaving product reviews, keeping a personal wishlist, and managing a personal skincare routine. It also includes a separate admin panel for managing products, reviews, and wishlists.",
        tags: ["PHP", "MySQL", "HTML", "CSS"],
        githubLink: "https://github.com/misha832-ux/Glowtrust_skincare_project.git"
    },
]

export default function Projects() {
    const { ref, visible } = useReveal<HTMLElement>()

    return (
        <section id="projects" ref={ref} className={`projects reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-kicker">04 / work</span>
            <h2 className="section-heading">Projects</h2>
            <div className="project-grid">
                {PROJECTS.map(project => (
                    <article key={project.title} className="project-card">
                        <div className="project-card-body">
                            <div className="project-title-row">
                                <h3>{project.title}</h3>
                                {project.status && (
                                    <span className="project-status">{project.status}</span>
                                )}
                            </div>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link-row"
                                >
                                    Live <span className="project-arrow">→</span>
                                </a>
                            )}
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-row"
                            >
                                GitHub <span className="project-arrow">→</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
