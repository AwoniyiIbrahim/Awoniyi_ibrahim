import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>Ibrahim © {year}</span>
      <span className="footer-right">built with React · designed with intent</span>
    </footer>
  )
}
