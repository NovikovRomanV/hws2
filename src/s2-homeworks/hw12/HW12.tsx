import React, {useEffect, useReducer} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {changeThemeId, themeReducer} from './bll/themeReducer'


/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса

    const [themeId, dispatchthemeId] = useReducer(themeReducer,{ themeId: 1 })

    const change = (id: number) => { // дописать функцию
        dispatchthemeId(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId.themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'} className={s.hw12}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <p>выбери тему:</p>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    onChangeOption={change}
                    options={themes}
                />
            </div>
        </div>
    )
}

export default HW12
