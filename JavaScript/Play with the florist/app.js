// variable declaration.
  // For price
  let rosePrice;
  let lilyPrice;
  let tulipPrice;

  // For Number OF flowers.
  let numOfRoses;
  let numOflilies;
  let numOFtulips;

// initialization
  rosePrice = 8;
  lilyPrice = 10;
  tulipPrice = 2;
  numOfRoses = 70;
  numOflilies = 50;
  numOFtulips = 120;

  let roseValue;
  let lilyValue;
  let tulipValue;
  
  roseValue = rosePrice * numOfRoses;
  lilyValue = lilyPrice * numOflilies;
  tulipValue = tulipPrice * numOFtulips;

  let totalPrice;
  totalPrice = roseValue + lilyValue + tulipValue;

// for Output
  console.log("Rose – unit price:",rosePrice, "quantity:",numOfRoses, "value:",roseValue);
  console.log("Lily – unit price:",lilyPrice, "quantity:",numOflilies, "value:",lilyValue);
  console.log("Rose – unit price:",tulipPrice, "quantity:",numOFtulips, "value:",tulipValue);
  console.log("Total:",totalPrice);