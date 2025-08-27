import Alert from "./alert";

const ComicsCard = ({comic}) => {
    //ESEMPIO DIMOSTRAZIONE UTILITA ALERT IN COMICS.JS (riga 6)
    if(!comic.thumb && !comic.series){
        return<Alert message = " immagine e titolo non trovati..."></Alert>
    }
    else if(!comic.thumb && comic.series){
        return<Alert message = " immagine non trovata..."></Alert>
    }
    else if (!comic.series && comic.thumb){
        return <Alert message = " titolo non trovato..."></Alert>
    }
    const {thumb, title, series} = comic;
    return(
        <div className="col-card prod-card">
            <div className="col justify-content-center align-items-center w-100per">
                <img
                    className="img-fit padding-10-0px"
                    src={thumb}
                    alt={title}
                />
                <h2 className="color-white font-medium">{series}</h2>
            </div>
        </div>
    )
};

export default ComicsCard;