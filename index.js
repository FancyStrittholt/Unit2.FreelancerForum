const possibleNames = [
  "Gary",
  "Mrs Puff",
  "Old Man",
  "Fancy",
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

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

function render() {
  const table = document.querySelector("#table");

  for (const item of freelancers) {
    const row = createDataRow(item.name, item.occupation, item.price);

    if (row) {
      table.appendChild(row);
    }
  }
}

function createDataRow(name, occupation, price) {
  const row = document.createElement("tr");

  const exists = document.getElementById(name + occupation + price);

  if (exists) return;

  const tdName = document.createElement("td");
  const nameText = document.createTextNode(name);
  tdName.appendChild(nameText);
  row.appendChild(tdName);

  const tdOccupation = document.createElement("td");
  const occupationText = document.createTextNode(occupation);
  tdOccupation.appendChild(occupationText);
  row.appendChild(tdOccupation);

  const tdPrice = document.createElement("td");
  const priceText = document.createTextNode("$" + price);
  tdPrice.appendChild(priceText);
  row.appendChild(tdPrice);

  row.id = name + occupation + price;

  return row;
}

function addFreelancer() {
  render();

  if (freelancers.length >= 20) {
    clearInterval(addFreelancerIntervalId);
  }

  freelancers.push({
    name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
    occupation:
      possibleOccupations[
        Math.floor(Math.random() * possibleOccupations.length)
      ],
    price: Math.floor(Math.random() * 100),
  });

  calcAverage();
}

function calcAverage() {
  const element = document.querySelector("#average");
  const average =
    freelancers.reduce((acc, curr) => acc + curr.price, 0) / freelancers.length;
  const text = document.createTextNode(
    `The average starting price is $${Math.floor(average)}.`
  );
  element.replaceChildren(text);
}
