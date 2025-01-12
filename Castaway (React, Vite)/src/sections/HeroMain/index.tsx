import { ListedApps } from "../../components"
import { PageBlock } from "../../components/Layout/PageBlock";
import style from './styles.module.css';
import heroMain from '../../assets/images/hero-main.png';
 

export const HeroMain = () => {
    return (
        <PageBlock className={style['hero-main']}>
        <div className={style['hero-main__image']}>
          <img src={heroMain} alt="hero pic" />
        </div>
        <div className={style['hero-main__details']}>
          <h1 className={style['hero-main__title']}>
            Take your podcast to the
            <br />
            <span className={style['hero-main__title--higlighed']}>next</span>
            <strong className={style['hero-main__title--strong']}> level</strong>
          </h1>
          <ListedApps />    
        </div>
      </PageBlock>
    )
}