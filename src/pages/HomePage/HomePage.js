import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Image, Carousel, Spinner } from "react-bootstrap";
import './HomePage.css';

export default function HomePage() {

    const [moviesResult, setmoviesResult] = useState([]);
    const [index, setIndex] = useState(0);
    const [additionalInfo, setAdditionalInfo] = useState("");
    let carouselMovie = [];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setAdditionalInfo(
            <div>
                <h4>{moviesResult[selectedIndex].title}</h4>
                <h6>Plot: {moviesResult[selectedIndex].overview}</h6>
            </div>);
    };
    // api_key = "e70409f7a117c8f9236121045c0bdf8e"
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e70409f7a117c8f9236121045c0bdf8e&language=en-US&page=1").then(res => {
            setmoviesResult(res.data.results.slice(0, 10));
        })
    }, [])

    useEffect(() => {
        if (moviesResult && moviesResult.length > 0) {
            setAdditionalInfo(<div>
                <h6>{moviesResult[0].title}</h6>
                <h6>Plot: {moviesResult[0].overview}</h6></div>)
        }
    }, [moviesResult]);

    if (moviesResult && moviesResult.length > 0) {
        moviesResult.map((item, id) => {
            carouselMovie.push(
                <Carousel.Item key={id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={`${id} slide`} />
                </Carousel.Item>

            );
        });
    }


    return (
        <Container className="p-home">
            <h1>Top 10 Rated Movies</h1>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                {carouselMovie ? carouselMovie
                    : <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Film_Barnstar_Hires_Gold.svg/2000px-Film_Barnstar_Hires_Gold.svg.png" fluid />}
            </Carousel>
            <h6 className="text-center">{additionalInfo ? additionalInfo : ""}</h6>

        </Container>
    );
}