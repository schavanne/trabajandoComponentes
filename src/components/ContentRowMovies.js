import React from 'react';

function ContentRowMovies({color,titulo,cifra,icono}){
    return (
        <React.Fragment>
            
                {/*<!-- Total awards -->*/}
                <div className="col-md-4 mb-4">
                    <div className={"card "+(color)+" shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> {titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={'fas fa-2x '+(icono)+' text-gray-300'}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default ContentRowMovies;

