

// Question 1 : The average price is $23.63
// I wanted to create a function to calculate the average price by taking in no arguments.  It declares a total price variable, then cycles through a for loop with an upper bound of items.length.  It cycles through all item as if an array based on which time through the loop it is (i), then add the property for that iteration to the totalPrice aggregator.  Calculates average before returning the avgPrice.  Then I pulled down the js file from accounting.js and then used it to format the output.
//
// function calculateAveragePrice(inputs) {
//     var totalPrice = 0
//     for (var i = 0; i < inputs.length ; i++) {
//         totalPrice += inputs[i].price
//     }
//     var avgPrice = totalPrice/inputs.length
//     return avgPrice
// }
// console.log('The average price is ' + accounting.formatMoney(calculateAveragePrice(items)))

// using reduce

var totalPrice = 0 // come back and use reduce if time permits
items.forEach(function(item) {
    totalPrice += item.price
})
var averagePrice = totalPrice/items.length
console.log('The average price is ' + accounting.formatMoney(averagePrice))
// var total = items[0].reduce(function(previous, current) { // This will be really handy with homework
//     return {price: previous + current}
// }, {price: 0})
//
// var avgPrice = total.price / pricesObjects.length
// console.log(avgPrice)

// items.foreach(function (title, price, array){
//     console.log(title, price)
// })


// })
// Question 2 :
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// "Items that cost between $14.00 USD and $18.00 USD:" [
// {
// title: "1970s Coors Banquet Glass Beer Pitcher", ...
// }, {
// ... },
// {
// title: "Hand Painted Colorful Feather Glass", ...
// } ]

var itemsInPriceRange = items.map(function(item){
    if ((item.price < 18) && (item.price > 14)){
        return `title: ${item.title}`
        // itemsInPriceRange.push(item.title)
    }
    else {

    }
})

console.log("Items that cost between $14.00 USD and $18.00 USD: " + itemsInPriceRange)

// var itemsInPriceRange2 = [] // This is an array approach I'd like to persue
//
// itemsInPriceRange2.push(items.filter(function(item) {
//     if ((item.price < 18) && (item.price > 14)) {
//         return item.title
//     }
// }))
// console.log(itemsInPriceRange2)

// // var itemsInPriceRange = [{}]
// function snatchItemsBetween14And18() {
// var itemsInPriceRange = []
//     for (var i = 0; i < items.length ; i++) {
//         if ((items[i].price <= 18) && (items[i].price >= 14)) {
//             itemsInPriceRange = items.push({title : (items[i].title)})
//             // itemsInPriceRange.addElem(items[i].title)
//         }
//         // else {
//         //     next if
//         // }
//     }
//     // itemsInPriceRange.
//     return itemsInPriceRange
// }
// console.log(snatchItemsBetween14And18())
// // console.log(items)
// var temp = [{
//     name: 'Joel',
//     title: 'lord'
// },'mean','girls']

// Question 3
// temp.forEach(function (item, index, array) {
//   console.log(item, index);
// console.log(temp)
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// var britishPound = []
// function britishPoundSearch(item) {
//     if (item.currency_code === 'GBP') {
//         return item.title
//     }
// }
//
// britishPound = britishPoundSearch(items)
// console.log(britishPound.title)

items.forEach(function(item) {
    if (item.currency_code === 'GBP') {
        console.log(item.title + ' costs ' + accounting.formatMoney(item.price))
    }
})

// Question 4
// Show me how to find which items are made of wood. Please console.log the ones you find.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

items.forEach(function(item) { // This repeats SALE for each value.  Should only show once.  Revamp
    if (woodSearch(item.materials)) {
        console.log('SALE ' + item.title + ' is made of wood ')
    }
})

function woodSearch(item) {
    return item.includes('wood')
}


// Question 5
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass

var materialList = items.forEach(function(item) {
    if (item.materials.length >= 8) {
        return item.materials
    }
})
console.log(materialList)
