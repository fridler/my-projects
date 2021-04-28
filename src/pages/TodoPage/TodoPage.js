import './TodoPage.css';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalTitle, Row } from 'react-bootstrap';
import { useState } from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import NewTodoInput from '../../components/Todo/NewTodoInput/NewTodoInput';
import TodoList from '../../components/Todo/TodoList/TodoList';

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [opensTodos, setOpensTodos] = useState(0);
    const [filter, setFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [todoForDel, setTodoForDel] = useState();

    const addTodoItem = title => {
        setTodos(todos.concat({ "title": title, "id": '_' + Math.random().toString(36).substr(2, 9), "completed": false }));
        setOpensTodos(opensTodos + 1);
    };

    const handleChange = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                if (todo.completed) setOpensTodos(opensTodos + 1);
                else (setOpensTodos(opensTodos - 1));
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }
        ))
    };

    const deleteTodo = id => {
        for (const todo of todos) {
            if (todo.id === id && !todo.completed) {
                setOpensTodos(opensTodos - 1);
            }
        }
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleClose = () => setShowModal(false);
    const handleShow = (id) => {
        setTodoForDel(id);
        setShowModal(true);
    }
    const handleCloseAndDelete = () => {
        deleteTodo(todoForDel);
        setTodoForDel();
        setShowModal(false);
    }

    return (
        <Container className="p-todos">
            <h1 className="header-todo">Todos</h1>
            <NewTodoInput addTodoProps={addTodoItem} />
            {
                todos.length > 0 ?
                    <div>
                        <TodoList
                            todos={filter === "All" ? todos
                                : filter === "Completed" ? todos.filter(todo => todo.completed)
                                    : todos.filter(todo => !todo.completed)
                            }
                            setTodos={setTodos}
                            handleChangeProps={handleChange}
                            deleteTodoProps={deleteTodo}
                            handleShow={handleShow} />
                        <Row className="bottom-row">
                            <div className="open-todos">{opensTodos} items left</div>
                            <div className="button-container">
                                <button className={filter === "All" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("All")}>All</button>
                                <button className={filter === "Active" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("Active")}>Active</button>
                                <button className={filter === "Completed" ? "button-filter marked" : "button-filter"} onClick={() => setFilter("Completed")}>Completed</button>
                            </div>
                        </Row>
                    </div> : ""
            }
            <Modal show={showModal} onHide={handleClose} className="delete-modal">
                <ModalHeader closeButton>
                    <ModalTitle>Attention Please!</ModalTitle>
                </ModalHeader>
                <ModalBody>you going to remove a open todo, are you sure?</ModalBody>
                <ModalFooter>
                    <Button className="modal-delete-button" onClick={handleClose}>
                        No, Don't delete! <img src="https://www.flaticon.com/svg/vstatic/svg/3770/3770558.svg?token=exp=1619614203~hmac=69a56551659af169219407c7bde1882b" alt="" />
                    </Button>
                    <img onClick={handleCloseAndDelete} src="https://www.flaticon.com/svg/vstatic/svg/3770/3770558.svg?token=exp=1619614203~hmac=69a56551659af169219407c7bde1882b" alt="" />
                    <Button className="modal-delete-button" onClick={handleCloseAndDelete}>
                        Yes, Delete
          </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default TodoPage;
