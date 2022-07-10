import React, { useState, useEffect } from "react";
import * as S from "./styled";
import FormItem from "../formItem";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const List = ({ index, lists, list, setLists }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getChildrenItens = JSON.parse(localStorage.getItem("item"));

  useEffect(() => {
    if (getChildrenItens == null) {
      console.log({ getChildrenItens });
    } else {
      console.log({ getChildrenItens });
    }
  }, [list, lists]);

  const handleChangetitle = (event) => {
    const inputTitle = event.target.value;
    setText(inputTitle);
  };

  const handleUpdateList = (index) => {
    const itensCopy = Array.from(lists);
    itensCopy.splice(index, 1, text);
    setLists(itensCopy);
    localStorage.setItem("list", JSON.stringify(itensCopy));
    handleClose();
  };

  const handleDeleteList = (index) => {
    const removeList = Array.from(lists);
    removeList.splice(index, 1);
    setLists(removeList);
    console.log(removeList);
    localStorage.setItem("list", JSON.stringify(removeList));
    const deleteItem = getChildrenItens.filter(
      (children) => children.listKey != index
    );
    console.log(deleteItem);
    localStorage.setItem("item", JSON.stringify(deleteItem));
  };

  return (
    <>
      <S.List id="item">
        <S.ListHeader id="headerList">
          <S.MoveIcon>
            <a>
              <i class="ai-more-horizontal-fill"></i>
            </a>
          </S.MoveIcon>
          <S.ListName>{list}</S.ListName>
          <S.RemoveIcon onClick={() => handleDeleteList(index)}>
            <i class="ai-trash-can"></i>
          </S.RemoveIcon>

          <S.EditIcon onClick={handleShow}>
            <i class="ai-pencil"></i>
          </S.EditIcon>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Edite o titulo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Novo titulo"
                    autoFocus
                    onChange={(event) => handleChangetitle(event)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => handleUpdateList(index)}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </S.ListHeader>

        <ul className="items-group">
          <FormItem indexList={index} />
        </ul>
      </S.List>
    </>
  );
};

export default List;
