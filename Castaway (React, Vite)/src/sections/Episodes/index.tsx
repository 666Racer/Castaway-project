import { PageBlock } from "../../components/Layout/PageBlock"
import style from './styles.module.css'
import { episodesList } from "./data"
import { EpisodeCard } from "./EpisodeCard"

export const Episodes = () => {
    return(
         <PageBlock>
            <header className={style['episodes__header']}>
                    <div className={style['episodes__header--title']}>
                        Latest Episodes
                    </div>
                    <a href="#" className="button">View all episodes</a>
            </header>
            <ul className={style['episodes-list']}>
                {episodesList.map((episode, index) => {
                    return (
                        <li key={index}>
                            <EpisodeCard {...episode} />
                        </li>
                    )
                })}
            </ul>
         </PageBlock>
    )
}