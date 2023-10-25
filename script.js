// function insert_Row() {
//     //Write your code here
// 	let table = document.getElementById("sampleTable");
// 	let tr = document.createElement("tr");
	
// 	let cell1 = document.createElement("td");
// 	cell1.innerText = "New Cell1";
	
// 	let cell2 = document.createElement("td");
// 	cell2.innerText = "New Cell2";

// 	tr.append(cell1, cell2);
	
// 	table.insertBefore(tr, table.children[0]);
// }

function insert_Row(){
	// let table = document.getElementById("sampleTable");
	// let x = `<tr><td>New Cell1</td><td>New Cell2</td></tr>`;
	// table.innerHTML = x + table.innerHTML;
	const table = document.getElementById('sampleTable');

  const newRow = table.insertRow(0); // Insert at position 1 (just after the header row)

  newRow.insertAdjacentHTML('beforeend', '<td>New Cell1</td><td>New Cell2</td>');
}