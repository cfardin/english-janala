
const loadLesson = () =>{
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then(res => res.json())
    .then(data => displayLesson(data.data));
}


const loadLevelWord = (id) =>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWords(data.data));
}


const displayLevelWords = (words) =>{
    // console.log(words);
    // console.log(words.length);
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";


    words.forEach(word =>{
        // console.log(word);z
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-white rounded-[10px] p-[50px] h-[370px] shadow-sm flex flex-col justify-between">
            <div class="text-center">
                <h2 class="text-[30px] font-bold">${word.word}</h2>
                <p class="text-[20px] font-medium">Meaning / Pronunciation</p>
                <h2 class="font-bangla text-[30px] font-semibold">"${word.meaning} / ${word.pronunciation}"</h2>
            </div>
            <div class="flex justify-between">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-circle-exclamation"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.appendChild(card);
    });

}








// to display the all the levels 
const displayLesson = (lesson) => {
    // console.log(lesson);
    //1. get level-container and make it empty 
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";
    
    // 2. get into every lessons 
    for(let level of lesson){
        // 1. create element 
        const BtnDiv = document.createElement('div');
        BtnDiv.innerHTML = `

            <button onclick="loadLevelWord(${level.level_no})" class="btn btn-outline btn-primary">
                <i class="fa-brands fa-readme"></i>Level - ${level.level_no}
            </button>
        `
        levelContainer.appendChild(BtnDiv);
    }

}

loadLesson();
