import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  align-items: center;
  padding: 10px 50px;
  margin: 20px;
  border: 1px solid #3336;
  border-radius: 10px;
  width: 400px
  min-height: 100%;
`;

export const ListHeader = styled.div`
  display: flex;
  padding-bottom: 50px;

  margin: 10px 0;
  border: none;
`;

export const ListName = styled.span`
  flex-grow: 20;
  font-size: 18px;
`;

export const RemoveIcon = styled.span`
  flex-grow: 0;
`;

export const MoveIcon = styled.span`
  flex-grow: 2;
`;
