export type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false,
}

export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            console.log('action ' + action.isLoading)
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type ActionType = LoadingActionType

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
