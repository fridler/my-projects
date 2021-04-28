import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BreedPage.css';
import { Container } from 'react-bootstrap';
import MasonryImages from '../../components/DogBook/MasonryImages/MasonryImages';

export default function BreedPage() {

    const { breed } = useParams();
    const [imgList, setImgList] = useState();

    const cardTitle = breed.charAt(0).toUpperCase() + breed.slice(1);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images").then(res => {
            const imgs = res.data.message;
            setImgList(imgs);
        });

    }, [breed]);



    return (
        imgList ? <div className="p-breed">
            <div className="display-4 headline">
                <h1>{cardTitle}</h1>
            </div>
            <Container>
                <MasonryImages images={imgList}></MasonryImages>
            </Container>
        </div>
            :
            <div></div>
    );
}
