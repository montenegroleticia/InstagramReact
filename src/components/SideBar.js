import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-conteudo">
        <Usuario image={"./midia/wandinha.jpeg"} nome={"wandinha"} />
        <Sugestoes />
      </div>
    </div>
  );
}
