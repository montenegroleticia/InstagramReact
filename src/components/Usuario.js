import { useState } from "react";

export default function Usuario(props) {
  const [nome, setNome] = useState("wandinha");
  const [image, setImage] = useState("./midia/wandinha.jpeg");

  function nomeUser() {
    const novoNome = prompt("Insira seu nome:").trim();
    if (nome.length > 0) {
      setNome(novoNome);
    }
  }

  function imageUser() {
    const novaImage = prompt("Insira imagem:");
    setImage(novaImage);
  }

  return (
    <div className="login">
      <img onClick={imageUser} src={image} alt={nome} />
      <div className="nome-login">
        <p className="negrito">{nome}</p>
        <ion-icon onClick={nomeUser} name="pencil"></ion-icon>
      </div>
    </div>
  );
}
