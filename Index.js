/*
- Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, 
Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
- Store this information using the most appropriate data structures we've studied so far
- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
- Output a list displaying each item and its price
- Output the total at the end */


let shopingList=[["Milk",  1.2], ["Cocoa", 2.00], ["Salad", 2.00], 
["Carrots", 2.00], ["Tomatoes", 2.50], ["Ready Meal", 5.00]]

let foodList=["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready Meal"]
let priceList=[]

let items= prompt("Add items to your list")
let price= prompt("How much does it costs?")

for(const element of foodList){

console.log( `The ${element}  costs `)
}