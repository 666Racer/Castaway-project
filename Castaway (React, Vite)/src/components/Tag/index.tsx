import style from './styles.module.css'
import type { TTagProps } from './type'

export const Tag = ({tagText}: TTagProps) => (
    <div className={style['tag']}>{tagText}</div>
)