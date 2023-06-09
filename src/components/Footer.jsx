import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Developed &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue" }}
            href="https://salvatoluiz.netlify.app/"
          >
            &nbsp; Salvato Luis
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
