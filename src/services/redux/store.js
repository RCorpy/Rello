import {createStore} from 'redux'

const initialState = [
    {title: "To Do",
    cards: [
        {header:"Task1",
        body:"body1"
    },
        {header:"Task2",
            body:"body2"
        }
    ]
},
    {title: "Doing",
    cards: [
        {header:"Doing1",
        body:"body3"
    },
        {header:"Doing2",
            body:"body4"
        }
    ]
},
{title: "Done",
    cards: [
        {header:"Finished 1",
        body:"body1"
    },
        {header:"Finished 2",
            body:"body2"
        }
    ]
}
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

        case 'MOVE_CARD':
            if(action.initialPos !== action.finalPos){
                let toReturn = [...state]
                let movedItem = toReturn[action.initialPos[0]].cards.splice(action.initialPos[1], 1)[0]
                if (!toReturn[action.initialPos[0]].cards){ toReturn[action.initialPos[0]].cards = {}}
                toReturn[action.finalPos[0]].cards.splice(action.finalPos[1],0,movedItem)
                return toReturn
            }
            return state
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;