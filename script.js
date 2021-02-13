const _getAll = (el) => document.querySelectorAll(el);

const tasksContainer = _getAll(".task");

//============================
//drag module
//============================

const startDrag = (tasks) => {
  tasks.forEach((task) => {
    task.addEventListener("dragstart", () => {
      console.log("dragging");
      task.classList.add("dragged_item");
    });
    task.addEventListener("dragend", () => {
      task.classList.remove("dragged_item");
    });
  });
};

tasksContainer.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragged_item = _get(".dragged_item");
    const subContainer = container.querySelector(".task_container .task_list");

    dragged_item && subContainer.append(dragged_item);
    console.log("drag over");
  });
});

//============================
//show insput for adding task
//============================
console.log(Date.now());

//check if module is already viiible
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

const show_add_task_component = _get("#add_newTask");
const add_task_component = _get(".pop_up_container");
const cancel_add_task = _get("#cancel_add_btn");

show_add_task_component.addEventListener("click", () =>
  setVisibility(add_task_component)
);
cancel_add_task.addEventListener("click", () =>
  setVisibility(add_task_component)
);

const add_btn = _get("#add_btn");

//============================
//add new task to the list
//============================
let input_array = [];
add_btn.addEventListener("click", () => {
  let input = _get("#pop_up_input").value;
  const task_list = _get(".new_tasks .task_list");
  const task_completed = _get(".task_completed .task_list");
  const no_task_placeholder = _get("#no_task_text");

  input_array = [...input_array, input];

  //   if (input) {
  //     console.log(input_array);
  //     localStorage.setItem("inputs", JSON.stringify(input_array));
  //     const inputsFromStorage = JSON.parse(localStorage.getItem("inputs"));
  //     // inputsFromStorage.forEach(input=>{

  //     // })
  //     input = null;
  //   }

  if (input) {
    no_task_placeholder.textContent = "";
    const li = document.createElement("Li");
    li.setAttribute("draggable", "true");
    li.classList.add("list_item");
    li.innerHTML = `<p> ${input} </p>
    <input type='checkbox' class='checkbox'/>
    `;
    task_list.append(li);

    const task_list_item = _getAll(".new_tasks .task_list li");
    task_list_item.forEach((list) => {
      const checkbox = list.querySelector(".checkbox");
      checkbox.addEventListener("click", () => {
        task_list.removeChild(list);
        task_completed.append(list);
      });
    });

    // const checkBox = _getAll(".checkbox");
    // checkBox?.forEach((box) => {
    //   box.addEventListener("click", () => {

    //   });
    // });

    setVisibility(add_task_component);
  } else console.log("please insert value");

  //convert from nodelist to array
  const task = _getAll(".list_item");
  let task_array = [];
  task.forEach((t) => {
    task_array = [...task_array, t.innerText];
    localStorage.setItem("all_task", JSON.stringify(task_array));
    console.log(localStorage.getItem("all_task"));
  });

  startDrag(task);
});
