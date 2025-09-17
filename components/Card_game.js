import Juegos from '../jsons/Juegos.json';

function Card_game() {
  return (
    <div>
      {Juegos.map((juego, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{juego.nombre}</h2>
          <img src={juego.img} alt={juego.nombre} style={{ width: "200px" }} />
          <p><b>Puntuación:</b> {juego.score}</p>
          <p>{juego.descripcion}</p>
          <p><b>Año:</b> {juego.año}</p>
        </div>
      ))}
    </div>
  );
}

export default Card_game;
