var pizza = new Object() // object approach
pizza.meat = 'Sausage'
pizza.cheese = 'cheddar'
pizza.sauce = 'red'

var pizza = { // literal approach
    meat: 'Sausage',
    cheese: 'cheddar',
    sauce: 'red'
}

pizza.meat = 'more cheese'

// console.log(pizza.meat)
var topping = 'cheese'
// console.log(pizza[topping]) // dynamic for something like user input from a form
// console.log(pizza.topping) // THIS DOES NOT WORK

var props = Object.keys(pizza) // object has a things called keys that can be passed properties, like meat, cheese, etc from the object

props.forEach(function(prop){
    console.log(pizza[prop]) // this is printing out all the values that this is forEaching through.  Could just have prop in there to list out the list of keys.
})
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forrest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]

movies.forEach(function(movie) {
    var directors = movie.directors.map(function(director) {
        return director.name
    })
    // console.log(directors.join(', ')) // joins the two director objects from directors and concatonating them with commma space between
    directors = directors.join(', ') //
    console.log(movie.title + ' - ' + movie.genre + ' - ' + movie.directors[0].name + ' (' + movie.year + ')' + directors) // the [0].name is referencing the index of the nested array with
})
// var title = 'Star wars'
// var genre = 'Sci Fi'
// var year = 1977
// console.log(props)
