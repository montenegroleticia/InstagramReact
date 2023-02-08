export default function Post() {
  return (
    <div data-test="post" className="post">
      <div className="perfil">
        <div className="user-perfil">
          <img
            src="/imagens/enid.jpeg"
            alt="menina loira com mechas rosa e camisa colorida sorrindo"
          />
          <h2>enid</h2>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div data-test="post-image" className="conteudo-post">
        <img src="/imagens/post-enid.jpg" alt="" />
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
          <img src="/imagens/xavier.jpeg" alt="" />
          <p>
            Curtido por <strong>xavier</strong> e
            <strong>outras 5.926 pessoas</strong>
          </p>
        </div>
        <div className="comentario">
          <h2>enid</h2>
          <p>Cold days</p>
        </div>
        <div className="cinza-comentarios">
          <p>Veja todos os 738 comentários</p>
        </div>
        <div className="comentario-icon">
          <div className="comentarios">
            <h2>wandinha</h2>
            <p>cold as my heart</p>
          </div>
          <div>
            <ion-icon name="heart-outline" className="icone-comentario"></ion-icon>
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
