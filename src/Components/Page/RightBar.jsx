import React from "react";
import Block from "../Utils/Block";
import BlockItem from "../Utils/BlockItem";
import styles from "./RightBar.styles.scss";

export default function RightBar() {
  return (
    <div className={styles.rightSide}>
      <div className={styles.searchBar}>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            style={{ color: "#5B6268" }}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input type="text" id="text" placeholder="Buscar en Twitter" />
      </div>
      <Block header={"Qué está pasando"}>
        <BlockItem
          type={"item"}
          cat={"Item category"}
          time={"Item time"}
          title={"Item title"}
          optional={"Optional text"}
        />
      </Block>
      <Block header={"A quién seguir"}>
        <BlockItem
          type={"item"}
          cat={"Item category"}
          time={"Item time"}
          title={"Item title"}
        />
      </Block>
      <div className={styles.footer}>
        <a>
          <span>Condiciones de Servicio</span>
        </a>
        <a>
          <span>Política de Privacidad</span>
        </a>
        <a>
          <span>Política de cookies</span>
        </a>
        <a>
          <span>Información de anuncios</span>
        </a>
        <a>
          <span>Más opciones ...</span>
        </a>
        <span>© 2021 Twitter, Inc.</span>
      </div>
    </div>
  );
}
