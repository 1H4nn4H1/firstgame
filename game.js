export default function createGame(){
    const state = {
            player: {},
            coin: {},
            screen: {
                width: 10,
                height: 10
            }
    }

    function addPlayers(command){
        const playerId = command.player
        const playerX = command.playerX
        const playerY = command.playerY

        state.player[playerId] = {
            x: playerX,
            y: playerY
        }
    }

    function removePlayer(command){
        const playerId = command.playerId

        delete state.player[playerId]
    }

    function addCoin(command){
        const coinId = command.coin
        const coinX = command.coinX
        const coinY = command.coinY

        state.coin[coinId] = {
            x: coinX,
            y: coinY
        }
    }

    function removeCoin(command){
        const coinId = command.coinId

        delete state.coin[coinId]
    }

    function movePlayer(command){
        //console.log(`moving ${command.playerId} with ${command.keyPressed}`)
        const keyPressed = command.keyPressed
        const player = state.player[command.playerId]
        const playerId = command.playerId

        const acceptedMoves = {
            ArrowUp(player){
                console.log('up')
                if( player.y > 0 ){
                    player.y = player.y - 1
                    return
                }
            },
            ArrowRight(player){
                //console.log('right')
                if(player.x + 1 < state.screen.width ){
                    player.x = player.x + 1
                    return
                }
            },
            ArrowDown(player){
                //console.log('down')
                if(player.y + 1 < state.screen.height ){
                    player.y = player.y + 1
                    return
                }
            },
            ArrowLeft(player){
                //console.log('left')
                if(player.x > 0){
                    player.x = player.x - 1
                    return
                }
            }
        }
        const moveFuncion = acceptedMoves[keyPressed]
        if (player && moveFuncion){

        moveFuncion(player)
        playerCollision(playerId)
        
    }

        function playerCollision(playerId){
                const player = game.player[playerId]

                for(const coinId in game.coin){
                    const coin = game.coin[coinId]

                    if(player.x === coin.x && player.y === coin.y){
                        console.log('collision')
                        removeCoin({coinId: coinId})
                    }
                }
        }

    }

    return{
        addPlayers,
        removePlayer,
        addCoin,
        removeCoin,
        movePlayer,
        state
    }

}
