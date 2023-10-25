function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	let tr = document.createElement("tr");
	
	let cell1 = document.createElement("td");
	cell1.innerText = "New Cell1";
	
	let cell2 = document.createElement("td");
	cell2.innerText = "New Cell2";

	tr.append(cell1, cell2);

	table.insertBefore(tr, table.children[0]);
}
