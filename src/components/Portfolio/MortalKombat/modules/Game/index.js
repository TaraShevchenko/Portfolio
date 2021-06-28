
import Initialize from "../Initialize";
import Player from "../Player";
import Attack from "../Attack";


class Game {
    constructor(props) {
        this.arenas = props.arenas;
        this.form = props.form;
        this.chat = props.chat;
    }

    start = () => {
        const player1 = new Player({
            ...JSON.parse(localStorage.player1),
            player: 1,
            arenas: this.arenas
        });

        const player2 = new Player({
            ...JSON.parse(localStorage.player2),
            player: 2,
            arenas: this.arenas
        });

        const initialize = new Initialize({
            Player1: player1,
            Player2: player2
        });
        initialize.initialize()

        this.gameFormGenerate(player1, player2)
    }

    gameFormGenerate = (Player1, Player2) => {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const attack = new Attack({
                arenas: this.arenas,
                parentSelector: this.form,
                Player1: Player1,
                Player2: Player2
            });
            attack.attack()
        });
    }
}


export default Game;