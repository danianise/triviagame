//whiteboarding

// accept input from user ticking radio field, check whether it matches 
//the correct answer
//win condition per question -> input matches correct answer

//set up question and answer pairs in different levels of difficulty

//manipulate the DOM so that the questions refresh,
//increasing difficulty for correct answers
//same difficulty for incorrect answers

//update score and level indicator for each new question

//end game logic -> go through x amount (21 perhaps?) of questions with score updated
//maybe end the game when the player has answered correctly at each level OR
//at certain amount of incorrect

//levels of difficulty: 
    //1. Dudley Dursley
    //2. Rubeus Hagrid
    //3. Ron Weasley
    //4. Harry Potter
    //5. Hermoine Granger
    //6. Prof. McGonagall
    //7. Prof. Dumbledore





//pseudocoding

//level 1: if correct && questionNum < 3 load same level 1
// if correct && questionNum >= 3 load next level 2
//if incorrect && questionNum < 7 load same level 1
//if incorrect && questionNum >= 7 load next level 2

//level 2: if correct && questionNum < 6 load same level 2
//if correct && questionNum >= 6 load next level 3
//if incorrect && questionNum < 14 load same level 2
//if incorrect && questionNum >= 14 load next level 3

//level 3: if correct && questionNum < 9 load same level 3
//if correct && questionNum >= 9 load next level 4
//if incorrect && questionNum < maximum nuber of questions (21?) load same level 3
//if incorrect && questionNum === maximum number of questions (21?) **end game**

//level 4 : if correct && questionNum < 12 load same level 4
//if correct && questionNum >= 12 load next level 5
//if incorrect && questionNum < maximum number of questions (21?) load same level 4
//if incorrect && questionNum === max **end game**

//level 5: if correct && questionNum < 15 load same level 5
//if correct && questionNum === 15 load next level 6
//if incorrect && questionNum < max load same level 5
//if incorrect && questionNum === max **end game**

//level 6: if correct && questionNum < 18 load same level 6
//if correct && questionNum >=18 load next level 7
//if incorrect && questionNum < max load same level 6
//if incorrect && questionNum === max **end game**

//level 7: if correct && questionNum < 21 load same level 7
//if incorrect && questionNum === 21 **end game**


//END GAME
//0-10% Muggle: Never fear, you can always re-read the series!
//11-30% First-Year Hogwarts Student! Keep up with your studies, you'll be a great wizard some day!
//31-50% Ready for your O.W.L.s! No doubt you will pass with all O's!
//51-60% Ready for your N.E.W.T.s! No doubt you will pass with all O's!
//61-70% A Hogwarts graduate! Well done! Dumbledore would be proud of how much you've learned.
//71-80% A Hogwart's professor! You could teach History of Magic if Professor Binns ever retires.
//81-90% The Minister for Magic! You are a leader in the Wizarding communty!
//91-100% An expert wizard! It's a good thing you're around to protect the Wizarding community from the threat of Dark Magic!

//0-20% Muggle
//21-40% First-year
//41-60% Graduate
//61-80% Professor
//81-100% Expert
