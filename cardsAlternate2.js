let deck = new Array()
const bucketSize = 100
let buckets = new Array()

const cardNumbers = [
    'A', //Ace
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J', //Jack
    'Q', //Queen
    'K'  //King
]

const suits = [
    'S', //Spades
    'H', //Hearts
    'C', //Clubs
    'D'  //Diamonds
]


/**
 * Create ordered deck and buckets
 */
function initialize()
{
    cardNumbers.forEach((number) => 
    {
        suits.forEach((suit) =>
        {
            deck.push(number + suit)
        })
    })

    for(let i = 0; i < bucketSize; i++)
    {
        buckets.push(new Array())
    }
}

/**
 * A 'wash' like algorithm
 */
function shuffle()
{
    deck.forEach((card)  =>
    {
        rand = Math.floor(Math.random() * bucketSize)
        buckets[rand].push(card)
    })

    deck = buckets.flat(1)
}

/**
 * Print all the cards
 */
function print()
{
    deck.forEach((card) => 
    {
        console.log(card)
    })
}

const initTime = performance.now()

initialize()

const endInitTime = performance.now()

const start = performance.now()

shuffle()
print()

const end = performance.now()
console.log(`Execution Time: ${end - start} ms`)
console.log(`Init Time: ${endInitTime - initTime} ms`)

/**
 * Total exectution time: Around 13 - 15  ms
 * Execution time:  13.1356ms
 * Init Time:  0.0846
 * 
 * Number of loops occuring: 52 
 * 
 */
