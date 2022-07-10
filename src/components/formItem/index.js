import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Swal from "sweetalert2";
import Item from "../items";

const FormItem = ({ indexList }) => {
  const [text, setText] = useState();
  const [items, setItems] = useState([]);

  // Setando estado do input do titulo
  const handleChangeInput = (event) => {
    const inputItem = event.target.value;
    setText(inputItem);
  };

  // Adicionando item
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
        listKey: indexList,
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
      setText("");
    }
  };

  // Remoção de item da sublista
  const handleDeleteList = (index) => {
    const removeList = Array.from(items);
    removeList.splice(index, 1);
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

      {items.map((item, index) => (
        <Item
          index={index}
          items={items}
          item={item}
          setItems={setItems}
          onDelete={() => handleDeleteList(index)}
        />
      ))}
    </>
  );
};

export default FormItem;
