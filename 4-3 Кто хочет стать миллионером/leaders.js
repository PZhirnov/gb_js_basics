class leaders {
    constructor (name, scores, lives) {
        this.name = name;
        this.scores = scores;
        this.lives = lives;
        this.all_list = []; // тут храним полный список
    }
    // добавляем результаты
    leaderAdd (name, scores, lives){
        this.all_list.push({
            name: name,
            score: scores,
            lives: lives,
        });

    }
    // выводим всех игроков в консоль
    leadersShow () {
        console.log("---- Результаты всех игр:\n");
        for (let ilead in this.all_list) {
            console.log(`Имя игрока: ${this.all_list[ilead]['name']}\nПравильных ответов: ${this.all_list[ilead]['score']}\n 
            Остаток жизней: ${this.all_list[ilead]['lives']}
            `);
        }
    }
}