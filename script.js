// Task-1: Select Element by id

let changeText = document.getElementById("text");
// console.log(changeText);

changeText.innerText = "DOM Element Selected By ID";
// console.log(changeText);




//Task-2: Select element by Tag Name

const paragraphs = document.getElementsByTagName("p");

paragraphs[0].innerText = "First paragraph updated";




//Task:3 Select Element by Class Name

let buttons = document.getElementsByClassName("btn");
if (buttons.length > 1) {
    buttons[1].textContent = "Click Me";
}

// console.log(buttons);

//Task-4: Use Query Selector
let heading = document.querySelector("h2");
heading.style.color = "blue";

//Task-5: Use Query Selector

let green = document.querySelectorAll(" #cafe li");
green.forEach(item => {
    item.style.color = "green";
});


//Task-6: Change Style Using Selected Element

let changeStyle = document.querySelector(".task6");

changeStyle.style.fontSize = "24px";

changeStyle.style.color = "magenta";

changeStyle.style.backgroundColor = "Yellow";