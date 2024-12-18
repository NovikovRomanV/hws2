import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import s from './HW10.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLodingValue = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const isLoading = false

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(!isLoading))
            console.log('dispatch first ' + !isLoading)
        // setTimeout
        setTimeout(()=>{
            dispatch(loadingAC(isLodingValue))
            console.log('dispatch timeout ' + isLodingValue)
        },1500)
    }

    return (
        <div id={'hw10'} >
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLodingValue ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <div className={s.hw10SuperButton}>
                        <SuperButton
    className={'hw10-button-start-loading'}
                            // id={}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    </div>

                )}
            </div>
        </div>
    )
}

export default HW10
