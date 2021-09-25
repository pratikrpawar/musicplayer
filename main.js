const music=document.querySelector("audio");
const artist=document.querySelector("#artist");
const tittle=document.querySelector("#tittle");
const next=document.querySelector(".next_button");
const prev=document.querySelector(".prev_button");

const songs=[
    {
        name:"1",
        tittle:"song-1",
        artist:"song-1"
    },
    {
        name:"4",
        tittle:"__Kidita_navyane_Tula_aathvave",
        artist:"Aarya_ambekar__"
    },
    {
        name:"3",
        tittle:"Tera_Ban_Jaunga__Kabir_Singh_",
        artist:"Sandeep_V__Tulsi_Kumar,_Akhil_Sachdeva"
    }
]
const play=document.querySelector(".play_button");
play.addEventListener('click',()=>
{
    music.play()
    const icon=document.querySelector('#play');
    const image=document.querySelector('#image');
    if(icon.classList.contains("fa-play"))
    {
        image.classList.remove("pause");
        image.classList.add("anime");
        icon.classList.replace("fa-play","fa-pause");

    }
    else{
        image.classList.add("pause");
        music.pause();
        icon.classList.replace("fa-pause","fa-play");

    }
    if(music.ended())
    {
        nextSong();
        music.play();
        const icon=document.querySelector('#play');
        const image=document.querySelector('#image');
        if(icon.classList.contains("fa-play"))
        {
            image.classList.remove("pause");
            image.classList.add("anime");
            icon.classList.replace("fa-play","fa-pause");

        }
    }
    
})
const loadSongs=(songs)=>
{
    tittle.textContent=songs.tittle;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
}
console.log(next);
next.addEventListener('click',()=>
{
    nextSong();
    music.play();
    const icon=document.querySelector('#play');
    const image=document.querySelector('#image');
    if(icon.classList.contains("fa-play"))
    {
        image.classList.remove("pause");
        image.classList.add("anime");
        icon.classList.replace("fa-play","fa-pause");

    }
   
})
prev.addEventListener('click',()=>
{
    prevSong();
    music.play();
    const icon=document.querySelector('#play');
    const image=document.querySelector('#image');
    if(icon.classList.contains("fa-play"))
    {
        image.classList.remove("pause");
        image.classList.add("anime");
        icon.classList.replace("fa-play","fa-pause");

    }
   
})
songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex + 1)%songs.length;
    loadSongs(songs[songIndex]);

};
const prevSong=()=>
{
    songIndex=(songIndex -1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
}

