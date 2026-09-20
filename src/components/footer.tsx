import "./footer.css"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <p className="footer-copy">
                © {year} Misha Mahenur Alam
            </p>
        </footer>
    )
}