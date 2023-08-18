// function addToList() {
//     var item = document.getElementById("item");
//     var date = document.getElementById("date");
//     var amount = document.getElementById("amount");
//     var list = document.getElementById("list");

//     // Select the text field
//     copyText.select();

//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
// }

// function addToList(table){
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// let table = document.querySelector("table");
// generateTableHead(table);

// function addToList() {
//     // creates a <table> element and a <tbody> element
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (let i = 0; i < 2; i++) {
//       // creates a table row
//       const row = document.createElement("tr");
  
//       for (let j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     document.body.appendChild(tbl);
//     // sets the border attribute of tbl to '2'
//     tbl.setAttribute("border", "2");
//   }

// function addToList() {
    // let item = document.getElementById("item");
    // let date = document.getElementById("date");
    // let amount = document.getElementById("amount");
    // let fcolumn = document.getElementById("fcolumn");
    // let cell = document.createElement("th");

    // // Select the text field
    // item.selected();
    // date.selected();
    // amount.selected();

    // // Copy the text inside the text field
    // navigator.clipboard.writeText(item.value);
    // navigator.clipboard.writeText(date.value);
    // navigator.clipboard.writeText(amount.value);

    // cell.appendChild(document.createTextNode(item.value));
    // fcolumn.appendChild(cell);
// }

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }