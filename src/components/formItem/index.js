import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Item from "../items";

const FormItem = ({ indexList }) => {
  const [text, setText] = useState();
  const [items, setItems] = useState([{}]);

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
      //setItems([...items, text]);
      const data = text;
      const modelStorage = {
        listKey: indexList,
        id: uuidv4(),
        nome: data,
      };
      setItems([...items, modelStorage]);
      if (localStorage.getItem("item") === null) {
        localStorage.setItem("item", JSON.stringify([modelStorage]));
        console.log(modelStorage.id);
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
          key={item.id}
          index={index}
          items={items}
          item={item}
          setItems={setItems}
        />
      ))}
    </>
  );
};

export default FormItem;
