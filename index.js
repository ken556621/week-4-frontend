//Assignment 1
function delayedResult(n1, n2, delayTime, callback){
	let result = window.setTimeout(callback, delayTime, (n1 + n2));
	return result;
}

delayedResult(4, 5, 3000, function(result){
    console.log(result)
})

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
})

//Assignment 2 
function ajax(src, callback){
    fetch(src).then(function(res){
       return res.json();
    }).then(function(response){
        callback(response)
    })
}

function render(data){
    const dataPanel = document.querySelector('#data-panel')

    // create table
    const table = document.createElement('table')
    table.className = 'table'

    // create header
    const row = document.createElement('tr')
    table.appendChild(row)

    const header = ['name', 'price', 'description']
    for (let i = 0; i < header.length; i++) {
        const cell = document.createElement('th')
        row.appendChild(cell)
        cell.innerHTML = header[i]
        dataPanel.appendChild(table)
    }
   
    for (let i = 0; i < data.length; i++) {
        const newRow = document.createElement('tr')
        newRow.appendChild(document.createElement('td')).innerHTML = data[i].name
        newRow.appendChild(document.createElement('td')).innerHTML = data[i].price
        newRow.appendChild(document.createElement('td')).innerHTML = data[i].description
        table.appendChild(newRow)
    }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(data){
    render(data);
});

