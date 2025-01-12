import logo from '../../../assets/images/logo.svg'
import style from './styles.module.css'

export const Header = () => {
    return (
        <>
            <div className="header__logo">
                <img src={logo} alt="logo"/>
            </div>
                <nav className="header__nav">
                    <ul className={style['header__nav-list']}>
                        <li>
                            <a href="#" className="active">Home</a>
                        </li>
                        <li>
                            <a href="#" className="">Episodes</a>
                        </li>
                        <li>
                            <a href="#" className="">About</a>
                        </li>
                        <li>
                            <a href="#" className="">Contact</a>
                        </li>
                    </ul>
                </nav>
        </>
    )
}   