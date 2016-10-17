

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
console.log("Question 1")
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

// function searchForThePrices(item) {
//     return item >= 14 && item <= 18
// }



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

// var itemsInPriceRange = items.map(function(item){  //filter redo this when possible.
//     if ((item.price < 18) && (item.price > 14)){
//         return `title: ${item.title}` //true/false
//         // itemsInPriceRange.push(item.title)
//     }
//     else {
//
//     }
// })
//
// console.log("Items that cost between $14.00 USD and $18.00 USD: ", itemsInPriceRange)
// var itemsInPriceRange = items.filter(function(item){  //filter
//     // if ((item.price < 18) && (item.price > 14)){
//     return (item.includes(item.price < 18) && item.includes(item.price > 14))//true/false
//     // itemsInPriceRange.push(item.title)
//     // return item.includes((item.price < 18) && (item.price > 14))
//     // }
//     // else {
//     //
//     // }
// })
//
// console.log(itemsInPriceRange)

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


// var priceRangeFTW = items.filter(function(item) {
//     return item >= 14 && item <= 18
// })
// console.log("Question 2")
// console.log(priceRangeFTW.title)

var flippingPricedItemRange = items.filter(function(item) {
    function rangeValidation(item) {
        return item.price > 14 && item.price < 18
    }
    return rangeValidation(item)
})
console.log("Question 2")
console.log(flippingPricedItemRange) // I feel sooooo close, but get undefined if I add .title to the array...  Submitting because today has been long and full of airplanes.
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

// items.forEach(function(item) { //could filter
//     if (item.currency_code === 'GBP') {
//         console.log(item.title + ' costs ' + accounting.formatMoney(item.price))
//     }
// })
var itemForPounds = items.filter(function(item) { 
    return item.currency_code.includes('GBP')
})
console.log("Question 3")
console.log(itemForPounds[0].title, 'costs', accounting.formatMoney((itemForPounds[0].price), { symbol: "GBP", format: "%v %s" })) // hacks, figure how to use non zero array reference


// Question 4
// Show me how to find which items are made of wood. Please console.log the ones you find.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

// items.forEach(function(item) { // This repeats SALE for each value.  Should only show once.  Revamp
//     if (woodSearch(item.materials)) {  //filter
//         console.log('SALE ' + item.title + ' is made of wood ')
//     }
// })

function woodSearch(item) {
    return item.materials.includes('wood')
}
var woodItems = items.filter(woodSearch)
console.log("Question 4")
console.log(woodItems)
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

// var materialList = []
// items.forEach(function(item) { // refactor this to list the items unless Collin says it's Cool
// if (item.materials.length >= 8) {//filter rewrite
//     // return item.materials
//     console.log(item.title + ' has ' + item.materials.length + ' materials:')
//     console.log(item.materials)
//     // materialList.push(item.materials)
// }
// })
var moreThan8 = items.filter(function(item) { // this looks better, filters for items with enough materials
    return item.materials.length >= 8
})
moreThan8.forEach(function(item){ // forEach to draw them to console in sequence
    console.log("Question 6")
    console.log(item.title, 'has', item.materials.length, 'materials:')
    console.log(item.materials)
})
// console.log(moreThan8.title, 'has ' + moreThan8.materials.length + ' materials:')
// console.log(moreThan8)

//Question 6
// Show me how to calculate how many items were made by their sellers
// 18 were made by their sellers

// var selfBuiltCount = 0 // reduce
// items.forEach(function(item){
//
//     if (item.who_made === 'i_did') {
//         selfBuiltCount++
//     }
// })
// console.log(selfBuiltCount + ' were made by their sellers')

//
// var iMadeThis = items.reduce(function(previous, current){
//     if (current.who_made === 'i_did') {
//         return previous + 1
//     }
//     else {
//         return previous
//     }
// }, 0)
//
// var iMadeThis = items.reduce(function(previous, current) {
//     return (current.who_made === 'i_did') ? previous + 1 : previous //ternary!  What?!
// }, 0)
//
// console.log(iMadeThis)


var iMade = items.reduce(function(previous, current){// tried it with reduce hax and it worked.  noice!
    if (current.who_made === 'i_did') {
        return previous + 1
    }
    else {
        return previous
    }
}, 0)
console.log("Question 7")
console.log(iMade + ' were made by their sellers.')
