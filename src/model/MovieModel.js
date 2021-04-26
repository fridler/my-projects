class MovieModel {
    constructor(id, title, posterPath, plot) {
        this.id = id;
        this.title = title;
        this.posterPath = posterPath;
        this.plot = plot;
    }
    setStars(actors) {
        this.stars = actors;
    }
    setDirector(director) {
        this.director = director;
    }
    setRuntime(runtime) {
        this.runtime = runtime;
    }
}
export default MovieModel;