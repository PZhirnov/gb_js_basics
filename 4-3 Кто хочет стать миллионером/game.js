let resLead = new leaders("", 0, 0);

let game = {
    run() {
        let msg = true;
        while (msg) {
            game.round();
            resLead.leadersShow();
            msg = confirm('Продолжим игру!');

        }
        
    },

    round() {
        // Тут будет вся логика игры
        let namePlayer = '';
        let numQuest = config.numQuestions;
        let i = numQuest; 
        let listIndex = indexQuestions(config.numQuestions);
        let curQuest = {}; 
        let allAnsw = [];
        let varAnsw = ''; // для хранения перемешанных вариантов ответов
        let score = 0; // угаданные ответы
        let lives = 3; // количество ошибок
        namePlayer = prompt('Введите ваше имя или [ввод] для завершения:');
        while (i > 0 && lives > 0) {
            curQuest = questions[listIndex[i - 1]];
            allAnsw = verifiAnsw(curQuest);
            varAnsw = ''; // очищаем от предыдущего вывода
            for (ichar in allAnsw[1]) {
                varAnsw += `${ichar}. ${allAnsw[1][ichar]}` + '\n';
            }
            // подготовим варианты ответов для вывода пользователю 
            playerAnsw = prompt(`${curQuest['question']}\n\n Варианты ответов:\n ${varAnsw}`);
            // проверим введенные данные пользователем
            if (playerAnsw.toLowerCase() === allAnsw[0].toLowerCase()) {
                score += 1;
            } else {
                lives -= 1;
            }
            // уменьшаем счетчик попыток
            i--;
            }
        // Записываем результаты пользователя в массив
        console.log(`Отгадано вопросов - ${score} Оставшихся жизней - ${lives}`);
        resLead.leaderAdd(namePlayer, score, lives);    
    },
    
    init() {
        console.log("Добро пожаловать в игру 'Кто хочет стать миллионером!'\nДля начала игры введите game.run()");
    },

};

// Сгенерируем рандомно 5 индексов, по которым возьмем вопросы из базы 
function indexQuestions(n) {
    let randNum = null;
    let resArr = [];
    let j = 0;
    while (j < n) {
        // добавлять в массив данные будет пока не заполним полностью массив уникальными значениями
        randNum = Math.round(Math.random() * (n - 1));
        if (!resArr.includes(randNum)) {
            resArr.push(randNum);
            j++;
        }
    }
    return resArr;
}

// Функция для проверки ответа
function verifiAnsw(objQuest) {
    // сделаем копию массива, чтобы не удалить исходный массив
    let objCopy = objQuest['answer'].slice(0); 
    let trueAnswer = objCopy[0]; // правильный ответ в базе хранится в 0 позиции
    let trueChar = '';
    // далее перемешиваем ответы и назначаем обозначение варианта - а, b, с, d
    let listAnsw = {}; // массив ответов 
    let len = objCopy.length; // длинна массива
    let curChar = '';
    let curAnsw = '';
    let verIndex;
    
    for (let i = 0; i < len; i++) {
        curChar = String.fromCharCode(65 + i); // буквенное обозначение ответа
        verIndex = Math.round(Math.random()*(objCopy.length - 1));
        curAnsw = objCopy.splice(verIndex, 1);
        // запоминаем корректно обозначение ответа
        if (curAnsw[0] === trueAnswer) {
            trueChar = curChar;
        }
        // Делаем массив для вывода вариантов ответов пользователю пользователю
        listAnsw[curChar] = curAnsw[0];
            
        }
    return [trueChar, listAnsw]; // варианты ответа и правильный вариант
}

// Запускаем инициализацию игры
game.init();
