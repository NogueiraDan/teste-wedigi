import React, { useState } from "react";
import * as S from "./styled";
import Swal from "sweetalert2";

const Item = ({ indexList }) => {
  const [text, setText] = useState();
  const [items, setItems] = useState([]);
  let idItem = indexList;

  const handleChangeInput = (event) => {
    const inputItem = event.target.value;
    setText(inputItem);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (!text) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível adicionar listas em branco",
      });
    } else {
      setItems([...items, text]);
      const data = { text };
      const modelStorage = {
        listKey: idItem,
        nome: data,
      };
      if (localStorage.getItem("item") === null) {
        localStorage.setItem("item", JSON.stringify([modelStorage]));
      } else {
        localStorage.setItem(
          "item",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("item")),
            modelStorage,
          ])
        );
      }
      console.log(`Id do ITEM ${modelStorage.nome} é: ${idItem}`);
      setText("");
    }
  };
  const handleDeleteList = (key) => {
    const removeList = Array.from(items);
    removeList.splice(key, 1);
    setItems(removeList);
  };

  return (
    <>
      <S.ItemContent>
        <S.InputItem
          type="text"
          placeholder="Adicione uma sublista"
          value={text}
          onChange={handleChangeInput}
        />
        <S.Button type="submit" onClick={handleAddItem}>
          <i class="ai-plus"></i>
        </S.Button>
      </S.ItemContent>

      {items.map((item, key) => (
        <S.MapItems>
          <S.Item>{item}</S.Item>
          <S.RemoveIcon onClick={() => handleDeleteList(key)}>
            <i class="ai-trash-can"></i>
          </S.RemoveIcon>
        </S.MapItems>
      ))}
    </>
  );
};

export default Item;
