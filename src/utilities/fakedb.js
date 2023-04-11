// use local storage to manage cart data
const addToDb = (id) => {
  let jobItems = getToDB();
  // add quantity
  const quantity = jobItems[id];
  if (!quantity) {
    jobItems[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    jobItems[id] = newQuantity;
  }
  localStorage.setItem("job-items", JSON.stringify(jobItems));
};

const removeFromDb = (id) => {
  const jobItems = getToDB();
  if (id in jobItems) {
    delete jobItems[id];
    localStorage.setItem("job-items", JSON.stringify(jobItems));
  }
};

const getToDB = () => {
  let jobItems = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("job-items");
  if (storedCart) {
    jobItems = JSON.parse(storedCart);
  }
  return jobItems;
};

const deleteJobItems = () => {
  localStorage.removeItem("job-items");
};

export { addToDb, removeFromDb, getToDB, deleteJobItems };