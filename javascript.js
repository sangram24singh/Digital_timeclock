let mytime1 = document.querySelector('.tm1')
let mytime2 = document.querySelector('.tm2')
let mytime3 = document.querySelector('.tm3')
let myvalue = document.querySelector('.tm11')
let myquote = document.getElementById('quote1')
function time(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours>=12){
        myvalue.innerHTML = "PM"
    }
    else {
        myvalue.innerHTML = "AM"
    }
    
    if (hours>=6 && hours < 12){
        myquote.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
    }
    else if (hours>=12 && hours < 15){
        myquote.innerText = "LET'S HAVE SOME LUNCH !!"
    }
    else if (hours >=15 && hours <19){
        myquote.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    }
    else{
        myquote.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }
    if (hours>=12){
        hours = hours - 12
    }
    let timezone = `${hours} H`;
    mytime1.innerHTML = timezone
    let timezones = `${minutes} M`;
    mytime2.innerHTML = timezones
    let timeszoness = `${seconds} S`;
    mytime3.innerHTML = timeszoness

}
setInterval(() => {
    time()
}, 1000)
let mrng = document.getElementById('s1')
let after = document.getElementById('s2')
let evng = document.getElementById('s3')
let night = document.getElementById('s4')
let btn = document.getElementById('al1')
let mytext = document.getElementById('mrng')
let wake = document.getElementsByClassName('M1')
let image = document.getElementById('pic')
btn.addEventListener('mouseover', () =>{
    btn.innerHTML = "Party Time !!"
    let time = new Date();
    let hours = time.getHours();
    if (hours===parseInt(mrng.value)){
        mytext.innerHTML = 'A VERY GOOD MORNING!!'
        wake[0].innerHTML = mrng.value;
    }
    else if (hours==parseInt(after.value)){
        mytext.innerHTML = 'A VERY GOOD AFTERNOON !!'
        wake[1].innerHTML= after.value;
        pic.style.backgroundImage = "url('goodaft.jpg')";

       
    }
    else if (hours===parseInt(evng.value) && parseInt()){
        mytext.innerHTML = 'A VERY GOOD EVENING'
        wake[2].innerHTML = evng.value
        pic.style.backgroundImage = "url('Group 5183.svg')";
    }
    else if (hours===parseInt(night.value)){
        mytext.innerHTML = "GOOD NIGHT"
        wake[3].innerHTML = night.value
        pic.style.backgroundImage = "url('night.jpeg')";

    }
     else {
         console.log('Try again')
         mytext.innerHTML = 'SET AGAIN'
     }
})

