import React from 'react';
import { Container } from 'react-bootstrap';
import BreedMenuBar from '../../components/DogBook/BreedMenuBar/BreedMenuBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MasonryBreedCards from '../../components/DogBook/MasonryBreedCards/MasonryBreedCards';
import BreedModel from '../../model/BreedModel';

function BreedsPage() {

    const [breeds, setBreeds] = useState([]);
    const [changeImages, setChangeImages] = useState(false)

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
            setBreeds(Object.keys(res.data.message).map((name, index) => new BreedModel(index, name)));
        });
    }, []);

    const handleFilter = event => {
        const filterText = event.target.value;
        setFilterText(filterText);
    }


    //Filter  
    const [filterText, setFilterText] = useState("");
    const breedsFiltered = breeds.filter(function (breed) {
        return !filterText || breed.name.toLowerCase().includes(filterText.toLowerCase());
    });


    return (
        <div className="p-breads">
            <Container>
                <BreedMenuBar filterText={filterText}
                    handleFilter={handleFilter}
                    handleChangeImages={() => setChangeImages(!changeImages)} />

                <MasonryBreedCards breedsList={breedsFiltered} changeImage={changeImages} />

            </Container>
        </div>
    );

}

export default BreedsPage;