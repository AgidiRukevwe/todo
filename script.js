const tasksContainer = document.querySelectorAll(".task");
const tasks = document.querySelectorAll(".list_item");
const list_item = document.querySelector(".list_item");

//============================
//drag mocule
//============================
tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    console.log("dragging");
    task.classList.add("dragged_item");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragged_item");
  });
});

tasksContainer.forEach((container) => {
  container.addEventListener("dragover", () => {
    const dragged_item = document.querySelector(".dragged_item");
    const subContainer = container.querySelector(".task_container .task_list");
    subContainer.append(dragged_item);
    console.log("drag over");
  });
});

//============================
//show insput for adding task
//============================
console.log(Date.now());

//check if it is already viiible
let visible;
const setVisibility = (el) => {
  if (!visible) {
    console.log(true);
    el.classList.remove("hide");
    console.log("not hiddenn");
    console.log(add_task_component);
    visible = true;
  } else {
    el.classList.add("hide");
    visible = false;
    console.log("hidden");
  }
};

const show_add_task_component = document.querySelector("#add_newTask");
const add_task_component = document.querySelector(".pop_up_container");
const cancel_add_task = document.querySelector("#cancel_add_btn");

show_add_task_component.addEventListener("click", () =>
  setVisibility(add_task_component)
);
cancel_add_task.addEventListener("click", () =>
  setVisibility(add_task_component)
);

const add_btn = document.querySelector("#add_btn");

//============================
//add new task to the list
//============================

add_btn.addEventListener("click", () => {
  const input = document.querySelector("#pop_up_input").value;
  const task_list = document.querySelector(".new_tasks .task_list");
  const no_task_placeholder = document.querySelector("#no_task_text");
  console.log(no_task_text);

  if (input) {
    console.log(input);
    no_task_placeholder.textContent = "";
    const li = document.createElement("Li");
    li.setAttribute("draggable", "true");
    li.classList.add("list_item");
    li.innerHTML = `<p> ${input} </p>`;
    task_list.append(li);
  } else console.log("please insert value");
});

//============================
//get the date
//============================
