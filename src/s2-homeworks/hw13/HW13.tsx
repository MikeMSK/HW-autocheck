import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import success400 from './images/400.svg'
import success500 from './images/500.svg'
import error from './images/error.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [dis, setDis] = useState(false)

    const send = (x?: boolean | null) => () => {

        const url = x === null
            ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
            : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setDis(true)

        axios.post(url, {success: x})
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    setCode('Код 200!')
                    setInfo(res.data.info)
                    setText(res.data.errorText)
                    setImage(success200)
                    setDis(false)
                }
            })
            .catch((e) => {
                console.log(e)
                if (e.response.status === 400) {
                    setCode('Ошибка 400!')
                    setInfo(e.response.data.info)
                    setText(e.response.data.errorText)
                    setImage(success400)
                    setDis(false)
                } else if (e.response.status === 500) {
                    setCode('Ошибка 500!')
                    setInfo(e.response.data.info)
                    setText(e.response.data.errorText)
                    setImage(success500)
                    setDis(false)
                } else {
                    setCode('Error!')
                    setInfo(e.name)
                    setText(e.message)
                    setImage(error)
                    setDis(false)
                }
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw13-send-true'}
                                 onClick={send(true)}
                                 xType={'secondary'}
                                 disabled={dis}
                        // дописать

                    >
                        Send true
                    </SuperButton>
                    <SuperButton id={'hw13-send-false'}
                                 onClick={send(false)}
                                 xType={'secondary'}
                                 disabled={dis}
                        // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton id={'hw13-send-undefined'}
                                 onClick={send(undefined)}
                                 xType={'secondary'}
                                 disabled={dis}
                        // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton id={'hw13-send-null'}
                                 onClick={send(null)} // имитация запроса на не корректный адрес
                                 xType={'secondary'}
                                 disabled={dis}
                        // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image}
                                       className={s.image}
                                       alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'}
                             className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'}
                             className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'}
                             className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
