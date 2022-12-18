
import React from 'react';

function GenresInDb({nombre}){
    return (
        <React.Fragment>

            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        {nombre}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GenresInDb;