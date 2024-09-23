import styled from "styled-components";

export const StyledHome = styled.div`
  position: relative;
  background: #fff;
  padding: 50px 45px;
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);

  .head1 {
    font-size: 56px;
    font-family: sans-serif;
    font-weight: bold;
    color: #f36a08;
    text-align: center;
    margin: 0px;
  }
  .para1 {
    margin: 0px;
    font-size: 16px;
    font-weight: 600;
    font-family: system-ui;
    padding: 2px;
    text-align: center;
  }
  .left-slider {
    display: flex;
    flex-direction: column;
    left: 150px;
    width: 280px;
    height: 112px;
    margin-top: 12px;
    padding: 4px;
    /* margin-bottom: 10px; */
  }
  .left-slider textarea {
    border: none;
    font-size: 15px;
    border: 1px dotted transparent;
    padding: 4px;
    resize: none;

    scroll-behavior: none;
    overflow: hidden;
  }
  .greeting textarea {
    border: none;
    font-size: 15px;
    border: 1px dotted transparent;
    padding: 4px;
    resize: none;
    scroll-behavior: none;
    overflow: hidden;
  }
  textarea:focus {
    outline: none;
    font-size: 16px;
  }
  .greeting {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 4px;
  }
  .subject {
    /* display: flex;
    flex-direction: column;
    width: 280px; */
  }
  .sub {
    display: flex;
    font-family: system-ui;
    font-size: 16px;
    text-align: justify;
    padding: 4px;
  }
  .sub textarea {
    border: 1px dotted transparent;
    padding: 4px;
    resize: none;
    scroll-behavior: none;
    overflow: hidden;
    width: 590px;
    height: auto;
  }

  .text-size {
    margin-bottom: 2px;
    text-align: justify;
    font-size: 16px;
  }
  .terms {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .list {
    text-align: justify;
  }
  ol {
    margin-top: 0px;
    font-size: 12px;
    margin-bottom: 2px;
  }
  .term,
  p {
    padding: 4px;
    margin-bottom: 0px;
  }
  .sign {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
  }
  .sign p {
    margin: 0px;
    padding: 0px;
    font-size: 14px;
  }
  .sign img {
    width: 124px;
  }
  .bold {
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
    margin-bottom: 0px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .foot1,
  p {
    margin: 0px;
    padding: 1px;
    text-align: justify;
  }
  .foot1,
  h4 {
    margin-bottom: 4px;
  }
  .foot1,
  a {
    text-decoration: none;
    color: black;
  }
`;
