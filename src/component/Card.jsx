import React, { useState } from 'react'


const Card = (props) => {
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }

    return (
        <>
            <div className="row g-3  ">
                <div className="col  ">
                    <div className="card  d-flex mt-5 ms-1 mb-2 " >
                        <div className="card-body  ">
                            <img className="card-img-top w-100" src={`http://image.tmdb.org/t/p/w500${props.poster_path}`} alt="erroe" />
                            <button className="btn btn-dark mt-2 w-100" onClick={handleClickOpen} href="#" >View more</button>


                        </div>

                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Card