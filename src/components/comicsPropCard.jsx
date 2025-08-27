const ComicsCard = ({comic}) => {
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