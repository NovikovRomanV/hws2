const initState: InitStateTypeRED = {
    themeId: 1,
}

export type InitStateTypeRED = { themeId: number }

export const themeReducer = (state = initState, action: ActionType): InitStateTypeRED => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":

            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ActionType = ChangeThemeIdType

type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number)  => ({ type: 'SET_THEME_ID', id } as const) // fix any
