export default function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="sugestao-perfil">
        <img src={props.image} alt={props.nome} />
        <div>
          <p className="negrito">{props.user}</p>
          <p className="cinza">{props.nome}</p>
        </div>
      </div>
      <a href="#">Seguir</a>
    </div>
  );
}
