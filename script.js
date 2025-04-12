const commonWordsEasy = [
    "apple", "banana", "car", "dog", "elephant", "fish", "grape", "house", "ice", "jacket",
    "kite", "lion", "monkey", "notebook", "orange", "pencil", "queen", "rabbit", "sun", "table",
    "umbrella", "vase", "watch", "xylophone", "yogurt", "zebra", "bag", "bottle", "camera", "chair",
    "desk", "egg", "fan", "glove", "hat", "iron", "juice", "key", "lamp", "mirror",
    "nail", "oven", "phone", "quilt", "ring", "shoe", "tree", "uniform", "van", "window",
    "box", "clock", "drum", "ear", "flag", "gift", "hammer", "ink", "jam", "kettle",
    "ladder", "milk", "needle", "ocean", "pan", "quill", "rope", "soap", "toy", "utensil",
    "violin", "wallet", "x-ray", "yarn", "zipper", "bench", "cloud", "door", "engine", "forest",
    "glass", "hill", "island", "jungle", "kitchen", "leaf", "mountain", "net", "path", "queen",
    "road", "stone", "train", "village", "wall", "yard", "zoo", "bucket", "candle", "duck"
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

function refreshWordList() {
    words = getRandomWords(5,commonWordsEasy);
}
refreshWordList();
//
const questionElement = document.querySelector('.question');
const submitBtnElement = document.querySelector('.submit-btn');
const inputElement = document.querySelector('.input-box');
const statusElement = document.querySelector('.status');
const pointElement = document.querySelector('.point');
const resetBtnElement = document.querySelector('.reset-btn');

///
let wordIdx = 0;
async function renderQuestion(idx) {
    inputElement.value = '';
    questionElement.classList.add('loader');
    setTimeout(()=>{
        questionElement.classList.remove('loader');
        questionElement.innerHTML = hideLetters(words[idx]);
    },3000);
    

    
}
renderQuestion(0);

function hideLetters(word) {
    const chars = word.split("");
    const visibleIndices = new Set();
  
    // Always show at least one letter
    const mustShowIndex = Math.floor(Math.random() * chars.length);
    visibleIndices.add(mustShowIndex);
  
    // Randomly show or hide other letters
    const result = chars.map((char, i) => {
      if (visibleIndices.has(i) || Math.random() > 0.5) {
        visibleIndices.add(i); // track shown letters
        return char;
      } else {
        return "_";
      }
    });
  
    // If by some randomness only one letter was visible, force one more visible
    if (visibleIndices.size < 2 && chars.length > 1) {
      let otherIndex;
      do {
        otherIndex = Math.floor(Math.random() * chars.length);
      } while (visibleIndices.has(otherIndex));
      result[otherIndex] = chars[otherIndex];
    }
  
    return result.join(" ");
}


  
submitBtnElement.addEventListener('click', async()=>{
    

    if(inputElement.value !== '') {
        questionElement.innerHTML = '';
        if((inputElement.value).toLowerCase() === words[wordIdx]) {
            statusElement.innerHTML = `Congrats 🎉 You Guessed The Correct Word i.e. ${words[wordIdx]}`;
            statusElement.classList.add("correct");
            pointElement.innerHTML = `Point: ${points = points+1}`;
            setTimeout(()=>{
                statusElement.innerHTML = '';
                statusElement.classList.remove("correct");
            },2000)
            
        }else {
            statusElement.classList.add("incorrect");
            statusElement.innerHTML = `Incorrect! It was ${words[wordIdx]}`;
            setTimeout(()=>{
                statusElement.innerHTML = '';
                statusElement.classList.remove("incorrect");
            },2000)
        } 
        wordIdx++;
        if(wordIdx === 5) {
            refreshWordList();
            wordIdx = 0;
        }
       
        await renderQuestion(wordIdx);
    }
    
});

resetBtnElement.addEventListener('click',()=>{
    points = 0;
    pointElement.innerHTML = `Point: ${points}`;

})
