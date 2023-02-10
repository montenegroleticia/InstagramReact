export default function Post(props) {
  return (
    <div data-test="post" className="post">
      <div className="perfil">
        <div className="user-perfil">
          <img
            src= {props.image}
            alt= {props.name}
          />
          <h2>{props.name}</h2>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div data-test="post-image" className="conteudo-post">
        <img src={props.post} alt={props.name} />
      </div>

      <div className="infos">
        <div className="infos-emoji">
          <div className="esquerda-emoji">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="direita-emoji">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.curtidoImage} alt={props.curtidoName} />
          <p>
            Curtido por <strong>{props.curtidoName}</strong> e
            <strong> outras {props.curtidas} pessoas</strong>
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
              name="heart-outline"
              className="icone-comentario"
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
