let deck = new Array()
let nodeBank = new Array()
let root = new Object()

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
 * Standard Node class for a tree structure
 */
class Node
{
    constructor(data)
    {
        this.data = data
        this.left
        this.right
    }

    //Inorder traversal
    toList(list)
    {

        if(this.left !== undefined)
        {
            this.left.toList(list)
        }

        if(this.data !== '')
        {
            list.push(this.data)
        }

        if(this.right !== undefined)
        {
            this.right.toList(list)
        }
        
    }

    set value(value)
    {
        this.data = value
    }
}

function initialize()
{
    cardNumbers.forEach((number) => 
    {
        suits.forEach((suit) =>
        {
            deck.push(number + suit)
            nodeBank.push(new Node())
        })
    })

    root = new Node('')
}

function shuffle()
{
    /**
     * Tree Method
     */

    count  = 0

    deck.forEach((card) =>
    {
        let node = root
        let placed = false
        while(!placed)
        {
            count += 1
            rand = Math.floor(Math.random() * 2)

            //Randomly picked right
            if(rand)
            {
                //Place node to the right
                if (node.right === undefined)
                {
                    node.right = nodeBank.pop()
                    node.right.value = card
                    placed = true
                    
                }
                //Continue down the tree to the right
                else
                {
                    node = node.right
                }
            }

            //Randomly picked  left
            else
            {
                //Placed node to the left
                if (node.left === undefined)
                {
                    node.left = nodeBank.pop()
                    node.left.value = card
                    placed = true
                }
                //Continue down the tree to the left
                else
                {
                    node = node.left
                }
            }
        }
        

    })

    console.log(`Loop occured: ${count} times`)
}

function print()
{
    let newDeck = new Array()

    root.toList(newDeck)
    
    newDeck.forEach((card) =>
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
 * Init Time:  0.1137ms
 * 
 * Number of loops occuring: ~200 
 * 
 */
