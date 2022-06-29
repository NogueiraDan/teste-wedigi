import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Item from "../items";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sortable from "sortablejs";

const List = ({ list, index, lists, setLists, onDelete }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangetitle = (event) => {
    const inputTitle = event.target.value;
    setText(inputTitle);
  };

  const handleUpdateList = (index) => {
    const itensCopy = Array.from(lists);
    itensCopy.splice(index, 1, text);
    setLists(itensCopy);
    handleClose();
  };

  // useEffect(() => {
  //   var element = document.getElementById("item");
  //   new Sortable(element, {
  //     group: "element",
  //   });
  // }, []);

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
          <S.RemoveIcon onClick={onDelete}>
            <i class="ai-trash-can"></i>
          </S.RemoveIcon>

          <span onClick={handleShow}>
            <i class="ai-pencil"></i>
          </span>
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
              <Button variant="primary" onClick={handleUpdateList}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </S.ListHeader>

        <ul className="items-group">
          <Item />
        </ul>
      </S.List>
    </>
  );
};

export default List;
