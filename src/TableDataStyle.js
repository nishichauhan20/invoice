import styled from "styled-components";
export const StyledTableData = styled.div`
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  input {
    border: none;
    width: 90%;
    font-size: 14px;
    text-align: center;
  }
  textarea {
    border: none;
    font-size: 12px;
    width: 90%;
    height: 20px;
    font-size: 14px;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  table {
    border-collapse: separate;
    width: 100%;
  }
  thead,
  td {
    border: 1px solid;
    font-size: 16px;
  }
  .div-btn {
    display: none;
  }

  tr:hover .div-btn {
    display: inline-block;
  }
  .add-new {
    text-decoration: none;
    color: green;
    display: flex;
  }
`;
