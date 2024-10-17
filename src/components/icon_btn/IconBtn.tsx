import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../CreateContext';
import styles from './iconbtn.module.css';
import { goodVibeMessages } from './goodmessagesarray';

interface IconBtnProps {
    icon: string,
}

function IconBtn({ icon }: IconBtnProps) {

    const { theme, font } = useGlobalContext();
    const [show, setShow] = useState(window.innerWidth > 768);
    const [randomMessageIndex, setRandomMessageIndex] = useState(0);

    const handleClick = () => {
        setShow(!show);
    }

    const themeMap: Record<string, string> = {
        hot: 'Calor',
        cold: 'Frio',
    };

    const fontMap: Record<string, string> = {
        arial: 'Arial',
        times: 'Times',
        courier: 'Cursive',
        roboto: 'Open sans',
        lato: 'Lato',
        metodo: 'Método'
    };

    const themeText = themeMap[theme] || '';
    const fontText = fontMap[font] || '';

    useEffect(() => {
        if (show) {
            const randomIndex = Math.floor(Math.random() * goodVibeMessages.length);
            setRandomMessageIndex(randomIndex);
        }
    }, [show])

    const currentMessage = goodVibeMessages[randomMessageIndex];

    let messageClass = styles.goodvibesmessage;

    if (currentMessage.length >= 75) {
        messageClass = `${styles.superLongMessage}`;
    } else if (currentMessage.length > 20) {
        messageClass = `${styles.longMessage}`;
    } else {
        messageClass = `${styles.shortMessage}`;
    }

    return (
        <>
            {show && (
                <div className={styles.statusMessage}>
                    <p><span className={styles.bold}>Tema:</span>{themeText}</p>
                    <p><span className={styles.bold}>Fonte ativa:</span>{fontText}</p>
                    <p className={messageClass}>
                        {currentMessage}
                    </p>
                </div>
            )}

            <button className={styles.btn} onClick={handleClick}>
                <img src={icon} alt="Icon" />
            </button>
        </>
    );
}
export default IconBtn