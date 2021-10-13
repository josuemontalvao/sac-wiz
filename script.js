function compute(){
    // Input Reference as number
    var starter_value = document.getElementById('starter_value').valueAsNumber
    var years = document.getElementById('years').valueAsNumber
    var interest = document.getElementById('interest').valueAsNumber
    
    //Output Element Reference
    var deadline = document.getElementById('deadline')
    var montlhy_interest = document.getElementById('montlhy_interest')
    var interest_amount = document.getElementById('interest_amount')

    //Calculation
    var months = years * 12
    var amortization = starter_value / months
    var debit = starter_value;
    var m_interest = (1+ interest)**(1/12) - 1
    var fees = [];
    var total_fee = 0
    for(var i = 1; i <= years*12; i++){
        total_fee += fees[i-1] = debit * m_interest
        debit -= amortization
    }

    //Deleting rows if exists
    var old_row = document.getElementsByTagName('tr')
    if(old_row.length > 1){
        for (var i = old_row.length; i > 1; i--) {
            old_row[i-1].remove()
        }
    }

    //Creating the first five table rows
    var table = document.getElementsByTagName('table')
    var row_amount = 5    //change this if you want a different number of rows
    // remember that the maximum row_amount is stored in 'months'
    row_amount = (row_amount < months) ? row_amount : months
    for (var i = 1; i <= row_amount; i++){
        var row = document.createElement('tr')
        var collumn1 = document.createElement('td')
        collumn1.innerText = i
        row.appendChild(collumn1)
        var collumn2 = document.createElement('td')
        collumn2.innerText = amortization.toFixed(2)
        row.appendChild(collumn2)
        var collumn3 = document.createElement('td')
        collumn3.innerText = fees[i-1].toFixed(2)
        row.appendChild(collumn3)
        var collumn4 = document.createElement('td')
        collumn4.innerText = (amortization + fees[i-1]).toFixed(2)
        row.appendChild(collumn4)
        table[0].appendChild(row)
    }

    //Updating the Output values   
    deadline.value = months
    montlhy_interest.value = m_interest.toFixed(12)
    interest_amount.value = total_fee.toFixed(2)
    
}