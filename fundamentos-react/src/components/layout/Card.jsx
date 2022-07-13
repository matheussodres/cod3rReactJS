import React from "react";
import "./Card.css";

export default (props) => (
  <div className="Card">
    <div className="Conteudo"> {props.conteudo}</div>
    <div className="Footer"> {props.titulo}</div>
  </div>
);
