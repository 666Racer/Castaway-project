import type { ListedAppsT } from "./type"
import { LISTED_APPS } from "./data"
import style from './styles.module.css';

export const ListedApps = ({title}: ListedAppsT) => {
    return (
        <div className={style['listed-apps']}>
            {title && (
                <div className={style['listed-apps__title']}>
                    {title}
              </div>
            )}
        <ul className={style['listed-apps__list']}>
            {LISTED_APPS.map((app, index) => {
                return (
                    <li key={index}>
                        <a href={app.url} target="_blank" className={style['listed-apps__list-item']}>
                            <img src={app.icon} alt="app icon" />
                        </a>
                    </li>
                )
            })}
        </ul>
      </div>
    )
}