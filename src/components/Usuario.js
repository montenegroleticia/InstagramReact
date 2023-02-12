import { useState } from "react";

export default function Usuario(props) {
  const [nome, setNome] = useState(props.nome);
  const [image, setImage] = useState(props.image);

  return (
    <div className="login">
      <img
        onClick={() => {
          const addImage = prompt("Qual o url da sua imagem?");
          addImage ? setImage(addImage) : alert("Url invalida. Digite novamente.");
        }}
        src={image}
        alt={nome}
      />
      <div className="nome-login">
        <p className="negrito">{nome}</p>
        <ion-icon onClick={() => {
          const addNome = prompt("Altere o nome do usuário:");
          addNome.trim() ?  setNome(addNome) : alert("Erro. Tente novamente.")
        }} name="pencil"></ion-icon>
      </div>
    </div>
  );
}
