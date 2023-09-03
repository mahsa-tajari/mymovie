const searchMovie = async (movieName) => {
    const res = await fetch(`http://moviesapi.ir/api/v1/movies?q=${movieName}`)
    const result = await res.json()
    return result
}

const searchGenres = async() => {
    const req = await fetch('http://moviesapi.ir/api/v1/genres');
    const response = await req.json();
    return response;
}

const searchByGenres = async(genreId) => {
    const req = await fetch(`http://moviesapi.ir/api/v1/genres/${genreId}/movies?page={page}`);
    const response = await req.json();
    return response;
}

const searchMovieByID = async (movieID) =>{
    const res = await fetch(`http://moviesapi.ir/api/v1/movies/${movieID}`);
    const response = await res.json();
    return response;
}

export {searchMovie,searchMovieByID,searchGenres,searchByGenres}