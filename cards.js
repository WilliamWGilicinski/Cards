let deck = new Array()

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
 * Create ordered deck
 * 
 * Time: n-squared
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
}

/**
 * Shuffle deck to random order
 */
function shuffle()
{
    let newDeck = new Array(deck.length)

    count = 0
    /**
     * Randomly place until all spots are filled
     */
    deck.forEach((card) => 
    {
        placed = false
        while(!placed)
        {
            count += 1
            rand = Math.floor(Math.random() * 52)
            if(newDeck[rand] === undefined)
            {
                newDeck[rand] = card
                placed = true
            }
        }
    })

    console.log(`Loop occured: ${count} times`)
    deck = newDeck

}

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
 * Execution Time: 12.5 - 13 ms
 * Init  Time: 0.052 ms
 * 
 * Number of times the loop occured: 100-400
 */