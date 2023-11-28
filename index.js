const possibleNames = [
  "Gary",
  "Mrs Puff",
  "Old Man Jenkins",
  "Bubble Bass",
  "Alice",
  "Bob",
  "Carol",
  "Spongebob",
  "Sandy",
  "Patrick",
  "Squidward",
  "Pearl",
  "Plankton",
  "Karen",
  "Flying Dutchman",
];
const possibleOccupations = [
  "Developer",
  "Influencer",
  "Cashier",
  "Scientist",
  "Boat instructor",
  "Bus driver",
  "Engineer",
  "Teacher",
  "Programmer",
  "Game Developer",
  "Krusty Krab Cook",
  "Stay at home dad",
  "Chum Bucket Owner",
  "Computer Wife",
];
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70,
  },
];
// calling the addFreelancer function below
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

function render() {
  const table = document.querySelector("#table");

  for (const item of freelancers) {
    const row = createDataRow(item.name, item.occupation, item.price);
    // adding new row to table
    if (row) {
      table.appendChild(row);
    }
  }
}

function createDataRow(name, occupation, price) {
  // creating a new row
  const row = document.createElement("tr");

  // Do I have this date row already in my table?
  const exists = document.getElementById(name + occupation + price);

  // Since it is undefined it will not add and loop through to the next one
  if (exists) return;

  // setting name column
  const tdName = document.createElement("td");
  const nameText = document.createTextNode(name);
  tdName.appendChild(nameText);
  row.appendChild(tdName);

  // setting occupation column
  const tdOccupation = document.createElement("td");
  const occupationText = document.createTextNode(occupation);
  tdOccupation.appendChild(occupationText);
  row.appendChild(tdOccupation);

  // setting price column
  const tdPrice = document.createElement("td");
  const priceText = document.createTextNode("$" + price);
  tdPrice.appendChild(priceText);
  row.appendChild(tdPrice);

  // setting unique row id
  row.id = name + occupation + price;

  // returning newly created row
  return row;
}

function addFreelancer() {
  // rendering the table
  render();

  // setting a max
  if (freelancers.length >= 20) {
    clearInterval(addFreelancerIntervalId);
  }

  // creating new random freelancer and adding it
  freelancers.push({
    name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
    occupation:
      possibleOccupations[
        Math.floor(Math.random() * possibleOccupations.length)
      ],

    // randomizing the starting price with a max of 100
    price: Math.floor(Math.random() * 100),
  });

  // calculating the average in the table
  calcAverage();
}

function calcAverage() {
  // grabbing the average placeholder id
  const element = document.querySelector("#average");
  // calculating the average
  const average =
    freelancers.reduce((acc, curr) => acc + curr.price, 0) / freelancers.length;
  // creating text node
  const text = document.createTextNode(
    `The average starting price is $${Math.floor(average)}.`
  );
  // replacing that number everytime a new freelancer is added
  element.replaceChildren(text);
}
