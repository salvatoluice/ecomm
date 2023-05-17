import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Subscribe to our Newsletter</h2>
          <form>
            <input type="email" placeholder="example@gmail.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
