let audioele= new Audio('file_example_MP3_1MG copy.mp3');
let masterPlay=document.getElementById('masterPlay');
let songind=0;
let rangebar=document.getElementById('rangebar');
let soundwave=document.getElementById('soundwave');
let mastersong=document.getElementById('mastersong');
let songs=Array.from(document.getElementsByClassName('songs'));
let songarr=[
    {songname:"Chandeliar", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Poker face", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Lily", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Despacito", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"River", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Break my heart", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Wolves", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"},
    {songname:"Hello", filePath:"file_example_MP3_1MG copy.mp3", coverPath:"albumimg.jpeg"}
]
 const makeAllplay=()=>{
         Array.from(document.getElementsByClassName('songplaybtn-3x')).forEach((element)=>{
            element.className='far fa-3x fa-play-circle';

         })
 }
 const togglebtn=(target)=>{
    if (audioele.src.includes(songarr[songind].filePath)){
        if(audioele.paused){
            audioele.play();
            target.className='far fa-3x fa-pause-circle';
             masterPlay.className='far fa-3x fa-pause-circle';
        }
        else{
            audioele.pause();
            target.className = 'far fa-3x fa-play-circle';
            masterPlay.className = 'far fa-3x fa-play-circle';
        }
    }
    else{
        audioele.src = songarr[songind].filePath;
        audioele.play();
        makeAllplay();
        target.className = 'far fa-3x fa-pause-circle';
        masterPlay.className = 'far fa-3x fa-pause-circle';
        mastersong.innerText = songarr[songind].songname;
    }
 }
document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByClassName('songplaybtn-3x')).forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log(e.target); 
            makeAllplay();
            songind=parseInt(e.target.id);
            currsongbtn=e.target;
            togglebtn(currsongbtn);
            
        });
    });
});
document.getElementById('next').addEventListener('click',()=>{
    if(songind>=songarr.length-1)songind=0;
    else{
        songind+=1;}
        audioele.currentTime=0;
        audioele.src=songarr[songind].filePath;
        audioele.play();
        makeAllplay();
        currsongbtn=document.getElementById('songind');
         currsongbtn='far fa-3x fa-pause-circle';
         masterPlay.className='far fa-3x fa-pause-circle';
    
    mastersong.innerText=songarr[songind].songname;
});
document.getElementById('prev').addEventListener('click',()=>{
    if(songind<=0)songind=7;
    else{
        
        songind-=1;
    }
    audioele.currentTime=0;
    audioele.src=songarr[songind].filePath;
    audioele.play();
    makeAllplay();
    currsongbtn=document.getElementById('songind');
     currsongbtn='far fa-3x fa-pause-circle';
     masterPlay.className='far fa-3x fa-pause-circle';

mastersong.innerText=songarr[songind].songname;
});
songs.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songarr[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songarr[i].songname;
});
masterPlay.addEventListener('click',()=>{
    if (audioele.paused || audioele.currentTime <= 0) {
        audioele.play();
        masterPlay.className = 'far fa-3x fa-pause-circle'; 
        soundwave.style.opacity=1;
        //masterPlay.classList.remove('far fa-3x fa-play-circle');
        //masterPlay.classList.add('far fa-3x fa-pause-circle');
    } else {
        audioele.pause();
        masterPlay.className = 'far fa-3x fa-play-circle';
        soundwave.style.opacity=0;  }
});
audioele.addEventListener('timeupdate',()=>{
    progress=parseInt((audioele.currentTime/audioele.duration)*100); 
    rangebar.value=progress;
});
rangebar.addEventListener('change',()=>{
      audioele.currentTime=(rangebar.value*audioele.duration)/100;
})
