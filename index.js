/*  START 
GL comes to a house and knocks. No one answers. Should she go in to the house anywyay? 
 IF FIRST BOWL - too hot 
 IF SECOND BOWL - too cold
 IF THIRD BOWL - Just right! She ate it all up and felt tired (you know because food coma...) So she went to rest on chair and found three of them. 
 IF FIRST - too big! 
 IF SECOND - too big too..
 IF THIRD - just right. but the chair broke. THEN she went to the bedroom to find a bed instead. And there were three of them. 
 IF FIRST - too hard;
 IF SECOND - too soft;
 IF THIRD - just right, so she fell asleep.

WHILE she was asleep, the three bears came home.
Pappa bear growled, mamma bear growled, baby bear cried.
Pappa bear growled, mamma bear growled, baby bear cried.
Pappa bear growled, mamma bear growled, baby bear cried.

GL woke up and saw three bears. Should she scream? 
IF NO - she froze and the pappa bear ate her up. THE END 
IF YES - screamed HELP. Nobody's going to help her... duh  
Should she run out of there?
IF YES - she jumped and ran out of the room, ran down the stairs, opened the door and ran away into the forest. THE END
IF NO - pappa bear ate her up because nobody came to help her. THE END
END
*/

let noButton = document.querySelector('#no');
let yesButton = document.querySelector('#yes');
let maybeButton = document.querySelector('#maybe');
let Text = document.querySelector('#text');

let storyProcess = 0;

function changeTextYes() {
    if (storyProcess == 0) {
        Text.innerText = 'Just right! She ate it all up and felt tired (you know because food coma...So she went to rest on chair and found three of them.Which one should she try?';
        storyProcess = 1;
    } else if (storyProcess == 1) {
        Text.innerText = '"Ahhh, this porridge is just right," she said happily and she ate it all up. After she had eaten all the breakfasts, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Which one should she choose ?';
        storyProcess = 2;
    } else if (storyProcess == 2) {
        Text.innerText = '"Ahhh, this chair is just right," she sighed. But just as she settled down into the chair to rest, it broke into pieces!Goldilocks was very tired by this time, so she went to the bedroom to find a bed instead.And there were three of them.Which one should she choose ?';
        storyProcess = 3;
    } else if (storyProcess == 3) {
        Text.innerText = 'Just right, so Goldilocks fell asleep. While she was asleep, the three bears came home. "Someone has been eating my porridge," growled the Papa bear. "Someone has been eating my porridge," said the Mama bear. "Someone has been eating my porridge and they ate it all up!" cried the Baby bear."Someone has been sitting in my chair", growled the Papa bear. "Someone has been sitting in my chair," said the Mama bear."Someone has been sitting in my chair and they have broken it to pieces," cried the Baby bear. They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled, "Someone has been sleeping in my bed." "Someone has been sleeping in my bed, too" said the Mama bear. "Someone has been sleeping in my bed and she is still there!" exclaimed the Baby bear. Goldilocks woke up and saw three bears. What should she do?';
        storyProcess = 4;
    } else if (storyProcess == 4) {
        Text.innerText = 'Scream and run! Goldilocks screamed "Help!" Then she jumped and ran out of the room, ran down the stairs, opened the door and ran away into the forest.She never returned to the home of the three bears. THE END';
        storyProcess = 5;
    }
}




function changeTextNo() {
    if (storyProcess == 0) {
        Text.innerText = 'Too hot!';
        storyProcess = 1;
    } else if (storyProcess == 1) {
        Text.innerText = '"This chair is too big!" she exclaimed.';
        storyProcess = 2;
    } else if (storyProcess == 2) {
        Text.innerText = 'This bed is too hard';
        storyProcess = 3;
    } else if (storyProcess == 3) {
        Text.innerText = 'Scream! Goldilocks screamed "Help!" But nobody heard her, duh... So pappa bear ate her up. THE END';
    }
}



function changeTextMaybe() {
    if (storyProcess == 0) {
        Text.innerText = 'Too cold!';
        storyProcess = 1;
    } else if (storyProcess == 1) {
        Text.innerText = '"This chair is too big, too!" she whined.';
        storyProcess = 2;
    } else if (storyProcess == 2) {
        Text.innerText = 'This bed is too soft.'
        storyProcess = 3;
    } else if (storyProcess == 3) {
        Text.innerText = 'Freeze. Goldilocks froze and hoped for the best, but pappa bear ate her up. THE END'
    }
}


yesButton.addEventListener('click', () => {
    let yesButton = document.querySelector('#yes p').innerText;
    changeTextYes();
});

noButton.addEventListener('click', () => {
    changeTextNo();
});

maybeButton.addEventListener('click', () => {
    changeTextMaybe();
});