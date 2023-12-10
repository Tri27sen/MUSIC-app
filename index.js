/* see the charactertics of nav bar */


console.log("welcome to music app");
let index = 1 ;
let audioelement = new Audio('0.mp3');
let master  = document.getElementById('master');
let progressbar = document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'))
let  mastersongname  = document.getElementById('mastersongname');
let songs = [
  {
    songname: "you-and-me" , filepath:"1.mp3" , coverpath:"https://i1.sndcdn.com/artworks-000090789132-5e3qzf-t500x500.jpg"
  },
  {
    songname: "crazy in love" , filepath:"2.mp3" , coverpath:"500x500.jpg"
  },
  {
    songname: "cigerrattes after sex" , filepath:"3.mp3" , coverpath:"https://i.ytimg.com/vi/QI8VrXkffcg/maxresdefault.jpg"
  },
  {
    songname: "d-darling" , filepath:"4.mp3" , coverpath:"https://i.scdn.co/image/ab67616d0000b2736f3d014b929c55256773dae1"
  },
  {
    songname: "m" , filepath:"5.mp3" , coverpath:"https://i.scdn.co/image/ab67616d0000b2736f3d014b929c55256773dae1"
  },
  {
    songname: "you-and-me" , filepath:"2.mp3" , coverpath:"https://i.scdn.co/image/ab67616d0000b2736f3d014b929c55256773dae1"
  },
]
songitems.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName('img')[0].src = songs[i].coverpath
  element.getElementsByClassName('songname')[0].innerText = songs[i].songname
})

//play songs
master.addEventListener('click',()=>{
  if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    master.classList.remove('fa-play-circle');
    master.classList.add('fa-pause-circle')
    console.log("playing......")
    gif.style.opacity=1;
  }
  else{
    audioelement.pause();
    master.classList.add('fa-play-circle');
    master.classList.remove('fa-pause-circle')
    console.log("paused......")
    gif.style.opacity=0;
  }
})

// listen to event 
audioelement.addEventListener('timeupdate',()=>{
  console.log('timeupdate'); // audio event
  //upade seekbar
  progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
  progressbar.value=progress;
})


progressbar.addEventListener('change' ,()=>{
  audioelement.currentTime=progressbar.value * audioelement.duration/100;
  console.log("changed.........")
})

const makeplay = () =>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle')
      console.log("changed.....")
    });

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeplay();
     index = parseInt(e.target.id);
    console.log(e);
    console.log(e.target);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioelement.src = `${index}.mp3`;  // Use the correct file path
    audioelement.currentTime = 0;
    audioelement.play();
     mastersongname.innerText =songs[index].songname;
    master.classList.add('fa-pause-circle');
    master.classList.remove('fa-play-circle');
 
  });
});
document.getElementById('next').addEventListener('click',()=>{
  if(index>7){
    index=0;
  }
  else{
    index += 1 ;
  }
    audioelement.src = `${index}.mp3`;  // Use the correct file path
    audioelement.currentTime = 0;
    mastersongname.innerText =songs[index].songname;
    console.log(index);
    audioelement.play();
    master.classList.add('fa-pause-circle');
    master.classList.remove('fa-play-circle')
  
})
    
 
document.getElementById('previous').addEventListener('click',()=>{
  if(index<=7){
    index=0;
  }
  else{
    index -= 1 ;
  }
  audioelement.src = `${index}.mp3`;  // Use the correct file path
  audioelement.currentTime = 0;
  mastersongname.innerText =songs[index].songname;
  audioelement.play();
  master.classList.add('fa-pause-circle');
  master.classList.remove('fa-play-circle');
})
