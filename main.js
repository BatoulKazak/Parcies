const NEXT_BTN = document.querySelectorAll('.next');
const FIRST_RUCK = document.querySelector('#turn :nth-child(1)');
const SECOND_RUCK = document.querySelector('#turn :nth-child(2)');
const THIRD_RUCK = document.querySelector('#turn :nth-child(3)');
const FORTH_RUCK = document.querySelector('#turn :nth-child(4)');
const FIFTH_RUCK = document.querySelector('#turn :nth-child(5)');
const SIXTH_RUCK = document.querySelector('#turn :nth-child(6)');
const RUCKs = document.querySelectorAll('#turn div');

const PLAYER1_TURN = document.querySelector('#player1-turn');
const PLAYER2_TURN = document.querySelector('#player2-turn');

const PLAYER1_CURRENT_SCORES = document.querySelector('#player1-current-scores')
const PLAYER2_CURRENT_SCORES = document.querySelector('#player2-current-scores')

let turn = "player1";

const Array = [2, 3, 4, 6, 11, 12, 25];

const player1CurrentScores = 0;
const player2CurrentScores = 0;

NEXT_BTN.forEach(btn => {
    btn.addEventListener('click', () => {


        let randomIndex = Math.floor(Math.random() * Array.length);
        let luck = Array[randomIndex];


        switch (luck) {
            case 2: {
                FIRST_RUCK.className = 'first-side'
                SECOND_RUCK.className = 'first-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'first-side'
                SIXTH_RUCK.className = 'second-side'

                if (turn == "player1") {
                    player1CurrentScores += 2;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 2;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                turn == "player1" ? "player2" : "player1";
                if (turn == "player1") {
                    PLAYER1_TURN.innerText = "It's not your turn";
                    PLAYER2_TURN.innerText = "It's your turn";
                }
                break;
            }

            case 3: {
                FIRST_RUCK.className = 'second-side'
                SECOND_RUCK.className = 'first-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'first-side'
                SIXTH_RUCK.className = 'second-side'

                if (turn == "player1") {
                    player1CurrentScores += 3;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 3;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                turn == "player1" ? "player2" : "player1";
                if (turn == "player1") {
                    PLAYER1_TURN.innerText = "It's not your turn";
                    PLAYER2_TURN.innerText = "It's your turn";
                }
                break;
            }

            case 4: {
                FIRST_RUCK.className = 'first-side'
                SECOND_RUCK.className = 'first-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'first-side'
                SIXTH_RUCK.className = 'second-side'

                if (turn == "player1") {
                    player1CurrentScores += 4;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 4;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                turn == "player1" ? "player2" : "player1";
                if (turn == "player1") {
                    PLAYER1_TURN.innerText = "It's not your turn";
                    PLAYER2_TURN.innerText = "It's your turn";
                }
                break;
            }

            case 6: {
                FIRST_RUCK.className = 'first-side'
                SECOND_RUCK.className = 'first-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'first-side'
                FIFTH_RUCK.className = 'first-side'
                SIXTH_RUCK.className = 'first-side'

                if (turn == "player1") {
                    player1CurrentScores += 6;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 6;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                break;
            }

            case 11: {
                FIRST_RUCK.className = 'first-side'
                SECOND_RUCK.className = 'first-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'first-side'
                SIXTH_RUCK.className = 'first-side'

                if (turn == "player1") {
                    player1CurrentScores += 11;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 11;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                break;
            }

            case 12: {
                FIRST_RUCK.className = 'second-side'
                SECOND_RUCK.className = 'second-side'
                THIRD_RUCK.className = 'second-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'second-side'
                SIXTH_RUCK.className = 'second-side'

                if (turn == "player1") {
                    player1CurrentScores += 12;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 12;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                break;
            }

            case 25: {
                FIRST_RUCK.className = 'second-side'
                SECOND_RUCK.className = 'second-side'
                THIRD_RUCK.className = 'first-side'
                FORTH_RUCK.className = 'second-side'
                FIFTH_RUCK.className = 'second-side'
                SIXTH_RUCK.className = 'second-side'

                if (turn == "player1") {
                    player1CurrentScores += 25;
                    PLAYER1_CURRENT_SCORES = player1CurrentScores;
                }


                if (turn == "player2") {
                    player2CurrentScores += 25;
                    PLAYER2_CURRENT_SCORES = player2CurrentScores;
                }

                break;
            }
        }
    });
});
