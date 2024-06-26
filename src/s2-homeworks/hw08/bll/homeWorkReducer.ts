import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload==='up'){
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if(action.payload==='down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
             return state // need to fix
        }
        case 'check': {
            // let newState = [...state].sort((a,b)=> a.age > b.age ? 1 : -1)
            return state.filter((el)=> el.age >= action.payload ) // need to fix
        }
        default:
            return state
    }
}
