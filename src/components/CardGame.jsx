import styles from "./CardGame.module.css"

export default function CardGame({game}){
    const imagen = `https://www.freetogame.com/g/${game.id}/thumbnail.jpg`
    return (
        <li className={styles.cardGame}>
            <div className={styles.title}>{game.title}</div>
            <img className={styles.cardImagen} width={365} height={206} src={imagen} alt={game.title} key={game.id}/>
            <div className={styles.descrip}>{game.short_description}</div>
        </li>
    )
}
    
// https://www.freetogame.com/g/21/thumbnail.jpg