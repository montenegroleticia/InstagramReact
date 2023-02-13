import Story from "./Story";

const infoStory = [
  { key: "enid", image: "./midia/enid.jpeg", name: "enid" },
  { key: "xavier",image: "./midia/xavier.jpeg", name: "xavier" },
  { key: "bianca", image: "./midia/bianca.jpeg", name: "bianca" },
  { key: "ajax",image: "./midia/ajax.jpeg", name: "ajax" },
  { key: "thing",image: "./midia/thing.jpeg", name: "thing" },
  { key: "eugene", image: "./midia/eugene.jpeg", name: "eugene" },
  { key: "tyler", image: "./midia/tyler.jpeg", name: "tyler" },
  { key: "morticia",image: "./midia/mortícia.jpeg", name: "morticia" },
];

export default function Stories() {
  return (
    <div className="storys">
      <div className="storys-emoji">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      {infoStory.map((user) => (
        <Story key={user.name} image={user.image} nome={user.name} />
      ))}
    </div>
  );
}
