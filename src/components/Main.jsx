

const Main = () => {
  return (
    <main>
      <div className="bg-img-main w-100per h-40per">
        <div className="container">
          <div className="padding-top-300px">
            <div className="current-series">
              <p className="h-100per flex justify-content-center align-items-center">CURRENT SERIES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-100per h-40per">
        <div className="container">
          <div className="bg-black flex align-items-center">
            <div className="color-white margin-top-70">
              <p className="text-center">Content goes here!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue w-100per h-20per">
        <div className="container">
            <div className="row h-50per">
                <a className="row margin-top-70" href="#">
                  <img src="/buy-comics-digital-comics.png" alt="" />
                  <p className="color-white">DIGITAL COMICS</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img src="/buy-comics-merchandise.png" alt="" />
                  <p className="color-white">DC MERCHANDISE</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img src="/buy-comics-subscriptions.png" alt="" />
                  <p className="color-white">SUBSCRIPTION</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img src="/buy-comics-shop-locator.png" alt="" />
                  <p className="color-white">COMIC SHOP LOCATOR</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img src="/buy-dc-power-visa.svg" alt="" />
                  <p className="color-white">DC POWER VISA</p>
                </a>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Main

