const getNextId = (todoItems) => {
  const lastItem = todoItems[todoItems.length - 1];
  const nextId = lastItem === undefined ? 1 : lastItem.id + 1;
  return nextId;
};

export { getNextId };
