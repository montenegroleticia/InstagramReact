import Sugestao from "./Sugestao";

const infoSugestao = [
  {
    key: "nevermore",
    image: "./midia/nevermore.png",
    user: "nevermore",
    nome: "Nevermore Academy",
  },
  { key: "yoko", image: "./midia/yoko.jpeg", user: "yoko", nome: "Yoko Tanaka" },
  { key: "beezzs", image: "./midia/bees.jpg", user: "beezzs", nome: "Bees Club" },
  { key: "cello",image: "./midia/selo.jpg", user: "cello", nome: "Cello Store" },
  { key: "jennaortega", image: "./midia/jenna.jpg", user: "jennaortega", nome: "Jenna Ortega" },
];

export default function Sugestoes() {
  return (
    <div>
      <div className="sugestoes">
        <p className="cinza-sugestao">Sugestão para você</p>
        <p className="negrito">Ver tudo</p>
      </div>
      {infoSugestao.map((sugestao) => (
        <Sugestao
          image={sugestao.image}
          user={sugestao.user}
          nome={sugestao.nome}
        />
      ))}
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
