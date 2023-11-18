import { ChangeEvent, useState } from 'react';
import './configBtn.css';
import { GrConfigure } from "react-icons/gr";
import { useGlobalContext } from '../../CreateContext';

function ConfigBtn() {

    const [show, setShow] = useState(false);
    const { user, setUser } = useGlobalContext();
    const [changeUser, setChangeUser] = useState('');
    const [error, setError] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeUser(e.target.value);
        setError(false);
    }

    const handleClick = () => {
        if (changeUser.length > 0) {
            setUser(changeUser);
            setChangeUser('')
        } else{
            setError(true)
        }
    }

    return (
        <div className='config_container'>
            <button className='config_btn' onClick={() => setShow(!show)}>
                <GrConfigure fill='#808080' size={28} />
            </button>
            {show &&
                <div className='config_form'>
                    <label>Não é {user}?</label>
                    <input type='text' onChange={handleChange} value={changeUser} className={`${error && 'error'}`} placeholder='Qual seu nome' />
                    <button onClick={handleClick}>Alterar</button>
                </div>
            }
        </div>
    )
}

export default ConfigBtn