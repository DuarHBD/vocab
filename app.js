const Vocab=document.getElementById("Vocab")
const ch1=document.getElementById('ch1');
const ch2=document.getElementById('ch2');
const score=document.getElementById('score')
const highscore=document.getElementById('HScore')
const time=document.getElementById('time')

let interval;
gameOver = false;
const progressBar=document.getElementById("progress-bar")

let currentQuestion; // เก็บคำถามปัจจุบัน
let shuffledOptions; // เก็บตัวเลือกคำตอบที่สลับแล้ว
function getstart(){
    if (gameOver) return;
    
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
     // สุ่มตำแหน่งของคำตอบ
     //ได้objมา1ค่า
    const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer];
    //=เลือกค่าท่ีถูกในarrของodj option
   
    shuffledOptions = [...currentQuestion.options];
    console.log('กอ่นสลับ',shuffledOptions)
    //=['เเรงงาน','ผลิตภัณ']
    const j = Math.floor(Math.random() * (2));
    //0
    [shuffledOptions[0], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[0]];
    //0                  1                            1                  0
    //ผลิต ,เเรงงาน] 
    //ซ้ายคือต่ำเเหน่งที่จะรับค่า
    // แสดงคำถามใหม่
    console.log('หลังสลับ',shuffledOptions)
    showQuestion();
}

// ฟังก์ชันแสดงคำถาม
function showQuestion() {
  if (gameOver) return;
   Vocab.innerText =  `${currentQuestion.word}`;
   ch1.innerText = shuffledOptions[0];
   //ผลิต
    ch2.innerText = shuffledOptions[1];
    //เเรงงาน
    
}

// ฟังก์ชันตรวจสอบคำตอบ
function check(selectedOption) {
    
    if (gameOver) return;
    // ตรวจสอบว่าคำตอบที่เลือกตรงกับคำตอบที่ถูกต้อง
    if (shuffledOptions[selectedOption] === currentQuestion.options[currentQuestion.correctAnswer]) {
        //'เเงรงาน===เเรงงาน'
       
        correct();
        curenttime+=2

    } else{
        Vocab.innerHTML=`<p class="wrong animate__animated animate__bounceIn"> Wrong!</p>`
    }

    // เปลี่ยนคำถามหลังจากตอบเสร็จ
    setTimeout(() => {
       getstart(); // สุ่มคำถามใหม่
    }, 300);
    
}
let intscore=parseInt(score)
intscore=0
let highScore=0
function correct(){
    console.log(intscore)
    intscore+=1
    console.log(intscore)
   
    score.innerText=intscore
    if (intscore > highScore) {
        highScore = intscore;  // อัปเดต high score
         // เก็บ high score ใหม่ลงใน localStorage
        highscore.innerText = `${highScore}`; // อัพเดตการแสดงผลของ high score ใน UI
    }
}
    


let curenttime=10;
function startTimer(){
   
    clearInterval(interval);//clearค่า
    interval=setInterval(Timer,1000)//startTimer ทำงานทุก10ms
    gameOver = false;
    intscore=0
    score.innerText=0
    getstart()
    
    

}

function Timer(){
    
    console.log("timer on")
    if (curenttime<0){
        clearInterval(interval);
        curenttime=11;
        gameOver = true;
        time.classList.replace( "bg-danger","bg-success");
        progressBar.classList.remove("animate__animated","animate__shakeX","animate__repeat-3")
        Vocab.innerText="Game Over!"
    }
    else{
        
        BGstate(curenttime);
    }
    curenttime--;
}
function BGstate(curenttime){
    time.innerText=`${curenttime}s`
    let percent=curenttime*10
    
      
       console.log(percent)
        time.style.width=`${percent}%`
        if (percent<=70 && percent >40 ) {
        time.classList.remove("bg-success", "bg-danger");
        time.classList.add("bg-warning")
        Shake(percent)}
        if(percent<=40){
            time.classList.remove("bg-warning", "bg-success");
            time.classList.add("bg-danger")
            Shake(percent)}
           
        if(percent>70){
                time.classList.remove("bg-warning", "bg-danger");
                time.classList.add('bg-success')
                Shake(percent)
        
            }
        }    
function Shake(percent){
    if(percent<=40){progressBar.classList.add("animate__animated","animate__shakeX","animate__repeat-3")}
    else{progressBar.classList.remove("animate__animated","animate__shakeX","animate__repeat-3")

    }
}



