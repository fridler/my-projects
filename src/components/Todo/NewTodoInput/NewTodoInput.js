import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, Form, FormControl, InputGroup } from "react-bootstrap";
import './NewTodoInput.css';

export default function NewTodoInput(props) {
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = (e, props) => {
        e.preventDefault();
        props.addTodoProps(newTodo);
        setNewTodo("");
    }

    const handleChangeNewTodo = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
    }
    return (
        <Form className="todo-form" onSubmit={(e) => handleSubmit(e, props)}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Add:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="What do you need to do?" value={newTodo} onChange={(e) => handleChangeNewTodo(e)} />
            </InputGroup>
        </Form>



    )
}