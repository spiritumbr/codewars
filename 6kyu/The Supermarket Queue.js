function queueTime(customers, n) {
  // Create an array to represent the state of each till
  const tills = new Array(n).fill(0);

  // Iterate through each customer in the queue
  for (let i = 0; i < customers.length; i++) {
    // Find the till with the minimum time
    const minTime = Math.min(...tills);

    // Find the index of the till with the minimum time
    const minIndex = tills.indexOf(minTime);

    // Assign the customer to the till with the minimum time
    tills[minIndex] += customers[i];
  }

  // Return the maximum time among all tills
  return Math.max(...tills);
}