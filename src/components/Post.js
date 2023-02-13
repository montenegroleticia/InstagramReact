import { useState } from "react";

export default function Post(props) {
  const heartLine = "heart-outline";
  const heart = "heart";
  const bookline = "bookmark-outline";

  const [curtido, setCurtido] = useState(heartLine);
  const [cor, setCor] = useState("");

  const [salvo, setSalvo] = useState(bookline);

  const [comentarioCurtido, setComentarioCurtido] = useState(heartLine);
  const [corComentario, setCorComentario] = useState("");

  const [numLike, setNumLike] = useState(Number(props.curtidas));

  function curtir() {
    if (curtido === heartLine && cor === "") {
      setCurtido(heart);
      setCor("vermelho");
      setNumLike(numLike + 1);
    } else {
      setCurtido(heartLine);
      setCor("");
      setNumLike(numLike - 1);
    }
  }

  function salvar() {
    if (salvo === bookline) {
      setSalvo("bookmark");
    } else {
      setSalvo(bookline);
    }
  }

  function curtirComentario() {
    if (comentarioCurtido === heartLine && corComentario === "") {
      setComentarioCurtido(heart);
      setCorComentario("vermelho");
    } else {
      setComentarioCurtido(heartLine);
      setCorComentario("");
    }
  }

  function curtirFoto() {
    if (curtido === heartLine && cor === "") {
      setCurtido(heart);
      setCor("vermelho");
      setNumLike(numLike + 1);
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="perfil">
        <div className="user-perfil">
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div data-test="post-image" className="conteudo-post">
        <img onClick={curtirFoto} src={props.post} alt={props.name} />
      </div>

      <div className="infos">
        <div className="infos-emoji">
          <div className="esquerda-emoji">
            <ion-icon
              data-test="like-post"
              onClick={curtir}
              id={cor}
              name={curtido}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="direita-emoji">
            <ion-icon
              data-test="save-post"
              onClick={salvar}
              name={salvo}
            ></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.curtidoImage} alt={props.curtidoName} />
          <p>
            Curtido por <strong>{props.curtidoName}</strong> e
            <strong data-test="likes-number"> outras {numLike} pessoas</strong>
          </p>
        </div>
        <div className="comentario">
          <h2>{props.name}</h2>
          <p>{props.texto}</p>
        </div>
        <div className="cinza-comentarios">
          <p>Veja todos os {props.comentarios} comentários</p>
        </div>
        <div className="comentario-icon">
          <div className="comentarios">
            <h2>{props.comentarioUser}</h2>
            <p>{props.comentario}</p>
          </div>
          <div>
            <ion-icon
              onClick={curtirComentario}
              name={comentarioCurtido}
              className="icone-comentario"
              id={corComentario}
            ></ion-icon>
          </div>
        </div>
        <div className="add-comentario">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" placeholder="Adicione um comentário..." />
          <a href="">Publicar</a>
        </div>
      </div>
    </div>
  );
}
