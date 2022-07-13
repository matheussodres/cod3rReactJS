import "./App.css";
import React from "react";
import ComParametro from "./components/ComParametro";
import PrimeiroComponente from "./components/PrimeiroComponente";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";

export default (props) => (
  <div className="App">
    <Card titulo="Primeiro Componente">
      <PrimeiroComponente />
    </Card>

    <Card titulo="Componente com Parametro">
      <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
  </div>
);
