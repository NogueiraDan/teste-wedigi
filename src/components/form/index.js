import React, { useState, useEffect } from "react";
import List from "../list";
import * as S from "./styled";
import Sortable from "sortablejs";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [text, setText] = useState();
  const [lists, setLists] = useState([]);
  let idList;

  const handleChangeInput = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };
  const handleAddList = (event) => {
    event.preventDefault();
    setLists([...lists, text]);

    const data = { text };
    const modelStorage = {
      id: uuidv4(),
      nome: data,
    };
    idList = modelStorage.id;
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([modelStorage]));
    } else {
      localStorage.setItem(
        "list",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("list")),
          modelStorage,
        ])
      );
    }
    console.log(`Id da lista ${modelStorage.nome} é: ${idList}`);
    setText("");
  };

  const handleDeleteList = (index) => {
    const removeList = Array.from(lists);
    removeList.splice(index, 1);
    setLists(removeList);
  };

  useEffect(() => {
    var element = document.getElementById("listItems");
    new Sortable(element, {
      group: "element",
    });
  }, []);

  return (
    <S.FormList>
      <form>
        <S.Input
          type="text"
          placeholder="Qual lista você deseja criar?"
          value={text}
          onChange={handleChangeInput}
        />
        <S.Button type="submit" onClick={handleAddList}>
          <i class="ai-plus"></i>
        </S.Button>
      </form>

      <ul className="list-group">
        <div id="listItems">
          {lists.map((list, index) => (
            <List
              indexList={index}
              lists={lists}
              list={list}
              setLists={setLists}
              onDelete={() => handleDeleteList(index)}
            />
          ))}
        </div>
      </ul>
    </S.FormList>
  );
};

export default Form;
