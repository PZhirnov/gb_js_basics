let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection () {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        // получаем от пользователя направление
        while (true) {
            let direction = parseInt(prompt("Введите число (1-2-3  4- -6  7-8-9), куда вы хотите переместиться, 'Отмена' для выхода."));
            // если введено не число, то возвращаем null
            if (isNaN(direction)) {
                return null;
            }
            // если введено число не из доступных напрвлений, то выводим напоминание
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести 2, 4, 6 или 8!')
                continue;
            }
            return direction;
        }

    },
    // Отдает следующую точку, в которую будет перемещаться объект
    // + --- Доработка решения под условие задачи:
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Изменяем координаты по соответствующему направлению
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        // Проверяем положение точки после перемещения и если выходим за границы поля,то вернем null.
        if ((nextPosition.x < 0 || nextPosition.x > config.colsCount - 1) 
        || (nextPosition.y < 0 || nextPosition.y > config.rowCount - 1)) {
            return null;
        }
        // Возвращаем то, что получилось в объекте
        return nextPosition;
    }

}