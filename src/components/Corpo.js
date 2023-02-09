import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Feed() {
  return (
    <div className="feed">
      <div className="storys-posts">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}
