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
                <img src="https://www.flaticon.com/svg/vstatic/svg/4326/4326994.svg?token=exp=1619613363~hmac=1aed74dfb5af5be935ad8d0b0ba673ec" alt="xxx" />
                <img src="https://www.flaticon.com/svg/vstatic/svg/391/391247.svg?token=exp=1619613234~hmac=bb2ef9a4190075560d065e650aca3d65" alt="xxx" /></button>

        </Row>
    )
}