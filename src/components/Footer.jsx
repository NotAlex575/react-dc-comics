const Footer = () => {
  return (
    <footer>
      <div className="bg-image">
        <div className="container">
          <div className="row h-80per">
            <div className="row-footer-info w-60per">
              <div className="col">
                <h2 className="color-white">DC COMICS</h2>
                <a className="color-gray" href="#">Characters</a>
                <a className="color-gray" href="#">Comics</a>
                <a className="color-gray" href="#">Movies</a>
                <a className="color-gray" href="#">Tv</a>
                <a className="color-gray" href="#">Games</a>
                <a className="color-gray" href="#">Videos</a>
                <a className="color-gray" href="#">News</a>
                <h2 className="color-white">SHOP</h2>
                <a className="color-gray" href="#">Shop DC</a>
                <a className="color-gray" href="#">Shop DC Collectibles</a>
              </div>
              <div className="col">
                <h2 className="color-white">DC</h2>
                <a className="color-gray" href="#">Term of use</a>
                <a className="color-gray" href="#">Privacy policy (New)</a>
                <a className="color-gray" href="#">Ad Choices</a>
                <a className="color-gray" href="#">Advertising</a>
                <a className="color-gray" href="#">Jobs</a>
                <a className="color-gray" href="#">Subscriptions</a>
                <a className="color-gray" href="#">Talent Workshops</a>
                <a className="color-gray" href="#">CPSC Certificate</a>
                <a className="color-gray" href="#">Ratings</a>
                <a className="color-gray" href="#">Shop help</a>
                <a className="color-gray" href="#">Contact us</a>
              </div>
              <div className="col">
                <h2 className="color-white">SITES</h2>
                <a className="color-gray" href="#">DC</a>
                <a className="color-gray" href="#">MAD Magazine</a>
                <a className="color-gray" href="#">DC Kids</a>
                <a className="color-gray" href="#">DC Universe</a>
                <a className="color-gray" href="#">DC Power Visa</a>
              </div>
            </div>
            <div className="w-40per logo-bg flex justify-content-center align-items-center">
              <img className="overflow-hidden" src="/dc-logo-bg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container">
          <div className="row margin-row-footer h-64px">
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
      </div>
    </footer>
  )
}

export default Footer