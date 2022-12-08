

function setBudget() {
    budget = budget_price.value
    if (budget == '' || budget < 0) {
        alert('Value cannot be empty or negative')
    }
    else {
        totalBudget.innerHTML = `${budget}`

    }

}

arr = []
totalexpense = 0
price=0


function Add() {
    budget = parseInt(budget_price.value)
    title = expenseTitle.value,
    price = parseInt(expensePrice.value)

    if (budget == 0) 
    {
        alert('please enter your budget')
    }
    else 
    {
        if (title=='' || price==0||NaN) 
        {
            alert('Value cannot be empty')
        }
       
        else
        {
            expenseAdd = {
                budget,
                title,
                price
            }
            arr.push(expenseAdd)
            localStorage.setItem(title, JSON.stringify(arr))

            arr = []

            user_records = JSON.parse(localStorage.getItem(title))
            console.log(user_records)

            table = document.getElementById('table_main')

            user_records.map((e) => {
                totalexpense += e.price
                totalbalance=budget-totalexpense

                newRow = document.createElement('tr')
                Expense = document.createElement('td')
                price = document.createElement('td')
                button=document.createElement('button')
                button.innerText='delete'
                button.id='delete'
                
                button.addEventListener("click",()=>{
                    user_records.map((e,i)=>{
                        table.deleteRow(i)
                    })
                    localStorage.removeItem(title)
                    // alert('success')
                })
                Expense.innerText = e.title
                price.innerText = e.price
                

                newRow.appendChild(Expense)
                newRow.appendChild(price)
                newRow.appendChild(button)

                table.appendChild(newRow)
            })
            console.log(totalexpense)
            console.log(totalbalance)
            totalExpense.innerHTML = totalexpense
            totalBalance.innerHTML = totalbalance


        }

    }
}


