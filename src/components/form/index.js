import React, { useState } from "react";
import List from "../list";
import * as S from "./styled";

const Form = () => {
  const [text, setText] = useState();
  const [lists, setLists] = useState([]);

  const handleChangeInput = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };
  const handleAddList = (event) => {
    event.preventDefault();
    setLists([...lists, text]);

    const data = { text };
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([data]));
    } else {
      localStorage.setItem(
        "list",
        JSON.stringify([...JSON.parse(localStorage.getItem("list")), data])
      );
    }
    setText("");
  };

  const handleDeleteList = (index) => {
    const removeList = Array.from(lists);
    removeList.splice(index, 1);
    setLists(removeList);
  };

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
        {lists.map((list, index) => (
          <List
            lists={lists}
            list={list}
            index={index}
            setLists={setLists}
            onDelete={() => handleDeleteList(index)}
          />
        ))}
      </ul>
    </S.FormList>
  );
};

export default Form;
