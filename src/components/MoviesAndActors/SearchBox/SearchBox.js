import React from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import './SearchBox.css'


export default function SearchBox({ placeHolder, searchText, onSearchChange, results, onResultSelected }) {
    return (
        <div className="c-search-box">
            <Form.Control className="c-search-input" type="text" placeholder={placeHolder}
                value={searchText}
                onChange={e => onSearchChange(e.target.value)}>
            </Form.Control>
            <ListGroup className="c-result-box">
                {results.map((result, index) =>
                    <ListGroup.Item action onClick={() => onResultSelected(index)}>
                        {result}
                    </ListGroup.Item>)}
            </ListGroup>
        </div>
    )
}