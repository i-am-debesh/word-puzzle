const wordRiddles = [
    { word: "compass", riddle: "I help you find direction, but I don’t have legs. What am I?" },
    { word: "telescope", riddle: "I bring distant stars closer, but I’m not a spaceship. What am I?" },
    { word: "bicycle", riddle: "I have two wheels and pedals, but I don’t go on my own. What am I?" },
    { word: "rocket", riddle: "I launch into space, but I don’t need wings. What am I?" },
    { word: "scissors", riddle: "I have two blades and I cut things, but I don’t have a mouth. What am I?" },
    { word: "umbrella", riddle: "I open up when it rains, but I don’t have a brain. What am I?" },
    { word: "calculator", riddle: "I help you count numbers, but I’m not a person. What am I?" },
    { word: "sailboat", riddle: "I glide on water, and the wind is my engine. What am I?" },
    { word: "snowflake", riddle: "I am unique, falling from the sky in winter. What am I?" },
    { word: "magnifying glass", riddle: "I help you see things bigger than they are. What am I?" },
    { word: "bridge", riddle: "I connect two places, but I’m not a road. What am I?" },
    { word: "fountain", riddle: "I have water, but I’m not a lake or river. What am I?" },
    { word: "anchor", riddle: "I keep ships in place, but I don’t sail. What am I?" },
    { word: "whistle", riddle: "I make a sound when you blow, but I’m not a horn. What am I?" },
    { word: "parachute", riddle: "I help you fall slowly, but I’m not a bird. What am I?" },
    { word: "firetruck", riddle: "I carry water to put out flames, but I’m not a firefighter. What am I?" },
    { word: "microscope", riddle: "I help you see tiny things, but I don’t make them bigger. What am I?" },
    { word: "trolley", riddle: "I run on tracks, carrying people around. What am I?" },
    { word: "skateboard", riddle: "I roll on four wheels, and I’m not a car. What am I?" },
    { word: "fishing rod", riddle: "I help you catch fish, but I’m not a net. What am I?" },
    { word: "helicopter", riddle: "I fly without wings and have a spinning blade. What am I?" },
    { word: "glasses", riddle: "I help you see clearer, but I don’t have eyes. What am I?" },
    { word: "keyboard", riddle: "I have keys but no locks, and I help you type. What am I?" },
    { word: "jigsaw", riddle: "I’m a puzzle, piece by piece, I come together. What am I?" },
    { word: "scooter", riddle: "I have two wheels and you push me with your feet. What am I?" },
    { word: "wrench", riddle: "I help tighten or loosen things, but I don’t turn by myself. What am I?" },
    { word: "flashlight", riddle: "I light the way in the dark, but I’m not the sun. What am I?" },
    { word: "binoculars", riddle: "I help you see far away things, but I’m not a telescope. What am I?" },
    { word: "sunflower", riddle: "I turn to the sun, but I’m not alive. What am I?" },
    { word: "drone", riddle: "I fly without a pilot, but I’m not a bird. What am I?" },
    { word: "thermometer", riddle: "I measure temperature, but I don’t feel heat. What am I?" },
    { word: "waterfall", riddle: "I’m made of water, and I fall from great heights. What am I?" },
    { word: "sled", riddle: "I glide on snow, but I don’t have wheels. What am I?" },
    { word: "telescope", riddle: "I help you see stars far away, but I’m not a spaceship. What am I?" },
    { word: "furnace", riddle: "I heat up your home, but I’m not a fire. What am I?" },
    { word: "magnets", riddle: "I attract things without touching them. What am I?" },
    { word: "scaffolding", riddle: "I help you build tall things, but I’m not a crane. What am I?" },
    { word: "quicksand", riddle: "I suck things in, but I’m not a vacuum. What am I?" },
    { word: "sundial", riddle: "I tell time using the sun, but I don’t have any numbers. What am I?" },
    { word: "apple", riddle: "I’m a red or green fruit, and keeping me a day might keep the doctor away. What am I?" },
    { word: "banana", riddle: "I’m yellow, curved, and monkeys love me. What am I?" },
    { word: "car", riddle: "I have four wheels and take you places. What am I?" },
    { word: "dog", riddle: "I bark and wag my tail, man’s best friend without fail. What am I?" },
    { word: "elephant", riddle: "I’m the largest land animal with a long trunk. What am I?" },
    { word: "fish", riddle: "I live in water and have fins but no feet. What am I?" },
    { word: "grape", riddle: "I grow in bunches and can be made into wine. What am I?" },
    { word: "house", riddle: "People live inside me with rooms and a roof. What am I?" },
    { word: "ice", riddle: "I’m frozen water, cold and slippery. What am I?" },
    { word: "jacket", riddle: "You wear me when it's cold to stay warm. What am I?" },
    { word: "kite", riddle: "I fly high in the sky with a string. What am I?" },
    { word: "lion", riddle: "I’m the king of the jungle with a mighty roar. What am I?" },
    { word: "monkey", riddle: "I swing from trees and love bananas. What am I?" },
    { word: "notebook", riddle: "You write or draw inside me, page after page. What am I?" },
    { word: "orange", riddle: "I’m a fruit and also a color. What am I?" },
    { word: "pencil", riddle: "I write and need sharpening when I get dull. What am I?" },
    { word: "queen", riddle: "I wear a crown and rule a kingdom. What am I?" },
    { word: "rabbit", riddle: "I hop around and love carrots. What am I?" },
    { word: "sun", riddle: "I rise in the east and give light and heat. What am I?" },
    { word: "table", riddle: "I have four legs but I don’t walk. What am I?" },
    { word: "umbrella", riddle: "I protect you from rain when you open me. What am I?" },
    { word: "vase", riddle: "I hold flowers and sit on tables. What am I?" },
    { word: "watch", riddle: "I tell time and sit on your wrist. What am I?" },
    { word: "xylophone", riddle: "I make music when hit with sticks. What am I?" },
    { word: "yogurt", riddle: "I’m made from milk and often eaten with fruit. What am I?" },
    { word: "zebra", riddle: "I have black and white stripes and look like a horse. What am I?" },
    { word: "bag", riddle: "I carry your things and hang from your shoulder. What am I?" },
    { word: "bottle", riddle: "I hold liquids and often come with a cap. What am I?" },
    { word: "camera", riddle: "I capture moments in pictures. What am I?" },
    { word: "chair", riddle: "You sit on me, and I have four legs. What am I?" },
    { word: "desk", riddle: "You work or study on me. What am I?" },
    { word: "egg", riddle: "I’m fragile, oval, and breakfast-ready. What am I?" },
    { word: "fan", riddle: "I blow air and help you cool down. What am I?" },
    { word: "glove", riddle: "I keep your hands warm or safe. What am I?" },
    { word: "hat", riddle: "I go on your head to block the sun or cold. What am I?" },
    { word: "iron", riddle: "I smooth your clothes using heat. What am I?" },
    { word: "juice", riddle: "I’m a fruity drink, sweet and refreshing. What am I?" },
    { word: "key", riddle: "I open doors but I’m not your hand. What am I?" },
    { word: "lamp", riddle: "I light up your room at night. What am I?" },
    { word: "mirror", riddle: "I reflect your face when you look at me. What am I?" },
    { word: "nail", riddle: "I’m small and sharp, used with a hammer. What am I?" },
    { word: "oven", riddle: "I cook food using heat. What am I?" },
    { word: "phone", riddle: "You call or text people with me. What am I?" },
    { word: "quilt", riddle: "I keep you warm when you sleep. What am I?" },
    { word: "ring", riddle: "I go on your finger and can be a symbol of love. What am I?" },
    { word: "shoe", riddle: "I protect your feet when you walk. What am I?" },
    { word: "tree", riddle: "I grow tall, have leaves, and give shade. What am I?" },
    { word: "uniform", riddle: "I’m worn by workers or students to show identity. What am I?" },
    { word: "van", riddle: "I’m bigger than a car and used for carrying people or goods. What am I?" },
    { word: "window", riddle: "You look through me but I’m not a door. What am I?" },
    { word: "box", riddle: "I have sides and can store your stuff. What am I?" },
    { word: "clock", riddle: "I hang on a wall or sit on a table to show time. What am I?" },
    { word: "drum", riddle: "I make sound when you hit me with sticks. What am I?" },
    { word: "ear", riddle: "I help you hear sounds. What am I?" },
    { word: "flag", riddle: "I wave in the wind and represent a country. What am I?" },
    { word: "gift", riddle: "I’m given on birthdays or special days. What am I?" },
    { word: "hammer", riddle: "I hit nails into wood. What am I?" },
    { word: "ink", riddle: "I flow in pens to help you write. What am I?" },
    { word: "jam", riddle: "I’m sweet and spread on bread. What am I?" },
    { word: "kettle", riddle: "I boil water for your tea. What am I?" },
    { word: "ladder", riddle: "You climb me to reach high places. What am I?" },
    { word: "milk", riddle: "I’m white and come from cows. What am I?" },
    { word: "needle", riddle: "I’m sharp and used in sewing. What am I?" },
    { word: "ocean", riddle: "I’m huge, salty, and full of waves. What am I?" },
    { word: "pan", riddle: "You cook food in me on the stove. What am I?" },
    { word: "quill", riddle: "I was once a feather pen. What am I?" },
    { word: "rope", riddle: "I’m strong, long, and used to tie things. What am I?" },
    { word: "soap", riddle: "I clean your hands and body. What am I?" },
    { word: "toy", riddle: "Kids play with me for fun. What am I?" },
    { word: "utensil", riddle: "I’m used to eat or cook, like a spoon or spatula. What am I?" },
    { word: "violin", riddle: "I have strings and make sweet music. What am I?" },
    { word: "wallet", riddle: "I hold your money and cards. What am I?" },
    { word: "x-ray", riddle: "I see inside your body without a cut. What am I?" },
    { word: "yarn", riddle: "I’m a ball of thread, great for knitting. What am I?" },
    { word: "zipper", riddle: "I open and close clothes with a slide. What am I?" },
    { word: "bench", riddle: "I sit in parks and let people rest. What am I?" },
    { word: "cloud", riddle: "I float in the sky and bring rain. What am I?" },
    { word: "door", riddle: "I open and close to let you in or out. What am I?" },
    { word: "engine", riddle: "I power your car to move forward. What am I?" },
    { word: "forest", riddle: "I’m full of trees and wild animals. What am I?" },
    { word: "glass", riddle: "You drink from me or see through me in windows. What am I?" },
    { word: "hill", riddle: "I’m smaller than a mountain but still tall. What am I?" },
    { word: "island", riddle: "I’m land surrounded by water. What am I?" },
    { word: "jungle", riddle: "I’m wild, dense, and full of animals. What am I?" },
    { word: "kitchen", riddle: "You cook food inside me. What am I?" },
    { word: "leaf", riddle: "I grow on trees and change colors in fall. What am I?" },
    { word: "mountain", riddle: "I’m tall, rocky, and hard to climb. What am I?" },
    { word: "net", riddle: "I catch fish or help in games like volleyball. What am I?" },
    { word: "path", riddle: "I’m a narrow road for walking or biking. What am I?" },
    { word: "road", riddle: "Cars drive on me every day. What am I?" },
    { word: "stone", riddle: "I’m small and hard, found on the ground. What am I?" },
    { word: "train", riddle: "I run on tracks and carry people far. What am I?" },
    { word: "village", riddle: "I’m smaller than a town, with few houses. What am I?" },
    { word: "wall", riddle: "I separate rooms and hold pictures. What am I?" },
    { word: "yard", riddle: "I’m a grassy space outside your house. What am I?" },
    { word: "zoo", riddle: "You visit me to see animals. What am I?" },
    { word: "bucket", riddle: "I carry water or sand. What am I?" },
    { word: "candle", riddle: "I melt as I give you light. What am I?" },
    { word: "duck", riddle: "I quack and swim with webbed feet. What am I?" }
];
function getRandomInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function getRandomWords(n, list) {
    const words = [];
    const usedIndices = new Set();
  
    while (words.length < n && usedIndices.size < list.length) {
      const index = Math.floor(Math.random() * list.length);
      if (!usedIndices.has(index)) {
        words.push(list[index]);
        usedIndices.add(index);
      }
    }
  
    return words;
}
let words = [];
let points = 0;
let level = 1;

