/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector('.title');
let option1 = document.querySelector('.option-one');
let option2 = document.querySelector('.option-two');
let option3 = document.querySelector('.option-three');
let option4 = document.querySelector('.option-four');
let option5 = document.querySelector('.option-five');
let option6 = document.querySelector('.option-six');
let option7 = document.querySelector('.option-seven');
let optiononeScreen = document.querySelector('.option-one-screen');
let optiontwoscreen = document.querySelector('.option-two-screen');
let storyOpening = document.querySelector('.story-opening');
let buttons = document.querySelector('.buttons');

// do optiononeend, optiontwoend
let optiononeend = document.querySelector('.option-one-end');
let optiontwoend = document.querySelector('.option-two-end');
let optionthreeend = document.querySelector('.option-three-end');
let optionfourend = document.querySelector('.option-four-end');

//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

// make the option 1 work
option1.onclick=function(){
optiononeScreen.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
}

// make the option 2 work
option2.onclick=function(){
optiontwoscreen.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};

/*
buttons.onclick=function(){
optiononeend.style.display = 'block';
    storyOpening.style.display = 'none';
};
/*
buttons.onclick=function(){
optiontwoend.style.display = 'block';
    storyOpening.style.display = 'none';
};
*/
// make the option 3 work
option3.onclick=function(){
optiononeend.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};

// make the option 4 work
option4.onclick=function(){
optiononeend.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};

// make the option 5 work
option5.onclick=function(){
optiontwoend.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};

// make the option 6 work
option6.onclick=function(){
optionthreeend.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};

// make the option 7 work
option7.onclick=function(){
optionfourend.style.display = 'block';
  storyOpening.style.display = 'none';
  title.style.display = 'none';
  buttons.style.display = 'none';
};