const placeOrder = () => {
    return new Promise((resolve) => {
          // write logic here
          resolve("Order placed ")
    });
  };
  
const prepareFood = () => {
    return new Promise((resolve) => {
          // write logic here
          resolve("Food prepared ")
    });
  };
  
const deliverFood = () => {
    return new Promise((resolve, reject) => {
          // write logic here
          resolve("Food delivered")
    });
  };
  
const packageFood = () => {
    return new Promise((resolve) => {
          resolve("Food packaged")
    });
  };
  
const startFoodDeliveryProcess = async () => {
      // implement this function to call the above functions in a correct order.
      let response= await placeOrder();
      console.log(response);
      response=await prepareFood();
      console.log(response)
      response= await packageFood();
      console.log(response)
      response=await deliverFood();
      console.log(response)
      console.log("Food delivery process complete.")
  };
  
  startFoodDeliveryProcess();
  