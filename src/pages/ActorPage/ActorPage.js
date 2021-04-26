import React, { useState, useEffect } from 'react'
import HeaderActorPage from '../../components/HeaderActorPage/HeaderActorPage'
import { Container } from 'react-bootstrap'
import Actors from '../../components/Actors/Actors';
import SearchBox from '../../components/SearchBox/SearchBox';
import './ActorPage.css'
import axios from 'axios';
import ActorModel from '../../model/ActorModel';


export default function ActorPage() {
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("fname");
    const [searchText, setSearchText] = useState("")
    const [results, setResults] = useState([]);
    const [actors, setActors] = useState(null);

    const pathPre = process.env.PUBLIC_URL;

    useEffect(() => {
        axios.get(pathPre.concat("/actors.json")).then(res => {
            const newActors = res.data.map(plainActor => new ActorModel(plainActor));
            setActors(newActors);
        });
    }, []);

    function filterTextChange(data) {
        setFilterText(data);
    }
    function sortByChange(data) {
        setSortBy(data);
    }
    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);
        if (newSearchText) {
            //call to TMDB
            const searchURL = "https://api.themoviedb.org/3/search/person?api_key=d5fc0ebcdc97957658216ba08b5e9436&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });
        } else {
            setResults([]);
        }
    }
    function addActor(resultIndex) {
        const imgURL = "https://image.tmdb.org/t/p/w500/" + results[resultIndex].profile_path;
        const fullName = results[resultIndex].name.trim();
        let fname = ""; let lname = "";
        if (fullName) {
            const nameArr = fullName.split(' ');
            if (nameArr.length > 2) {
                fname = nameArr[0];
                lname = nameArr.slice(1).join(' ')
            } else {
                fname = nameArr[0];
                lname = nameArr[nameArr.length - 1];
            }
        }
        const searchIndexURL = `https://api.themoviedb.org/3/person/${results[resultIndex].id}?api_key=d5fc0ebcdc97957658216ba08b5e9436`;
        let bDay = ""; let imdbID = "";

        axios.get(searchIndexURL).then(response => {
            bDay = response.data.birthday;
            imdbID = response.data.imdb_id;
            const imdbPath = "https://www.imdb.com/name/" + imdbID;
            setActors(actors.concat(new ActorModel(fname, lname, bDay, imgURL, imdbPath)));
        });
        setResults([]);
        setSearchText("");
    }

    return (
        <Container>
            <SearchBox
                placeHolder="Search Actor..."
                searchText={searchText}
                onSearchChange={handleSearchChange}
                results={results.map(result => result.name)}
                onResultSelected={addActor} />
            <HeaderActorPage onFilterChange={filterTextChange} onSortChange={sortByChange} />
            <Actors filterBy={filterText} sortBy={sortBy} actors={actors} />
        </Container>
    )
}