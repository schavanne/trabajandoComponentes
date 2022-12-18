import React from 'react';

function LastMovieInDb({titulo,imagen,descripcion,id}){
    return (
        <React.Fragment>
			{/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{titulo}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagen} alt={titulo}/>
                        </div>
                        <p>{descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={"/"+(id)}>View movie detail</a>
                    </div>
                </div>
            </div>
            {/*<!-- End content row last movie in Data Base -->*/}
        </React.Fragment>
    )
}
export default LastMovieInDb;
