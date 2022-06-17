export default function renderScreen(screen, game, requestAnimationFrame){
    const ctx = screen.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.clearRect(0, 0, 10, 10)

    for(const playerId in game.state.player){

        const player = game.state.player[playerId]
        ctx.fillStyle = 'red'
        ctx.fillRect(player.x, player.y, 1, 1)

    }

    for(const coinId in game.state.coin){

        const coin = game.state.coin[coinId]
        ctx.fillStyle = 'yellow'
        ctx.fillRect(coin.x, coin.y, 1, 1)
        
    }
    
    requestAnimationFrame(() => {
        renderScreen(screen, game, requestAnimationFrame)
    })

}