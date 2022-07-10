import React, { useState } from "react";
import * as S from "./styled";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Item = ({ index, items, item, setItems, onDelete }) => {
  // const [text, setText] = useState();
  // const [items, setItems] = useState([]);
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
  const handleUpdateItem = (key) => {
    const itensCopy = Array.from(items);
    itensCopy.splice(key, 1, textModal);
    setItems(itensCopy);
    setTextModal("");
    handleClose();
  };

  // Capturando estado do input da sublista
  // const handleChangeInput = (event) => {
  //   const inputItem = event.target.value;
  //   setText(inputItem);
  // };

  // Adicionando sublista à lista
  // const handleAddItem = (event) => {
  //   event.preventDefault();
  //   if (!text) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Erro",
  //       text: "Não é possível adicionar listas em branco",
  //     });
  //   } else {
  //     setItems([...items, text]);
  //     const data = { text };
  //     const modelStorage = {
  //       listKey: idItem,
  //       key: 0,
  //       nome: data,
  //     };
  //     if (localStorage.getItem("item") === null) {
  //       const modelStorage = {
  //         listKey: idItem,
  //         nome: data,
  //       };
  //       localStorage.setItem("item", JSON.stringify([modelStorage]));
  //     } else {
  //       localStorage.setItem(
  //         "item",
  //         JSON.stringify([
  //           ...JSON.parse(localStorage.getItem("item")),
  //           modelStorage,
  //         ])
  //       );
  //     }
  //     setText("");
  //   }
  // };

  // Removendo sublista da lista
  // const handleDeleteList = (key) => {
  //   const removeList = Array.from(items);
  //   removeList.splice(key, 1);
  //   setItems(removeList);
  // };

  return (
    <>
      {/* <S.ItemContent>
        <S.InputItem
          type="text"
          placeholder="Adicione uma sublista"
          value={text}
          onChange={handleChangeInput}
        />
        <S.Button type="submit" onClick={handleAddItem}>
          <i class="ai-plus"></i>
        </S.Button>
      </S.ItemContent> */}
      <S.MapItems>
        <S.Item>{item}</S.Item>

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
            <Button variant="primary" onClick={() => handleUpdateItem(index)}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </S.MapItems>
    </>
  );
};

export default Item;
