function decorP(num) {
const target = window.document.getElementsByTagName('p')[num]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*20}, 30%, 95%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onload = ({ target }) =>  neonGlory(target);

}









var colors = ["#F88431","#F6BA35","#EDD43A","#89DC28", "#FF3399", " 	#FF0066"]; // you can add your own colors
var col_length = colors.length;
var number_of_circles = 400; // you can change number of circles;
var i = 0;
function create_random_line() {
  $('.main').append('<div class = "circle"></div>');
  if(i<number_of_circles-1)
  {
    setTimeout(function(){ 
      var getRandomPosX = Math.random() * 1330;
      var getRandomPosY = Math.random() * 1300;
      var getRandomColor = Math.floor(Math.random() * col_length);
      var getRandomScale = Math.random() * (1.8 - 0.5) + 0.5;
      var getRandomOpacity = Math.random() * (1 - 0.3) + 0.3;
      var getRandomZIndex = Math.floor(Math.random() * 10);
      console.log(getRandomZIndex)
      $('.circle').eq(i).css({'left': getRandomPosX,
                          'top': getRandomPosY,
                          'transform': 'scale('+getRandomScale+')',
                          'background': colors[getRandomColor],
                          'opacity': getRandomOpacity,
                          'z-index': getRandomZIndex
                         });
      create_random_line() }, 0.3);
      i++;
    }
  
}

create_random_line();



function text1() {
  let one = document.getElementById('one');
  one.innerHTML = '&#9734; ооо, &#9734;';
  decorP(0)
}

function text2() {
  let two = document.getElementById('two');
  two.innerHTML = '&#10048; сссс &#10048;';
  decorP(1)
}

function text3() {
  let three = document.getElementById('three');
  three.innerHTML = '&#9728; сссс &#9728;';
  decorP(2)
}

function text4() {
  let four = document.getElementById('four');
  four.innerHTML = '&#10084; &#9786; &#10084;';
  decorP(3)
}
setTimeout(text1, 900);

setTimeout(text2, 1400);

setTimeout(text3, 1600);

setTimeout(text4, 1700);



function message() {
 
   let message = document.getElementById('messageText');
   message.setAttribute('class', 'message');
   let messageCont = document.getElementById('messageContainer');
   messageCont.setAttribute('class', 'messageCont');
 
 }

     
function mess() {
 let sign = document.getElementById('signWord');
  sign.setAttribute('class', 'displayNone');
let messBox = document.getElementById('messageBox');
messBox.setAttribute('class', 'message__box');
let messInner = document.getElementById('messageInner');
messInner.innerHTML = 'чудес';

 message();
decorP(4);

}

setTimeout(mess, 5000);


function none() {
  let sign = document.getElementById('messageInner');
   sign.setAttribute('class', 'displayNone');
}

//setTimeout(none, 11000);



function mess2() {
  let messBox2 = document.getElementById('messageBox2');
  messBox2.setAttribute('class', 'message__box2');
  let messInner2 = document.getElementById('messageInner2');
  messInner2.innerHTML = 'радости';
 
  message();
 decorP(5);
 
 }

 setTimeout(mess2, 7000);

 function none2() {
  let sign2 = document.getElementById('messageInner2');
   sign2.setAttribute('class', 'displayNone');
}

//setTimeout(none2, 16000);



function mess3() {
  let messBox3 = document.getElementById('messageBox3');
  messBox3.setAttribute('class', 'message__box3');
  let messInner3 = document.getElementById('messageInner3');
  messInner3.innerHTML = 'лёгкости';
 
  message();
 decorP(6);
 
 }

 setTimeout(mess3, 10000);

 function none3() {
  let sign3 = document.getElementById('messageInner3');
   sign3.setAttribute('class', 'displayNone');
}

//setTimeout(none3, 22000);

function mess4() {
  let messBox4 = document.getElementById('messageBox4');
  messBox4.setAttribute('class', 'message__box4');
  let messInner4 = document.getElementById('messageInner4');
  messInner4.innerHTML = 'падарков';
  
   message();
  decorP(7);
  
  }

  setTimeout(mess4, 12000);

  function none4() {
    let sign4 = document.getElementById('messageInner4');
     sign4.setAttribute('class', 'displayNone');
  }
  //setTimeout(none4, 28000);

  
function mess5() {
  let messBox5 = document.getElementById('messageBox5');
  messBox5.setAttribute('class', 'message__box5');
  let messInner5 = document.getElementById('messageInner5');
  messInner5.innerHTML = 'любви';
  
   message();
  decorP(8);
  
  }


  setTimeout(mess5, 14000);

  function none5() {
    let sign5 = document.getElementById('messageInner5');
     sign5.setAttribute('class', 'displayNone');
  }
  //setTimeout(none5, 34000);

  function mess6() {
    let messBox6 = document.getElementById('messageBox6');
    messBox6.setAttribute('class', 'message__box6');
    let messInner6 = document.getElementById('messageInner6');
    messInner6.innerHTML = 'гармонии';
    
     message();
    decorP(9);
    
    }
  
  
    setTimeout(mess6, 16000);
  
    function none6() {
      let sign6 = document.getElementById('box');
      sign6.setAttribute('class', 'displayNone');
    }
    setTimeout(none6, 19000);

   //function colors() {
      //let main = document.getElementById('messageText');
      //main.setAttribute('class', 'displayNone');
    //}
    //setTimeout(colors, 17000);