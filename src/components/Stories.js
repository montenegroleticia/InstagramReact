import Story from "./Story";

const infoStory = [
  {image: "./midia/enid.jpeg", nome: "enid"},
  {image: "./midia/xavier.jpeg", nome: "xavier"},
  {image: "./midia/bianca.jpeg", nome: "bianca"},
  {image: "./midia/ajax.jpeg", nome: "ajax"},
  {image: "./midia/thing.jpeg", nome: "thing"},
  {image: "./midia/eugene.jpeg", nome: "eugene"},
  {image:"./midia/tyler.jpeg", nome: "tyler"},
  {image: "./midia/mortícia.jpeg", nome: "morticia"}
]

export default function Stories() {
  return (
    <div className="storys">
      <div className="storys-emoji">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      {infoStory.map ((user) => (<Story image = {user.image} nome = {user.nome} /> ))}
    </div>
  );
}
