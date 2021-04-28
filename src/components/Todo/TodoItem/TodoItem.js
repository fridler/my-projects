import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import './TodoItem.css'


export default function TodoItem(props) {

    const [addButton, setAddButton] = useState();

    return (
        <Row className="todoitem-row" onMouseOver={() => setAddButton(true)} onMouseOut={() => setAddButton(false)}>
            <Form.Check className={props.todo.completed ? "todoItem-checkbox checked" : "todoItem-checkbox col-10 "}
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
                label={props.todo.title}>
            </Form.Check>
            <button value={addButton} className={addButton ? "delete-todoItem-btn visible" : "delete-todoItem-btn hidden"}
                onClick={() => {
                    if (!props.todo.completed) {
                        props.handleShow(props.todo.id);
                    }
                    else props.deleteTodoProps(props.todo.id)
                }}>
                <img src="https://cdn0.iconfinder.com/data/icons/ramotion/256/Trash_empty.png" alt="xxx" />
                <img src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_red-256.png" alt="xxx" /></button>

        </Row>
    )
}