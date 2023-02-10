export default function Story(props) {
  return (
    <div>
      <div className="user">
      <img
          className="back-user"
          src="./midia/stories_background.jpg"
          alt="Fundo do storys"
        />
        <img className="front-user" src={props.image} alt={props.name} />
        <p>{props.nome}</p>
      </div>
    </div>
  );
}
