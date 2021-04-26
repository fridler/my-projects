import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './HeaderActorsPage.css';

export default function HeaderActorsPage({ onFilterChange, onSortChange }) {
    return (
        <Form className="p-actor-header">
            <Form.Row>
                <Col className="col-md-6 col-12">
                    <Form.Label>Filter by:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onFilterChange(e.target.value)} />
                </Col>
                <Col className="col-md-6 col-12">
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Control as="select" onChange={(e) => onSortChange(e.target.value)}>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="aged">Age &darr;</option>
                        <option value="agea">Age &uarr;</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form>
    )
}