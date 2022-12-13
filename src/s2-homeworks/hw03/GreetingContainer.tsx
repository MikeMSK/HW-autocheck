import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string,
                            setError: (error: string) => void,
                            setName: (name: string) => void,
                            addUserCallback: (name: string) => void) => {
    if (!name.trim()) {
        setError("Ошибка: введите корректное имя!")
        setName('')
    } else {
        addUserCallback(name)
        setName('')
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string,
                           setError: (error: string) => void) => {
    if (!name.trim()) {
        setError("Ошибка: введите имя!")
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>,
                            addUser: () => void) => {
    e.key === 'Enter' && addUser()
    // если нажата кнопка
    // Enter -
    // добавить
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }

    const addUser = () => pureAddUser(name, setError, setName, addUserCallback)
    const onBlur = () => pureOnBlur(name, setError)
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[0] ? users[0].name + " !" : ""

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
