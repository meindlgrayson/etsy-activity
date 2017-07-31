// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0;
  for (i = 0; i < data.length; i++) {
    total += data[i].price;
  }
  return total;
}

console.log(question1());



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let costBetween = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].price <= 18 && data[i].price >= 14) {
      costBetween.push(data[i]);
    }
  }
  return costBetween;
}

console.log(question2());



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (i = 0; i < data.length; i++) {
    if(data[i].currency_code === "GBP"){
      return data[i].title + ", price: " + data[i].price;
    }
  }
}

console.log(question3());


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let hasWood = [];
  for (i = 0; i < data.length; i++){
    for (j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood"){
        hasWood.push(data[i]);
      }
    }
  }
  return hasWood;
}

console.log(question4());


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  overEight = [];
  for (i = 0; i < data.length; i++){
    if(data[i].materials.length > 8) {
      overEight.push({name: data[i].title, quantity: data[i].quantity, materials: data[i].materials});
    }
  }
  return overEight;
}

console.log(question5());

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let counter = 0;
  for (i = 0; i < data.length; i++){
    if (data[i].who_made === 'i_did'){
      counter++;
    }
  }
  return counter;
}

console.log(question6());