function refreshWordList() {
    words = getRandomWords(5,wordRiddles);
}
refreshWordList();
//
const questionField = document.querySelector('.question-field');
const questionElement = document.querySelector('.question');
const submitBtnElement = document.querySelector('.submit-btn');
const inputElement = document.querySelector('.input-box');
const statusElement = document.querySelector('.status');
const pointElement = document.querySelector('.point');
const resetBtnElement = document.querySelector('.reset-btn');
const levelElement = document.querySelector('.q-no');
const qLoader = document.getElementById('qloader');
const answerField = document.querySelector('.answer-field');
const resultField = document.querySelector('.result-field');

questionElement.innerHTML = `<button class='start-btn' onclick="startGame()">Start Game</button>`;

///

let wordIdx = 0;
async function renderQuestion(idx) {
    inputElement.value = '';
    questionElement.classList.add('loader');
    qLoader.style.minWidth = '5px';
    qLoader.style.minHeight = '3rem';
    setTimeout(()=>{
        questionElement.classList.remove('loader');
        qLoader.style.minWidth = '100%';
        levelElement.innerHTML = `Riddle: ${wordIdx+1} of 5`;
        questionElement.innerHTML = `${words[idx].riddle}`;
    },2000);
    

    
}
//renderQuestion(0);
const levelBar = document.querySelector('.round');
levelBar.classList.add('vanish');
answerField.classList.add('vanish');
resultField.classList.add('vanish');
function startGame() {
    levelBar.classList.remove('vanish');
    answerField.classList.remove('vanish');
    resultField.classList.remove('vanish');
    qLoader.innerHTML = '';
    renderQuestion(0);
}

