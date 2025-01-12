import { PageBlock } from "../../components/Layout/PageBlock"
import style from './styles.module.css'
import { useState, FormEvent } from "react";

export const Subscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        // имитация работы с сервером (бэкэнд)
        fetch('API_URL', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email})
        });

        console.log(name, 'name')
        console.log(email, 'email')

    }
    
    return (
        <PageBlock>
            <div className={style['subscribe-form']}>
                    <div className={style['subscribe-form__aside']}>
                        <div className="subtitle">Email Newsletter</div>
                        <div className={style['subscribe-form__title']}>Subscribe for updates</div>
                    </div>
                    <div className={style['subscribe-form__body']}>
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="input" placeholder="Name" />
                        </div>
                        <div className="form-row">
                            <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" className="input" placeholder="Email" />
                        </div>
                        <div className="form-row">
                            <button className="button">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
        </PageBlock>
    )
}