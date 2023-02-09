import Sugestao from "./Sugestao";

export default function Sugestoes() {
  return (
    <div>
      <div className="sugestoes">
        <p className="cinza-sugestao">Sugestão para você</p>
        <p className="negrito">Ver tudo</p>
      </div>
      <Sugestao />
      <Sugestao />
      <Sugestao />
      <Sugestao />
      <Sugestao />
      <div className="sobre">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
