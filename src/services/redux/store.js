import {createStore} from 'redux'

const initialState = [
    {title: "column1",
    cards: [
        {header:"Titulo1",
        body:"body1"
    },
        {header:"Titulo2",
            body:"body2"
        }
    ]
},
    {title: "column2",
    cards: [
        {header:"Titulo3",
        body:"body3"
    },
        {header:"Titulo4",
            body:"body4"
        }
    ]
},
{title: "column1",
    cards: [
        {header:"Titulo1",
        body:"body1"
    },
        {header:"Titulo2",
            body:"body2"
        }
    ]
},
{title: "column1",
    cards: [
        {header:"Titulo1",
        body:"body1"
    },
        {header:"Titulo2",
            body:"body2"
        }
    ]
},
{title: "column1",
    cards: [
        {header:"Titulo1",
        body:"body1"
    },
        {header:"Titulo2",
            body:"body2"
        }
    ]
},
{title: "column1",
    cards: [
        {header:"Titulo1",
        body:"body1"
    },
        {header:"Titulo2",
            body:"body2"
        },
        {header:"Titulo2",
        body:"body2"
    },
        {header:"Titulo2",
        body:"body2"
    }
    ]
},
]

function reducer(state = initialState, action){
    console.log("the action: ", action)
    switch(action.type){
        case 'DELETE_CARD':
            let toReturn = [...state]
            let finalCardArray = toReturn[action.columnIndex].cards
            finalCardArray.splice(action.cardIndex, 1)
            toReturn[action.columnIndex].cards = finalCardArray
            
        return toReturn

        case 'DELETE_COLUMN':
            return [...state].filter(column => column.title !== action.columnName)

        case 'CREATE_COLUMN':
            return( [...state].concat({title: action.columnName, cards: []}))

        case 'CREATE_CARD':
            if(action.cardBody && action.cardName){
                let toReturn = [...state]
                toReturn[action.columnIndex].cards = [...state[action.columnIndex].cards.concat({header: action.cardName, body: action.cardBody})]
                return toReturn
            }
            return state

        case 'MODIFY_CARD':
            if(action.cardBody && action.cardName){
                let toReturn = [...state]
                toReturn[action.columnIndex].cards[action.cardIndex] = {header: action.cardName, body: action.cardBody}
                return toReturn
            }
            return state
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;