import React,{useState} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

function ContentRowTop(){
	const [header,setHeader] = useState({
		color:"border-left-primary",
		titulo:"default tittle",
		cifra:1,
		icono: "fa-award"});
	const [lastMovie,setLastMovie] = useState({
		titulo:"default last movie",
		descripcion:"lorem lorem lorem",
		id: 1,
		imagen:"1.jpg"
	})
	const [genresInDb,setGenreInDb] = useState(
		[{nombre:"accion"},{nombre:"terror"}]
	)

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
                    	<ContentRowMovies color={header.color} cifra={header.cifra} titulo={header.titulo} icono={header.icono} />
                    	<ContentRowMovies color={header.color} cifra={header.cifra} titulo={header.titulo} icono={header.icono} />
						<ContentRowMovies color={header.color} cifra={header.cifra} titulo={header.titulo} icono={header.icono} />
					</div>

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						<LastMovieInDb id={lastMovie.id} titulo={lastMovie.titulo} descripcion={lastMovie.descripcion} imagen={lastMovie.imagen} />

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{genresInDb.map((genre) => {
											return <GenresInDb nombre={(genre.nombre)}/>
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;