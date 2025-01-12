import { SOCIALS } from "./data"
import style from './styles.module.css'

export const Socials = () => (
    <ul className={style['socials']}>
        {SOCIALS.map((social, index) => {
            return (
                <li key={index}>
                    <a href={social.url} className={style['social__link']}>
                        <img src={social.icon}alt=""/>
                    </a>
                </li>
            )
        })}
    </ul>
)

