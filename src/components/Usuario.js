import { useState } from "react";

export default function Usuario(props) {
  const [nome, setNome] = useState(props.nome);
  const [image, setImage] = useState(props.image);

  return (
    <div className="login">
      <img
        data-test="profile-image"
        onClick={() => {
          const addImage = prompt("Qual o url da sua imagem?");
          addImage.trim()
            ? setImage(addImage)
            : alert("Url inválida. Tente novamente.");
        }}
        src={image}
        alt={nome}
      />
      <div className="nome-login">
        <p data-test="name" className="negrito">
          {nome}
        </p>
        <ion-icon
          data-test="edit-name"
          onClick={() => {
            const addNome = prompt("Qual o nome do usuário?");
            addNome.trim()
              ? setNome(addNome)
              : alert("Nome inválido. Tente novamente.");
          }}
          name="pencil"
        ></ion-icon>
      </div>
    </div>
  );
}
