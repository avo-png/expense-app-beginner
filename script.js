function addToList() {
    // Grab the input values
    let item = document.getElementById("item");
    let date = document.getElementById("date");
    let amount = document.getElementById("amount");

    // Select the text field
    item.select();
    date.select();
    amount.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(item.value);
    navigator.clipboard.writeText(date.value);
    navigator.clipboard.writeText(amount.value);
    
    // Get the table element in which you want to add row
    let table = document.getElementById("list");
 
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end
 
    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
 
    // Add data to c1 and c2
    c1.appendChild(document.createTextNode(item.value));
    c2.appendChild(document.createTextNode(date.value));
    c3.appendChild(document.createTextNode(amount.value));
 }