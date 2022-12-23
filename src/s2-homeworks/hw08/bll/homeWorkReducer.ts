import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === "up"
                ? state.map(st => st).sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1
                    } else {
                        return 0
                    }
                })
                : state.map(st => st).sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    } else {
                        return 0
                    }
                })
        }
        case 'check': {
            return state.filter(st => st.age > action.payload).sort((a, b) => {
                return a.age - b.age
            })
        }
        default:
            return state
    }
}
