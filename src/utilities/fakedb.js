// use local storage to manage cart data
const addToDb = (id) => {
    let jobItems = getJobItems();
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
    const jobItems = getJobItems();
    if (id in jobItems) {
      delete jobItems[id];
      localStorage.setItem("job-items", JSON.stringify(jobItems));
    }
  };
  
  const getJobItems = () => {
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
  
  export { addToDb, removeFromDb, getJobItems, deleteJobItems };