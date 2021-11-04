let game = {
    // Запускает игру
    run() {
        // В бесконечном цикле получаем команду от игрока
        while (true) {
            // Получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена!");
                return; 
            }
            const nextPoint = mover.getNextPosition(direction);
            
            // --- Доработка решения под условие задачи:
            if (nextPoint != null) {
                // очистим игровое поле
                rendered.clear();
                // двигаем игрока
                player.move(nextPoint);
                // отрисовываем поле
                rendered.render();  
            } else {
                alert('Вы вышли за пределы игрового поля! Для продолжения нажмите ввод!');
            }
        }
    },
    // Метод выполняется при открытии страницы
    init() {
        console.log("Ваше положение на поле в виде о.");
        rendered.render(); // отрисуем игровое поле
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.")
    }
};

game.init();