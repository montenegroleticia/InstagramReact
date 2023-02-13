import Story from "./Story";

const infoStory = [
  { image: "./midia/enid.jpeg", name: "enid" },
  { image: "./midia/xavier.jpeg", name: "xavier" },
  { image: "./midia/bianca.jpeg", name: "bianca" },
  { image: "./midia/ajax.jpeg", name: "ajax" },
  { image: "./midia/thing.jpeg", name: "thing" },
  { image: "./midia/eugene.jpeg", name: "eugene" },
  { image: "./midia/tyler.jpeg", name: "tyler" },
  { image: "./midia/mortícia.jpeg", name: "morticia" },
];

export default function Stories() {
  return (
    <div className="storys">
      <div className="storys-emoji">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      {infoStory.map((user) => (
        <Story image={user.image} nome={user.name} />
      ))}
    </div>
  );
}
