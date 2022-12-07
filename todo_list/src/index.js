const todoEvent = (title, desription, dueDate, priority) => {
  const createEvent = () => console.log("meow!");
  return { title, desription, dueDate, priority, createEvent };
};

createEvent();
console.log("Hello");
