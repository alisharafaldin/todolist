const btnUpload = document.querySelector(".icon-upload");
const heartTask = document.querySelector(".icon-heart");
const angryTask = document.querySelector(".icon-angry2");
const taskText = document.querySelector(".task-text");

const inputTask = document.querySelector("#inputTask");
const formTask = document.querySelector("form");
const div_task = document.querySelector(".task");

const containerTask = document.getElementById("container");

formTask.addEventListener("submit", (eo) => {
  eo.preventDefault(); //لمنع الحدث الإفتراضي
  const newTask = ` <div class="task">
            <span class="icon-star icon"></span>
            <p class="task-text"> ${inputTask.value} </p>
            <dir>
                <span class="icon-trash icon"></span>
                <span class="icon-angry2 icon"></span>
            </dir>
          </div>
        `;
  containerTask.innerHTML += newTask;
  inputTask.value = "";
});

// containerTask.addEventListener("click", (eo) => { //عندما تكون في نطاق الكونتينر
//     if (eo.target.className == "icon-trash icon") { // إذا ضغط على العنصر الي فيه كلاس كدة
//         eo.target.parentElement.parentElement.remove()
//     } else if (eo.target.className == "icon-angry2 icon"){
//         eo.target.classList.add("dn")
//         const iconHeart = `<span class="icon-heart icon"></span>`
//         eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");
//         eo.target.parentElement.innerHTML += iconHeart;
//     } else if (eo.target.className == "icon-heart icon"){
//         eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
//         eo.target.classList.add("dn")
//         const addAngry = `<span class="icon-angry2 icon"></span>`
//         eo.target.parentElement.innerHTML += addAngry
//     } else if(eo.target.className == "icon-star icon") {
//         eo.target.classList.add("orange")
//         containerTask.prepend(eo.target.parentElement)
//     } else if(eo.target.className == "icon-star icon orange") {
//         eo.target.classList.remove("orange")
//         containerTask.append(eo.target.parentElement)
//     }

// })

containerTask.addEventListener("click", (eo) => {
  //عندما تكون في نطاق الكونتينر
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const iconHeart = `<span class="icon-heart icon"></span>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += iconHeart;
      break;
    case "icon-heart icon":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");
      eo.target.classList.add("dn");
      const addAngry = `<span class="icon-angry2 icon"></span>`;
      eo.target.parentElement.innerHTML += addAngry;
      break;
    case "icon-star icon":
      eo.target.classList.add("orange");
      containerTask.prepend(eo.target.parentElement);
      break;
    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      containerTask.append(eo.target.parentElement);
      break;
  }
});
