import Storys from "./Storys";
import Post from "./Post";
import SideBar from "./SideBar";

export default function Feed() {
  return (
    <div className="feed">
      <div className="storys-posts">
        <Storys />
        <Post />
      </div>
      <SideBar />
    </div>
  );
}
