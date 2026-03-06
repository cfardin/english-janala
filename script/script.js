
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
    .then(data => {
        removeActive();
        const clickColor = document.getElementById(`lesson-btn-${id}`);
        clickColor.classList.add('activeBtn');
        displayLevelWords(data.data);
    });
}

const removeActive = () =>{
    const blueBtn = document.querySelectorAll('.lessonBtn');
    blueBtn.forEach(btn => btn.classList.remove("activeBtn"));
};


const displayLevelWords = (words) =>{
    // console.log(words);
    // console.log(words.length);
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if(words.length == 0){
        // alert("no lessons added");
        wordContainer.innerHTML = `
            <div class="flex flex-col items-center text-center col-span-full space-y-3">
                <img src="assets/alert-error.png" alt="">
                <p class="font_bangla text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h1 class="font_bangla text-[35px] font-semibold">নেক্সট Lesson এ যান</h1> 
            </div>
        `;
        return;
    }

    words.forEach(word =>{
        // console.log(word);z
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-white rounded-[10px] p-[50px] h-[370px] shadow-sm flex flex-col justify-between">
            <div class="text-center">
                <h2 class="text-[30px] font-bold">${word.word ? word.word : "no word found"}</h2>
                <p class="text-[20px] font-medium">Meaning / Pronunciation</p>
                <h2 class="font-bangla text-[30px] font-semibold">"${word.meaning ? word.meaning : "no word found"} / ${word.pronunciation ? word.pronunciation : "No pronunciation found"}"</h2>
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

            <button id = "lesson-btn-${level.level_no}" onclick="loadLevelWord(${level.level_no})" class="btn btn-outline btn-primary lessonBtn">
                <i class="fa-brands fa-readme"></i>Level - ${level.level_no}
            </button>
        `
        levelContainer.appendChild(BtnDiv);
    }

}

loadLesson();
