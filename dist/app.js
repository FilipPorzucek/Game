const play = document.querySelector('.play');
const man = document.querySelector('.man');
const writing = document.querySelector('.writing');
const dymek = document.querySelector('.cloud');
const desc = document.querySelector('.desc');
const body = document.querySelector('body');
const trapeze = document.querySelector('.trapeze');
const trapeze2 = document.querySelector('.trapeze2');
const line = document.querySelector('.line');
const levels = document.querySelectorAll('.levels');
const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');
const level5 = document.querySelector('.level5');
const level6 = document.querySelector('.level6');
const level7 = document.querySelector('.level7');
const level8 = document.querySelector('.level8');
const level9 = document.querySelector('.level9');
const level10 = document.querySelector('.level10');
const level11 = document.querySelector('.level11');
const level12 = document.querySelector('.level12');
const skip = document.querySelector('.continue');
const skip2 = document.querySelector('.continue2');
const skip3 = document.querySelector('.continue3');
const logo = document.querySelector('.logo');
const answers = document.querySelector('.answers');
const test = document.querySelector('#test');
const cloud = document.querySelector('.cloud');
const description = document.querySelector('.desc');
const chance1 = document.querySelector('.chance1');
const man2 = document.querySelector('.man2');
const cloud2 = document.querySelector('.cloud2');
const desc2 = document.querySelector('.desc2');
const again = document.querySelector('.again');
const chance2 = document.querySelector('.chance2');
const chance3 = document.querySelector('.chance3');
const containerAnswer = document.querySelector('.containerAnswer');
const desc4 = document.querySelector('.desc4');
const levelsArray = Array.from(levels);
const jokesArray = [
    {
        joke: 'Jak nazywa się Miasto' + '<br>' + ' które patrzy na Samochody ? ' + '<br>' + 'Karpacz'
    },
    {
        joke: 'Jaka choroba jest' + '<br>' + 'dla bazyliszka śmiertelna ?' + '<br>' + ' Zez zbieżny'
    },
    {
        joke: 'Dlaczego komputer' + '<br>' + 'nie może być głodny?' + '<br>' + ' Bo ma już procesor.'
    },
    {
        joke: 'Co mówi żaba' + '<br>' + 'na pożegnanie?' + '<br>' + ' Żegnaj, kumplu!'
    },
    {
        joke: 'Dlaczego wąż nie może grać ' + '<br>' + ' w karty?' + '<br>' + ' Bo jest zbyt ' + '<br>' + 'skłonny do oszustwa.'
    },
    {
        joke: 'Dlaczego kościotrup' + '<br>' + 'nie poszedł na bal?' + '<br>' + ' Bo nie miał z kim iść.'
    },
    {
        joke: 'Co mówi ryba' + '<br>' + 'do drugiej ryby?' + '<br>' + ' Nic, bo ryby nie mówią.'
    },
    {
        joke: 'Dlaczego dynia ' + '<br>' + 'poszła do lekarza?' + '<br>' + ' Bo miała pestkę.'
    },
    {
        joke: 'Dlaczego kot nie lubi' + '<br>' + 'wody?' + '<br>' + ' Bo zawsze zostaje mokry.'
    },
    {
        joke: 'Co mówi ślimak' + '<br>' + 'kiedy wsiada do taksówki?' + '<br>' + ' Poproszę szybciej!'
    }
];
function generateJokes() {
    const randomJokeIndex = Math.floor(Math.random() * jokesArray.length);
    return jokesArray[randomJokeIndex];
}
man.addEventListener('click', () => {
    const randomJoke = generateJokes();
    desc.innerHTML = randomJoke.joke;
    desc.style.fontSize = '18px';
    desc.style.marginLeft = '-155px';
});
man.addEventListener('mouseover', () => {
    const jokeInformation = 'Kliknij na mnie <br> a opowiem ci żart. Kliknij dwa razy <br> a pokaże ci twórców gry';
    desc.innerHTML = jokeInformation;
    desc.style.fontSize = '14px';
    desc.style.marginLeft = '-155px';
});
man.addEventListener('mouseout', () => {
    desc.innerHTML = "WITAJ W PROGRAMIE MILIONERZY !" + "<br>" +
        " WYTĘŻ SWÓJ UMYSŁ I ZAGRAJ O MILION <br>ZŁOTYCH W NASZYM TELETURNIEJU." + "<br>";
    desc.style.fontSize = '12px';
    desc.style.marginLeft = '-172px';
});
man.addEventListener('dblclick', () => {
    desc.innerHTML = "Filip Porzucek <br> Wiktor Maliszewski <br> Ryszard Redelbach";
    desc.style.fontSize = '18px';
    desc.style.marginLeft = '-140px';
});
const winGame = new Audio("winGame.mp3");
const vol = new Audio("wait.mp3");
const lastQuestion = new Audio('lastQuestion.mp3');
play.addEventListener('click', () => {
    setTimeout(() => {
        man.style.display = 'none';
        writing.style.display = 'none';
        dymek.style.display = 'none';
        desc.style.display = 'none';
        trapeze.style.display = 'none';
        trapeze2.style.display = 'none';
        play.style.display = 'none';
        body.style.backgroundColor = 'black';
        line.style.display = 'block';
        ;
        level12.style.color = 'yellow';
        logo.style.display = 'block';
        lastQuestion.play();
        test.style.display = 'block';
        answers.style.display = 'inline-block';
        levelsArray.forEach(level => {
            level.style.display = 'block';
        });
        chance1.style.display = 'block';
        chance2.style.display = 'block';
        chance3.style.display = 'block';
    }, 1000);
});
const questions = [
    {
        question: "Które miasto jest stolicą Francji ?",
        options: ["Paryż", "Londyn", "Berlin", "Rzym"],
        correctAnswer: "Paryż"
    },
    {
        question: "Kto napisał Romeo i Julię?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Która planeta jest największa ? ",
        options: ["Jowisz", "Mars", "Ziemia", "Saturn"],
        correctAnswer: "Jowisz"
    },
    {
        question: "Który pierwiastek chemiczny ma symbol 'O'?",
        options: ["Węgiel", "Tlen", "Wodór", "Azot"],
        correctAnswer: "Tlen"
    }, {
        question: "Kto wynalazł żarówkę?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
        correctAnswer: "Thomas Edison"
    },
    {
        question: "Jak nazywa się najmniejsza jednostka życia?",
        options: ["Komórka", "Molekuła", "Atom", "Organ"],
        correctAnswer: "Komórka"
    },
    {
        question: "Kto jest autorem obrazu 'Gwiezdna Noc'?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "W którym roku człowiek po raz pierwszy wylądował na Księżycu?",
        options: ["1965", "1969", "1972", "1975"],
        correctAnswer: "1969"
    },
    {
        question: "Kto był pierwszym prezydentem Stanów Zjednoczonych?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington"
    },
    {
        question: "Jak nazywa się największy kontynent na Ziemi?",
        options: ["Afryka", "Azja", "Europa", "Ameryka Północna"],
        correctAnswer: "Azja"
    },
    {
        question: "Jakie jest oficjalne język w Brazylii?",
        options: ["Hiszpański", "Francuski", "Portugalski", "Włoski"],
        correctAnswer: "Portugalski"
    },
    {
        question: "Które miasto jest stolicą Chin? ",
        options: ["Tokio", "Pekin", "Warszawa", "Shibuya"],
        correctAnswer: "Pekin"
    },
    {
        question: "Kiedy była bitwa pod Grunwaldem?",
        options: ["1410", "1510", "969", "1214"],
        correctAnswer: "1410"
    },
    {
        question: "Trzecia planeta od słońca to? ",
        options: ["Merkury", "Wenus", "Mars", "Ziemia"],
        correctAnswer: "Ziemia"
    },
    {
        question: "W której z tych drużyn grał Marcin Gortat? ",
        options: ["Houston Rockets", "Los Angeles Lakers", "Chicago Bulls", "Orlando Magic"],
        correctAnswer: "Orlando Magic"
    },
    {
        question: "Ile kilometrów ma Maraton?",
        options: ["42 km", "22 km", "32 km", "52 km"],
        correctAnswer: "42 km"
    },
    {
        question: "IT to skrót od?",
        options: ["Information Technology", "Inteligentny Toster", "Information Telecomunication", "Indominable Technochracy"],
        correctAnswer: "Information Technology"
    },
    {
        question: "Na bazie Terra Vision powstało?",
        options: ["Spotify", "Google Maps", "Open Office", "Sound Cloud"],
        correctAnswer: "Google Maps"
    },
    {
        question: "Które morze jest najbardziej zasolone?",
        options: ["Morze Bałtyckie", "Morze Śródziemne", "Morze Martwe", "Morze Czarne"],
        correctAnswer: "Morze Martwe"
    },
    {
        question: "Jak nazywa się nauka o roślinach?",
        options: ["Zoologia", "Botanika", "Geologia", "Ekologia"],
        correctAnswer: "Botanika"
    },
    {
        question: "W jakich latach Obama był prezydentem Stanów Zjednocznych?",
        options: ["2009-2017", "2017-2021", "2001-2008", "2012-2018"],
        correctAnswer: "2009-2017"
    },
    {
        question: "Kiedy rozpoczęła się II Wojna Światowa?",
        options: ["1814", "1940", "1938", "1939"],
        correctAnswer: "1939"
    },
    {
        question: "Pierawstek Sodu to?",
        options: ["Na", "Nw", "S", "Se"],
        correctAnswer: "Na"
    },
    {
        question: "Kto napisał W pustyni i w puszczy?",
        options: ["Henryk Sienkiewicz", "Juliusz Słowacki", "J.K Rowling", "Henryk Siemienkiewicz"],
        correctAnswer: "Henryk Sienkiewicz"
    },
    {
        question: "Jaka jest liczba ludności w Polsce?",
        options: ["16 milionów", "48 milionów", "4 miliony", "38 milionów"],
        correctAnswer: "38 milionów"
    },
    {
        question: "Z czego powstają rodzynki?",
        options: ["Z figowca", "Z Rodzynkowca", "Z winogron", "Z Moreli"],
        correctAnswer: "Z winogron"
    },
    {
        question: "W jakim języku mówi się w Australii?",
        options: ["Australijski", "Angielski", "Austriacki", "Niemiecki"],
        correctAnswer: "Angielski"
    },
    {
        question: "Gdzie leży Madagaskar?",
        options: ["u wybrzeży Afryki", "w Ameryce Południowej", "w Nowym Jorku", "obok Turcji"],
        correctAnswer: "u wybrzeży Afryki"
    },
    {
        question: "W jakiej części Włoch leży Turyn?",
        options: ["Toskania", "Piemont", "Lombardia", "Sycylia"],
        correctAnswer: "Piemont"
    },
    {
        question: "Gdy wymieszamy kolor czerwony i niebieski?",
        options: ["fioletowy", "pomarańczowy", "granatowy", "miętowy"],
        correctAnswer: "fioletowy"
    },
    {
        question: "Gdzie w ciele człowieka znajdują się skrzela?",
        options: ["w oskrzelach", "w płucach", "w sercu", "człowiek nie posiada skrzeli"],
        correctAnswer: "człowiek nie posiada skrzeli"
    },
    {
        question: "Czym jest szyszynka?",
        options: ["Gruczołem", "Batonem", "Częścią szyszki", "Organ rozrodczy"],
        correctAnswer: "Gruczołem"
    },
    {
        question: "Ile przedsionków ma serce?",
        options: ["3", "5", "6", "2"],
        correctAnswer: "2"
    },
    {
        question: "Którą literą alfabetu jest Ę?",
        options: ["8", "7", "6", "12"],
        correctAnswer: "8"
    },
    {
        question: "Ile ma końców ma 9 i pół kija?",
        options: ["18", "19", "20", "9.5"],
        correctAnswer: "20"
    },
    {
        question: "Skąd pochodzi Elon Musk?",
        options: ["RPA", "USA", "Francja", "Anglia"],
        correctAnswer: "RPA"
    },
    {
        question: "Kto ma najwięcej obserwujących ze starej ekipy Friza oprócz Wersow?",
        options: ["Fusialka", "Paulina", "Marta", "Marcysia"],
        correctAnswer: "Marcysia"
    },
    {
        question: "Tradycyjne gruzińskie chinkali wypełnione są?",
        options: ["kozim serem", "pieczarkami", "mięsem", "owczym serem"],
        correctAnswer: "mięsem"
    },
    {
        question: "Religią dominującą w Japonii jest Buddyzm oraz?",
        options: ["Szinto", "Chrześcijaństwo", "Islam", "Protestantyzm"],
        correctAnswer: "Szinto"
    },
    {
        question: "Jaki jest dominujący odłam Islamu w Iranie?",
        options: ["Szyici", "Sunnici", "Charydżyci", "Żydzi"],
        correctAnswer: "Szyici"
    },
    {
        question: "Jak nazywał sie pierwszy iphone?",
        options: ["Iphone 2G", "Iphone 2", "Iphone", "Iphone 2S"],
        correctAnswer: "Iphone 2G"
    },
    {
        question: "Jaki ser jest niezbędnym składnikiem Tiramisu?",
        options: ["Mascarpone", "Ricotta", "Gorgonzola", "Mozarella"],
        correctAnswer: "Mascarpone"
    },
    {
        question: "Na banknocie 20zł widnieje?",
        options: ["Bolesław I Chrobry", "Królowa Jadwiga", "Jan III Sobieski", "Krzysztof Szczodry"],
        correctAnswer: "Bolesław I Chrobry"
    },
    {
        question: "Główny składnik piwa to?",
        options: ["Chmiel", "Woda", "Słód", "Cukier"],
        correctAnswer: "Woda"
    },
];
let clickedAnswer;
const usedQuestion = [];
let currentLevel = 0;
function generateQuestion() {
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomQuestionIndex];
    // Sprawdź, czy tekst pytania jest już użyty
    const isUsed = usedQuestion.some(question => question.question === randomQuestion.question);
    if (!isUsed) {
        usedQuestion.push(randomQuestion);
        ;
        return randomQuestion;
    }
    else {
        return generateQuestion();
    }
}
function generate() {
    currentLevel++;
    const soundOfChance = new Audio("bam bam.mp3");
    let numberOfChance = 0;
    const randomQuestion = generateQuestion();
    const questionElement = document.createElement('div');
    questionElement.textContent = randomQuestion.question;
    const test = document.querySelector('#test');
    test.appendChild(questionElement);
    const randomIndexes = Array.from({ length: randomQuestion.options.length }, (_, i) => i);
    randomIndexes.sort(() => Math.random() - 0.5);
    const randomAnswers = randomIndexes.map(index => randomQuestion.options[index]);
    const answerElements = [];
    function generateAnswer(randomAnswers) {
        const usedAnswers = randomAnswers.slice(0, 4);
        for (let i = 0; i < usedAnswers.length; i++) {
            const answerElement = document.createElement('div');
            answerElement.textContent = usedAnswers[i];
            answerElements.push(answerElement);
            answerElement.classList.add('answer');
            answerElement.addEventListener('click', () => {
                clickedAnswer = answerElement.textContent;
                checkAnswer();
            });
        }
        const answers = document.querySelector('.answers');
        answerElements.forEach(answerElement => {
            answerElement.style.display = 'inline-block';
            answerElement.style.margin = '8px';
            answerElement.style.fontSize = '30px';
            answers.appendChild(answerElement);
        });
    }
    generateAnswer(randomAnswers);
    const corrects = questions.map(question => question.correctAnswer);
    let IncorrectChanged = false;
    chance1.addEventListener('click', () => {
        numberOfChance = 1;
        soundOfChance.play();
        if (numberOfChance === 1) {
            chance2.disabled = true;
            chance3.disabled = true;
        }
        man2.style.display = 'block';
        cloud2.style.display = 'block';
        desc2.style.display = 'block';
        skip.style.display = 'block';
        skip.addEventListener('click', () => {
            man2.style.display = 'none';
            cloud2.style.display = 'none';
            desc2.style.display = 'none';
            skip.style.display = 'none';
            chance1.style.display = 'none';
            answers.style.opacity = '100%';
        });
        if (man2.style.display = 'block') {
            answers.style.opacity = '0%';
        }
        desc2.innerHTML = 'Właśnie użyłeś szansy 50:50. dwie odpowiedzi stały się zielone, jedna z nich jest poprawna.';
        if (numberOfChance === 1) {
            numberOfChance = 0;
        }
        ;
        answerElements.forEach(answerElement => {
            if (corrects.includes(answerElement.textContent)) {
                answerElement.style.color = 'green';
            }
            else if (!IncorrectChanged) {
                answerElement.style.color = 'green';
                IncorrectChanged = true;
            }
        });
    });
    numberOfChance = 0;
    if (numberOfChance === 0) {
        chance2.disabled = false;
        chance3.disabled = false;
    }
    chance2.addEventListener('click', () => {
        numberOfChance = 2;
        soundOfChance.play();
        if (numberOfChance === 2) {
            chance1.disabled = true;
            chance3.disabled = true;
        }
        man2.style.display = 'block';
        cloud2.style.display = 'block';
        desc2.style.display = 'block';
        skip2.style.display = 'block';
        skip2.addEventListener('click', () => {
            man2.style.display = 'none';
            cloud2.style.display = 'none';
            desc2.style.display = 'none';
            skip2.style.display = 'none';
            chance2.style.display = 'none';
            answers.style.opacity = '100%';
        });
        if (man2.style.display = 'block') {
            answers.style.opacity = '0%';
        }
        if (numberOfChance === 2) {
            numberOfChance = 0;
        }
        ;
        desc2.innerHTML = 'Właśnie użyłeś szansy bomba. jedna odpowiedz stała się czerwona, jest ona niepoprawna.';
        answerElements.forEach(answerElement => {
            if (!corrects.includes(answerElement.textContent) && !IncorrectChanged) {
                answerElement.style.color = 'red';
                IncorrectChanged = true;
            }
        });
    });
    numberOfChance = 0;
    if (numberOfChance === 2) {
        chance2.disabled = false;
        chance3.disabled = false;
    }
    chance3.addEventListener('click', () => {
        numberOfChance = 3;
        soundOfChance.play();
        if (numberOfChance === 3) {
            chance2.disabled = true;
            chance1.disabled = true;
        }
        man2.style.display = 'block';
        cloud2.style.display = 'block';
        desc2.style.display = 'block';
        skip3.style.display = 'block';
        const chance3Question = generateQuestion();
        questionElement.textContent = chance3Question.question;
        answerElements.length = 0;
        answers.textContent = '';
        const randomAnswers2 = randomIndexes.map(index => chance3Question.options[index]);
        generateAnswer(randomAnswers2);
        skip3.addEventListener('click', () => {
            man2.style.display = 'none';
            cloud2.style.display = 'none';
            desc2.style.display = 'none';
            skip3.style.display = 'none';
            chance3.style.display = 'none';
            answers.style.opacity = '100%';
        });
        if (man2.style.display = 'block') {
            answers.style.opacity = '0%';
        }
        if (numberOfChance === 3) {
            numberOfChance = 0;
        }
        desc2.innerHTML = 'Właśnie użyłeś szansy wylosowania ponownie pytania. Pytanie się zmieniło.';
    });
    if (numberOfChance === 0) {
        chance2.disabled = false;
        chance1.disabled = false;
    }
    function checkAnswer() {
        desc2.innerHTML = 'Czy jesteś piewien swojej odpowiedzi?' + '<br>' + '<div class="confirm">' + 'TAK' + '</div>' + '<div class="notConfirm">' + 'NIE' + '</div>';
        const confirm = document.querySelector('.confirm');
        const notConfirm = document.querySelector('.notConfirm');
        man2.style.display = 'block';
        cloud2.style.display = 'block';
        desc2.style.display = 'block';
        const corrects = questions.map(question => question.correctAnswer);
        confirm.addEventListener('click', () => {
            const correctVol = new Audio('correct.mp3');
            vol.play();
            desc2.innerHTML = 'Sprawdzamy odpowiedz...';
            setTimeout(() => {
                if (corrects.includes(clickedAnswer)) {
                    correctVol.play();
                    desc2.innerHTML = 'Brawo! To prawidłowa odpowiedź przechodzisz do kolejnego etapu';
                    setTimeout(() => {
                        test.innerHTML = '';
                        answers.innerHTML = '';
                        man2.style.display = 'none';
                        cloud2.style.display = 'none';
                        desc2.style.display = 'none';
                        generate();
                        if (currentLevel === 2) {
                            level12.style.color = 'white';
                            level11.style.color = 'yellow';
                        }
                        if (currentLevel === 3) {
                            level11.style.color = 'white';
                            level10.style.color = 'yellow';
                        }
                        if (currentLevel === 4) {
                            level10.style.color = 'white';
                            level9.style.color = 'yellow';
                        }
                        if (currentLevel === 5) {
                            level9.style.color = 'white';
                            level8.style.color = 'yellow';
                        }
                        if (currentLevel === 6) {
                            level8.style.color = 'white';
                            level7.style.color = 'yellow';
                        }
                        if (currentLevel === 7) {
                            level7.style.color = 'white';
                            level6.style.color = 'yellow';
                        }
                        if (currentLevel === 8) {
                            level6.style.color = 'white';
                            level5.style.color = 'yellow';
                        }
                        if (currentLevel === 9) {
                            level5.style.color = 'white';
                            level4.style.color = 'yellow';
                        }
                        if (currentLevel === 10) {
                            level4.style.color = 'white';
                            level3.style.color = 'yellow';
                        }
                        if (currentLevel === 11) {
                            level3.style.color = 'white';
                            level2.style.color = 'yellow';
                        }
                        if (currentLevel === 12) {
                            lastQuestion.play();
                            level2.style.color = 'white';
                            level1.style.color = 'yellow';
                        }
                        if (currentLevel === 13) {
                            win();
                        }
                    }, 3000);
                }
                else {
                    man2.style.display = 'block';
                    cloud2.style.display = 'block';
                    desc2.style.display = 'block';
                    desc2.innerHTML = 'Niestety ta odpowiedź jest błędna! ' + '<br>' + 'Odpadasz z programu';
                    const wrongAnswer = new Audio('wrong-price-is-right.mp3');
                    wrongAnswer.play();
                    setTimeout(() => {
                        endOfGaame();
                        answerElements.forEach(answerElementStyle => {
                            answerElementStyle.style.color = 'white';
                        });
                    }, 4000);
                }
            }, 5000);
        });
        notConfirm.addEventListener('click', () => {
            man2.style.display = 'none';
            cloud2.style.display = 'none';
            desc2.style.display = 'none';
        });
    }
}
generate();
function endOfGaame() {
    man.style.display = 'none';
    writing.style.display = 'none';
    dymek.style.display = 'none';
    desc.style.display = 'none';
    trapeze.style.display = 'none';
    trapeze2.style.display = 'none';
    play.style.display = 'none';
    body.style.backgroundColor = 'none';
    line.style.display = 'none';
    ;
    level12.style.color = 'none';
    logo.style.display = 'none';
    test.style.display = 'none';
    answers.style.display = 'none';
    levelsArray.forEach(level => {
        level.style.display = 'none';
    });
    chance1.style.display = 'none';
    chance2.style.display = 'none';
    chance3.style.display = 'none';
    man2.style.display = 'block';
    cloud2.style.display = 'block';
    desc2.style.display = 'block';
    again.style.display = 'block';
    desc2.innerHTML = 'TO BYŁA ŚWIETNA GRA! CHCESZ ZAGRAĆ PONOWNIE?';
    again.addEventListener('click', () => {
        setTimeout(() => {
            man2.style.display = 'none';
            cloud2.style.display = 'none';
            desc2.style.display = 'none';
            again.style.display = 'none';
            lastQuestion.play();
            chance2.style.display = 'none';
            man.style.display = 'none';
            writing.style.display = 'none';
            dymek.style.display = 'none';
            desc.style.display = 'none';
            trapeze.style.display = 'none';
            trapeze2.style.display = 'none';
            play.style.display = 'none';
            body.style.backgroundColor = 'black';
            line.style.display = 'block';
            ;
            level12.style.color = 'yellow';
            logo.style.display = 'block';
            test.style.display = 'block';
            answers.style.display = 'inline-block';
            levelsArray.forEach(level => {
                level.style.display = 'block';
                level.style.color = 'white';
            });
            chance1.style.display = 'block';
            chance2.style.display = 'block';
            chance3.style.display = 'block';
            test.innerHTML = '';
            answers.innerHTML = '';
            currentLevel = 0;
            generate();
        }, 1000);
        currentLevel = 1;
        if (currentLevel === 1) {
            level1.style.color = 'white';
            level2.style.color = 'white';
            level3.style.color = 'white';
            level4.style.color = 'white';
            level5.style.color = 'white';
            level6.style.color = 'white';
            level7.style.color = 'white';
            level8.style.color = 'white';
            level9.style.color = 'white';
            level10.style.color = 'white';
            level11.style.color = 'white';
            level12.style.color = 'yellow';
        }
        if (currentLevel === 2) {
            level12.style.color = 'white';
            level11.style.color = 'yellow';
        }
        if (currentLevel === 3) {
            level11.style.color = 'white';
            level10.style.color = 'yellow';
        }
        if (currentLevel === 4) {
            level10.style.color = 'white';
            level9.style.color = 'yellow';
        }
        if (currentLevel === 5) {
            level9.style.color = 'white';
            level8.style.color = 'yellow';
        }
        if (currentLevel === 6) {
            level8.style.color = 'white';
            level7.style.color = 'yellow';
        }
        if (currentLevel === 7) {
            level7.style.color = 'white';
            level6.style.color = 'yellow';
        }
        if (currentLevel === 8) {
            level6.style.color = 'white';
            level5.style.color = 'yellow';
        }
        if (currentLevel === 9) {
            level5.style.color = 'white';
            level4.style.color = 'yellow';
        }
        if (currentLevel === 10) {
            level4.style.color = 'white';
            level3.style.color = 'yellow';
        }
        if (currentLevel === 11) {
            level3.style.color = 'white';
            level2.style.color = 'yellow';
        }
        if (currentLevel === 12) {
            level2.style.color = 'white';
            level1.style.color = 'yellow';
        }
    });
}
const cloud3 = document.querySelector('.cloud3');
const desc3 = document.querySelector('.desc3');
function win() {
    man.style.display = 'none';
    writing.style.display = 'none';
    dymek.style.display = 'none';
    desc.style.display = 'none';
    trapeze.style.display = 'none';
    trapeze2.style.display = 'none';
    play.style.display = 'none';
    body.style.backgroundColor = 'none';
    line.style.display = 'none';
    ;
    level12.style.color = 'none';
    logo.style.display = 'none';
    test.style.display = 'none';
    answers.style.display = 'none';
    levelsArray.forEach(level => {
        level.style.display = 'none';
    });
    chance1.style.display = 'none';
    chance2.style.display = 'none';
    chance3.style.display = 'none';
    man2.style.display = 'block';
    cloud3.style.display = 'block';
    desc3.style.display = 'block';
    winGame.play();
    desc3.innerHTML = 'Wooow!! twoja wiedza jest naprawde na wysokim poziomie.' + '<br>' + 'Musze przyznać że jestem pod wrażeniem.' + 'Wygrywasz MILION złotych.' + 'Nagrode wyślemy na twoje konto bankowe.';
}
