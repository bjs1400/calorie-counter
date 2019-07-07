var total = 0;

const deleteItem = id => {
  document.getElementById(id).style.display = "none";
  
};

const itemAdd = (itemName, numCalories) => {
  let totalcals = document.getElementById("total");

  if (!itemName || !numCalories) {
    return false;
  }

  let newId = document.getElementsByTagName("tr").length.toString();

  var table = document.querySelector(".main-table");
  var row = document.createElement("tr");
  row.setAttribute("id", newId);

  // var cell1 = document.createElement("td");
  // var cell1Text = document.createTextNode(newId);
  // cell1.appendChild(cell1Text);

  var cell2 = document.createElement("td");
  var cell2Text = document.createTextNode("+");
  cell2.appendChild(cell2Text);

  var cell3 = document.createElement("td");
  var cell3Text = document.createTextNode(itemName || "item Name");
  cell3.appendChild(cell3Text);

  var cell4 = document.createElement("td");
  var cell4Text = document.createTextNode(numCalories || "num calories");
  cell4.appendChild(cell4Text);

  var cell5 = document.createElement("td");
  var cell5Text = document.createTextNode("-");
  cell5.appendChild(cell5Text);

  cell5.addEventListener("click", () => {
    deleteItem(newId);
  });

  // row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);

  table.appendChild(row);
  let addn = Number(numCalories);
  console.log(addn);
  total += addn;
  console.log(total);
  totalcals.innerHTML = total.toString();
  return false;
};
