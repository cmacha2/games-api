import data from "../utils/data_game.json"
import CardGame from "./CardGame";
import styles from "./CardsGame.module.css" 

export default function CardsGame(){
    return (
        <div className={styles.conteiner}>
            {data.map((game) =>(
            <CardGame key={game.id} game={game}/>
            ))}
        </div>
    )
}