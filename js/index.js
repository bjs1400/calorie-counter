const deleteItem = id => {
  document.getElementById(id).style.display = "none";
};

const itemAdd = () => {
  var table = document.querySelector(".main-table");
  var row = document.createElement("tr");

  var cell1 = document.createElement("td");
  var cell1Text = document.createTextNode("1");
  cell1.appendChild(cell1Text);

  var cell2 = document.createElement("td");
  var cell2Text = document.createTextNode("+");
  cell2.appendChild(cell2Text);

  var cell3 = document.createElement("td");
  var cell3Text = document.createTextNode("Item 1");
  cell3.appendChild(cell3Text);

  var cell4 = document.createElement("td");
  var cell4Text = document.createTextNode("65");
  cell4.appendChild(cell4Text);

  var cell5 = document.createElement("td");
  var cell5Text = document.createTextNode("-");
  cell5.appendChild(cell5Text);

  cell5.addEventListener("click", () => {
    deleteItem("1");
  });

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);

  table.appendChild(row);
};

{
  /* <tr id="1">
  <th>1</th>
  <th>+</th>
  <th>Item 1</th>
  <th>65</th>
  <th onclick="deleteItem('1')">-</th>
</tr> */
}
