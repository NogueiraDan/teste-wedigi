import React, { useState, useEffect } from "react";
import List from "../list";
import * as S from "./styled";
import Sortable from "sortablejs";
import Swal from "sweetalert2";

const Form = () => {
  const [text, setText] = useState();
  const [lists, setLists] = useState([]);
  const getLists = JSON.parse(localStorage.getItem("list"));

  useEffect(() => {
    var element = document.getElementById("listItems");
    new Sortable(element, {
      group: "element",
    });
  }, []);

  useEffect(() => {
    if (getLists == null) {
      setLists([]);
    } else {
      setLists(getLists);
    }
  }, []);

  const handleChangeInput = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };
  const handleAddList = (event) => {
    event.preventDefault();
    if (!text) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não é possível adicionar listas em branco",
      });
    } else {
      setLists([...lists, text]);

      const data = text;
      if (localStorage.getItem("list") === null) {
        localStorage.setItem("list", JSON.stringify([data]));
      } else {
        localStorage.setItem(
          "list",
          JSON.stringify([...JSON.parse(localStorage.getItem("list")), data])
        );
      }
      setText("");
    }
  };

  const handleDeleteList = (index) => {
    const removeList = Array.from(lists);
    removeList.splice(index, 1);
    setLists(removeList);
    console.log(removeList);
    localStorage.setItem("list", JSON.stringify(removeList));
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
