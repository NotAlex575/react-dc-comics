import Comics from "../../scripts/comics";


const Main = () => {
  return (
    <main>
      <div className="bg-img-main w-100per h-30per">
        <div className="container">
          <div className="padding-top-current-series">
            <div className="current-series">
              <p className="h-100per flex justify-content-center align-items-center">CURRENT SERIES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-100per h-60per">
        <div className="container padding-top-40">
          <div className="row-card">
            {Comics.map((comics) => {
              return(
                <div className="col-card prod-card">
                    <div className="col justify-content-center align-items-center w-100per">
                      <img className="img-fit" src={comics.thumb} alt={comics.title} />
                      <h2 className="color-white">{comics.series}</h2>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="bg-blue w-100per h-10per">
        <div className="container">
            <div className="row h-50per">
                <a className="row margin-top-70" href="#">
                  <img className="logo" src="/buy-comics-digital-comics.png" alt="" />
                  <p className="color-white">DIGITAL COMICS</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img className="logo" src="/buy-comics-merchandise.png" alt="" />
                  <p className="color-white">DC MERCHANDISE</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img className="logo" src="/buy-comics-subscriptions.png" alt="" />
                  <p className="color-white">SUBSCRIPTION</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img className="logo" src="/buy-comics-shop-locator.png" alt="" />
                  <p className="color-white">COMIC SHOP LOCATOR</p>
                </a>
                <a className="row margin-top-70" href="#">
                  <img className="logo" src="/buy-dc-power-visa.svg" alt="" />
                  <p className="color-white">DC POWER VISA</p>
                </a>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Main

