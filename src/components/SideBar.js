export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-conteudo">
        <div className="login">
          <img src="/imagens/wandinha.jpeg" alt="" />
          <div className="nome-login">
            <p className="negrito">wandinha</p>
            <ion-icon name="pencil"></ion-icon>
          </div>
        </div>
        <div className="sugestoes">
          <p className="cinza-sugestao">Sugestão para você</p>
          <p className="negrito">Ver tudo</p>
        </div>
        <div className="sugestao">
          <div className="sugestao-perfil">
            <img src="/imagens/nevermore.png" alt="" />
            <div>
              <p className="negrito">nevermore</p>
              <p className="cinza">Nevermore Academy</p>
            </div>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div className="sugestao">
          <div className="sugestao-perfil">
            <img src="/imagens/yoko.jpeg" alt="" />
            <div>
              <p className="negrito">yoko</p>
              <p className="cinza">Yoko Tanaka</p>
            </div>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div className="sugestao">
          <div className="sugestao-perfil">
            <img src="/imagens/bees.jpg" alt="" />
            <div>
              <p className="negrito">beezzs</p>
              <p className="cinza">Bees Club</p>
            </div>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div className="sugestao">
          <div className="sugestao-perfil">
            <img src="/imagens/selo.jpg" alt="" />
            <div>
              <p className="negrito">cello</p>
              <p className="cinza">Cello Store</p>
            </div>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div className="sugestao">
          <div className="sugestao-perfil">
            <img src="/imagens/jenna.jpg" alt="" />
            <div>
              <p className="negrito">jennaortega</p>
              <p className="cinza">Jenna Ortega</p>
            </div>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div className="sobre">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </div>
  );
}
