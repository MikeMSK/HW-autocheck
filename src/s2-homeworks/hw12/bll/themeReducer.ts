type initialStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: initialStateType = initState, action: ActionCreatorType): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type ActionCreatorType = { type: string, id: number }

export const changeThemeId = (id: number): ActionCreatorType => (
    {
        type: 'SET_THEME_ID',
        id
    }
) // fix any
