const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="bg-black h-50per flex align-items-center">
          <div className="color-white">
            <p className="text-center">Content goes here!</p>
          </div>
        </div>
        <div className="row bg-blue h-50per">
            <a className="row" href="#">
              <img src="/buy-comics-digital-comics.png" alt="" />
              <p className="color-white">DIGITAL COMICS</p>
            </a>
            <a className="row" href="#">
              <img src="/buy-comics-merchandise.png" alt="" />
              <p className="color-white">DC MERCHANDISE</p>
            </a>
            <a className="row" href="#">
              <img src="/buy-comics-subscriptions.png" alt="" />
              <p className="color-white">SUBSCRIPTION</p>
            </a>
            <a className="row" href="#">
              <img src="/buy-comics-shop-locator.png" alt="" />
              <p className="color-white">COMIC SHOP LOCATOR</p>
            </a>
            <a className="row" href="#">
              <img src="/buy-dc-power-visa.svg" alt="" />
              <p className="color-white">DC POWER VISA</p>
            </a>
        </div>
      </div>
    </main>
  )
}

export default Main