function getHighScore() {
    if(localStorage.getItem('highScore')) {
        return localStorage.getItem('highScore');
    }
    localStorage.clear();
    return 0;
}
pointElement.innerHTML = `Point: ${points = points}/5 | Your High Score: ${getHighScore()}`
function setHighScore(score) {
    localStorage.setItem('highScore',score);
}


let correct = 0;
let incorrect = 0;
submitBtnElement.addEventListener('click', async()=>{
    

    if(inputElement.value !== '') {
        questionElement.innerHTML = '';
        if((inputElement.value).toLowerCase() === words[wordIdx].word) {
            statusElement.innerHTML = `Congrats 🎉 You Guessed The Correct Word i.e. ${words[wordIdx].word}`;
            correct = correct+1;
            statusElement.classList.add("correct");
            pointElement.innerHTML = `Point: ${points = points+1}/5 | Your High Score: ${getHighScore()}`;
            setTimeout(()=>{
                statusElement.innerHTML = '';
                statusElement.classList.remove("correct");
            },2000)
            
        }else {
            statusElement.classList.add("incorrect");
            statusElement.innerHTML = `Incorrect! It was ${words[wordIdx].word}`;
            incorrect = incorrect+1;
            pointElement.innerHTML = `Point: ${points = points}/5 | Your High Score: ${getHighScore()}`
            setTimeout(()=>{
                statusElement.innerHTML = '';
                statusElement.classList.remove("incorrect");
            },2000)
        } 
        wordIdx++;
        if(wordIdx === 5) {
            levelElement.innerHTML = `Level-${level}`;
            points>getHighScore()?setHighScore(points):setHighScore(getHighScore());
            showPopup(correct,incorrect,5);
            setTimeout(()=>{
            },5000);
            refreshWordList();
            wordIdx = 0;
        }
       
        await renderQuestion(wordIdx);
    }
    
});

