import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../CreateContext';
import styles from './iconbtn.module.css';
import { goodVibeMessages } from './goodmessagesarray';

interface IconBtnProps {
    icon: string,
}

function IconBtn({ icon }: IconBtnProps) {

    const { theme, font } = useGlobalContext();
    const [show, setShow] = useState(false);
    const [randomMessageIndex, setRandomMessageIndex] = useState(0);

    const handleClick = () => {
        setShow(!show);
    }

    useEffect(() => {
        if(show){
            const randomIndex = Math.floor(Math.random() * goodVibeMessages.length);
            setRandomMessageIndex(randomIndex);
        }
    }, [show])

    return (
        <>
            {show &&
                <div className={styles.statusMessage}>
                    <p><span className={styles.bold}>Tema:</span>{theme === 'hot' ? 'Calor' : 'Frio'}</p>
                    <p><span className={styles.bold}>Fonte ativa:</span>{font === 'arial' && 'Arial'}{font === 'times'&& 'Times'}{font === 'courier' && 'Cursive'}{font === 'roboto' && 'Open sans'}</p>
                    <p className={styles.goodvibesmessage}>{goodVibeMessages[randomMessageIndex]}</p>
                </div>}

            <button className={styles.btn} onClick={handleClick}>
                <img src={icon} />
            </button>
        </>
    )
}

export default IconBtn