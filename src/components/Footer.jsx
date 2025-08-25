const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row h-80per bg-image">
          <div className="w-50per"></div>
          <div className="w-50per"></div>
        </div>
        <div className="row margin-row-footer h-20per bg-gray">
          <div className="iscriviti">
            <button>SIGN-UP NOW!</button>
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