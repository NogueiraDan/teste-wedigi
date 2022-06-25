import styled from "styled-components";

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputItem = styled.input`
  height: 40px;
  min-width: 100%;
  border-radius: 5px 0px 0px 5px;
  padding: 10px 15px 10px 15px;
  border: none;
  background-color: #e2e8e9;
  margin-top: 20px;
`;

export const Button = styled.button`
  height: 40px;
  width: 50px;
  border-radius: 0px 5px 5px 0px;
  padding: 10px 15px 10px 15px;
  border: none;
  background-color: #e2e8e9;
  margin-top: 20px;
`;
export const MapItems = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0px;
`;

export const Item = styled.span`
  flex-grow: 1;
  font-size: 16px;
`;

export const RemoveIcon = styled.span`
  flex-grow: 0;
`;
