namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function buildLevel () {
    // If next level equals length of array length, then
    // YOU WIN 
    //
    //
    // Array length is 2: 0, 1, 2
    if (nextLevel == levels.length) {
        game.over(true)
    }
    scene.setTileMap(levels[nextLevel])
    // Places the player sprite at a certain position when
    // touching ORANGE tile
    for (let value of scene.getTilesByType(4)) {
        value.place(player1)
    }
    // Changes the tileMap to the next level in the array
    // of maps....
    nextLevel += 1
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let player1: Sprite = null
let nextLevel = 0
let levels: Image[] = []
// Storing Levels in an array List
levels = [img`
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 4 f f f f f f 7 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`, img`
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 4 9 9 9 9 9 9 7 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
`, img`
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 4 3 3 3 3 3 3 7 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`]
// It makes green block look like a face and creates a
// wall
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 f 7 7 7 7 7 7 7 7 f f 7 7 7 
7 7 7 f f 7 7 7 7 7 7 f 7 7 7 7 
7 7 7 7 f f 7 7 7 7 f f 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
// It starts a number for next level 
nextLevel = 0
player1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . 2 . 7 . 7 . 2 . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . 2 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(player1, 100, 100)
buildLevel()
