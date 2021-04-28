import React from 'react';
import { InputGroup, FormControl, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import SearchBox from '../../MoviesAndActors/SearchBox/SearchBox';
import './BreedMenuBar.css'

export default function BreedMenuBar({ filterText, handleFilter, handleChangeImages }) {

    return (
        <div className="c-breeds-menubar">
            <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups">
                <InputGroup >
                    <InputGroup.Prepend>
                        <InputGroup.Text>Search:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Breed Dog..." aria-label="Filter" value={filterText} onChange={handleFilter} />
                </InputGroup>

                <ButtonGroup aria-label="First group">
                    <Button variant="secondary" onClick={handleChangeImages}>Change images</Button>{' '}
                </ButtonGroup>

            </ButtonToolbar>

        </div>
    );
};
