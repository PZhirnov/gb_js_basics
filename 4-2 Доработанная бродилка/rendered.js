let rendered = {
    // в свойсте map храним игровое поле
    map: "", 
    // Отображает игру в консоли - поле и положение игрока на поле
    render() {
        for (let row = 0; row < config.rowCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'о ';
                } else {
                    this.map += 'x ';   
                }
            }
            this.map += '\n'
        }
        console.log(this.map);
    },
    clear() {
        // Чистим консоль и карту
        console.clear();
        this.map = "";
    }
};