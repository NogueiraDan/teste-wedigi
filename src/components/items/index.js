import React, { useState } from "react";
import * as S from "./styled";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Item = ({ index, items, item, setItems, onDelete }) => {
  const [textModal, setTextModal] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Capturando estado do input do Modal
  const handleChangeTitle = (event) => {
    const inputTitle = event.target.value;
    setTextModal(inputTitle);
  };

  // Alterando titulo da sublista
  const handleUpdateItem = (id, index) => {
    const itemUpdated = items.find((element) => element.id == id);
    itemUpdated.nome = textModal;
    console.log(itemUpdated);
    console.log(index);
    setTextModal("");
    handleClose();
  };

  if (index == 0) {
    return (
      <S.SubTitle>
        <u>Sublistas:</u>
      </S.SubTitle>
    );
  } else {
    return (
      <>
        <S.MapItems>
          <S.Item>{item.nome}</S.Item>

          <S.RemoveIcon onClick={onDelete}>
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
                    onChange={(event) => handleChangeTitle(event)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={() => handleUpdateItem(item.id, index)}
              >
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </S.MapItems>
      </>
    );
  }
};

export default Item;
