// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select('tbody');
// input fields
var text = d3.select('#datetime');
var cityText = d3.select('#City');
var stateText = d3.select('#State');
var countryText = d3.select('#Country');
var shapeText = d3.select('#Shape');
//submit buttons
var submit = d3.select('#filter-btn-1');
var submit2 = d3.select('#filter-btn-2');
var submit3 = d3.select('#filter-btn-3');
var submit4 = d3.select('#filter-btn-4');
var submit5 = d3.select('#filter-btn-5');
var submit_master = d3.select('#filter-btn-6');
var submit_reset = d3.select('#reset-btn');

console.log(tableData)

function loadTable (data) {
    data.forEach((datapoint) => {
        var row = tbody.append('tr');
        Object.entries(datapoint).forEach(([key, value]) =>{
            var cell = tbody.append('td');
            cell.text(value);
        })
    })
};

loadTable(tableData);


submit_reset.on('click', function(){
    d3.event.preventDefault();
    loadTable(tableData)
})
submit.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()

    var inputValue = text.property("value");
    
    if (inputValue === "") {
        var filterData = tableData
    } else {
        var filterData = tableData.filter( x => x.datetime === inputValue);
    }
    console.log(filterData);
    loadTable(filterData);
})

submit2.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()

    var inputValue = cityText.property("value");
    
    if (inputValue === "") {
        var filterData = tableData
    } else {
        var filterData = tableData.filter( x => x.city === inputValue);
    }
    console.log(filterData);
    loadTable(filterData);
})

submit3.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()

    var inputValue = stateText.property("value");
    
    if (inputValue === "") {
        var filterData = tableData
    } else {
        var filterData = tableData.filter( x => x.state === inputValue);
    }
    console.log(filterData);
    loadTable(filterData);
})

submit4.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()

    var inputValue = countryText.property("value");
    
    if (inputValue === "") {
        var filterData = tableData
    } else {
        var filterData = tableData.filter( x => x.country === inputValue);
    }
    console.log(filterData);
    loadTable(filterData);
})

submit5.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()

    var inputValue = shapeText.property("value");
    
    if (inputValue === "") {
        var filterData = tableData
    } else {
        var filterData = tableData.filter( x => x.shape === inputValue);
    }
    console.log(filterData);
    loadTable(filterData);
})

submit_master.on('click', function(){
    d3.event.preventDefault();

    tbody.selectAll('td').remove()
    var filterData = tableData
    var inputValue = text.property("value");
    var inputValue2 = cityText.property("value");
    var inputValue3 = stateText.property("value");
    var inputValue4 = countryText.property("value");
    var inputValue5 = shapeText.property("value");
    
    if (inputValue.length == 0) {
        console.log("no text input");
        // var filterData = tableData.filter( x => x.city === inputValue2);
        var filterData = filterData;
    } else {
        var filterData = filterData.filter( x => x.datetime === inputValue);
        // var filterData = filterData.filter( x => x.city === inputValue2);
    }
    if (inputValue2.length == 0) {
        console.log("no text input");
        var filterData = filterData;
    } else {
        var filterData = filterData.filter( x => x.city === inputValue2);
    }
    if (inputValue3.length == 0) {
        console.log("no text input");
        var filterData = filterData;
    } else {
        var filterData = filterData.filter( x => x.state === inputValue3);
    }
    if (inputValue4.length == 0) {
        console.log("no text input");
        var filterData = filterData;
    } else {
        var filterData = filterData.filter( x => x.country === inputValue4);
    }
    if (inputValue5.length == 0) {
        console.log("no text input");
        var filterData = filterData;
    } else {
        var filterData = filterData.filter( x => x.shape === inputValue5);
    }
    console.log(filterData);
    loadTable(filterData);
})
