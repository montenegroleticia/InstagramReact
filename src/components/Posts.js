import Post from "./Post";

const infoPost = [
  {image: "./midia/enid.jpeg", name: "enid", post: "./midia/post-enid.jpg", curtidoImage: "./midia/xavier.jpeg", curtidoName: "xavier", curtidas: "7293", texto: "Cold days", comentarios: "734", comentarioUser: "wandinha", comentario: "cold as my heart"},

  {image: "./midia/wandinha.jpeg", name: "wandinha", post: "./midia/post-wandinha.jpg", curtidoImage: "./midia/tyler.jpeg", curtidoName: "tyler", curtidas: "8307", texto: "black 🖤", comentarios: "923", comentarioUser: "enid", comentario: "my girl ❤️ 🧡 💛 💚 💙 💜"},

  {image: "./midia/tyler.jpeg", name: "tyler", post: "./midia/post-tyler.jpg", curtidoImage: "./midia/enid.jpeg", curtidoName: "enid", curtidas: "3453", texto: "what a fun day", comentarios: "823", comentarioUser: "wandinha", comentario: "I should know who you were"}
]

export default function Posts() {
  return (
    <div>
      {infoPost.map((postagem) => (<Post image = {postagem.image} name = {postagem.name} post = {postagem.post} curtidoImage = {postagem.curtidoImage} curtidoName = {postagem.curtidoName} curtidas = {postagem.curtidas} texto = {postagem.texto} comentarios = {postagem.comentarios} comentarioUser = {postagem.comentarioUser} comentario = {postagem.comentario} /> ))}
    </div>
  );
}
