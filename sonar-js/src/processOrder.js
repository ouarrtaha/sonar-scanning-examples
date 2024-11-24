/*function processOrders(orders) {
  if (!orders || orders.length === 0) {
    return "No orders to process";
  }

  return "Orders processed successfully";
}

function processOrders(orders) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "pending") {
      console.log("Pending order:", orders[i].id);
    }
  }

  return "Orders processed successfully";
}*/

function processOrders(orders) {
  if (!orders || orders.length === 0) {
    return "No orders to process";
  }

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "pending") {
      if (orders[i].amount > 1000) {
        console.log("High-value pending order:", orders[i].id);

        if (orders[i].amount > 1500) {
          console.log("High-value pending order:", orders[i].id);
        }
      }
    }
  }

  return "Orders processed successfully";
}



