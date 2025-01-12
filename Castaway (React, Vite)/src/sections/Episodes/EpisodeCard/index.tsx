import style from './styles.module.css'
import { Tag } from '../../../components/Tag'
import { TEpisodeCardProps } from './type'

export const EpisodeCard = ({
    link,
    preview,
    tag,
    subtitle,
    title,
    description,
    linkText = 'View Episode Details'
} : TEpisodeCardProps) => {
    return (
        <article className={style['episode-card']}>
            <a href={link} className={style['episode-card__hidden-link']}></a>
            <div className={style['episode__card-img']}>
                <img src={preview} alt="episode3"/>
            </div>
            <div className={style['episode__card-body']}>
                <div className={style['episode__card-tag']}>
                    <Tag tagText={tag} />
                </div>
                <div className={`${style['episode__card-subtitle']} subtitle`}>{subtitle}</div>
                <h3 className={style['episode__card-title']}>{title}</h3>
                <p className={style['episode__card-description']}>{description}</p>
                <footer className={style['episode__card-footer']}>
                    <a href={link} className="button">{linkText}</a>
                </footer>                          
            </div>
        </article>
    )
}