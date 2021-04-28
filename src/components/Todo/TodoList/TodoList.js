import { ListGroup, ListGroupItem } from "react-bootstrap";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList(props) {


    return (
        <ListGroup variant="flush">
            {props.todos.map(todo =>
                <ListGroupItem key={todo.id}>
                    <TodoItem todo={todo}
                        key={todo.id}
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.deleteTodoProps}
                        handleShow={props.handleShow}>
                    </TodoItem>
                </ListGroupItem>)}
        </ListGroup>
    )
}