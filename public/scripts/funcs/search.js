const searchMovie = async (movieName,pageNumber=1) => {
    const res = await fetch(`http://moviesapi.ir/api/v1/movies?q=${movieName}&page=${pageNumber}`)
    const result = await res.json()
    return result;
}

const movies = async (page) =>{
    const res = await fetch(`http://moviesapi.ir/api/v1/movies?page=${page}`);
    const result = await res.json();
    return result;
}

const searchGenres = async() => {
    const req = await fetch('http://moviesapi.ir/api/v1/genres');
    const response = await req.json();
    return response;
}

const searchByGenres = async(genreId,pageNumber) => {
    const req = await fetch(`http://moviesapi.ir/api/v1/genres/${genreId}/movies?page=${pageNumber}`);
    const response = await req.json();
    return response;
}

const searchMovieByID = async (movieID) =>{
    const res = await fetch(`http://moviesapi.ir/api/v1/movies/${movieID}`);
    const response = await res.json();
    return response;
}

export {searchMovie,movies,searchMovieByID,searchGenres,searchByGenres}