resetBtnElement.addEventListener('click',()=>{
    points = 0;
    
    setHighScore(0);
    pointElement.innerHTML = `Point: ${points = 0}/5 | Your High Score: ${getHighScore()}`;
    alert('All scores are Deleted!');

});


////////////Overlay::::::::::
function createPopup() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    Object.assign(overlay.style, {
        display: "none",
        position: "fixed",
        top: "0", left: "0",
        width: "100vw", height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "998"
    });

    const popup = document.createElement("div");
    popup.id = "popup";
    Object.assign(popup.style, {
        display: "none",
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
        boxShadow: "box-shadow: rgba(255, 255, 255, 0.3) 2px 2px 20px;",
        zIndex: "999"
    });

    const heading = document.createElement("h2");
    heading.textContent = "🎉 Congratulations! 🎉";

    const summary = document.createElement("p");
    summary.id = "summary";

    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.style.marginTop = "1rem";
    playAgainBtn.style.padding = "0.5rem 1.5rem";
    playAgainBtn.addEventListener("click", () => location.reload());

    popup.appendChild(heading);
    popup.appendChild(summary);
    popup.appendChild(playAgainBtn);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
}

// Call this once on page load
createPopup();

function showPopup(correct, incorrect, total) {
    document.getElementById("summary").textContent =
        `You answered ${correct} correctly and ${incorrect} incorrectly out of ${total} questions.`;

    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

  
