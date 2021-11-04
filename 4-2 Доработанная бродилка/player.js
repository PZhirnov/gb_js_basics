/**
 * Объект игрока
 * @property {int} x Позиция по X-координате
 * @property {int} y Позиция по Y-координате
 */
const player = {
    x: 0,
    y: 0,
    /**
     * Метод move двигает игрога по переданному направлению
     * @param {{x: int, y: int}} nextPpoint - следующая точка пользователя
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

};