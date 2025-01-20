import React from 'react'
import downIcon from '../../img/Polygon4.svg'
import upIcon from '../../img/Polygon5.svg'
import noneIcon from '../../img/Polygon7.svg'
// добавить в проект иконки и импортировать
// export const downIcon = '[\\/]'
// export const upIcon = '[/\\]'
// export const noneIcon = '[--]'


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
if(sort === down){
    return up
} else if (sort === up){
    return ''
} else {return down}
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                 id={id + '-icon-' + sort}
                src={icon}
                alt='arrow'
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
