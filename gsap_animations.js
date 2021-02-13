const _get = (el) => document.querySelector(el);
const show_task_input = _get("#add_newTask");

// const tl = new TimelineLite({ pause: true });
// const tl = TweenMax;

gsap.from(".task", 0.5, { x: -50, scale: 0, opacity: 0, stagger: 0.1 });
gsap.from("#date", 0.5, { y: -50 }, 0.3);

show_task_input.addEventListener("click", () => {
  gsap.to(".pop_up_container", 0.5, { y: 30 }, 0.3);
});
