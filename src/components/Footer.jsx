const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="iscriviti">
            <button>Sign up now</button>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#"><p className="Follow-us">FOLLOW US</p></a>
              </li>
              <li>
                <a href="#"><img src="/footer-facebook.png" alt="" /></a>
              </li>
              <li>
                <a href="#"><img src="/footer-twitter.png" alt="" /></a>
              </li>
              <li>
                <a href="#"><img src="/footer-youtube.png" alt="" /></a>
              </li>
              <li>
                <a href="#"><img src="/footer-pinterest.png" alt="" /></a>
              </li>
              <li>
                <a href="#"><img src="/footer-periscope.png" alt="" /></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer