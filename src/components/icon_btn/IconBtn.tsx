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
      };

    const themeText = themeMap[theme] || '';
    const fontText = fontMap[font] || '';

    useEffect(() => {
        if (show) {
            const randomIndex = Math.floor(Math.random() * goodVibeMessages.length);
            setRandomMessageIndex(randomIndex);
        }
    }, [show])

    return (
        <>
            {show &&
                <div className={styles.statusMessage}>
                    <p><span className={styles.bold}>Tema:</span>{themeText}</p>
                    <p><span className={styles.bold}>Fonte ativa:</span>{fontText}</p>
                    <p className={styles.goodvibesmessage}>{goodVibeMessages[randomMessageIndex]}</p>
                </div>}

            <button className={styles.btn} onClick={handleClick}>
                <img src={icon} />
            </button>
        </>
    )
}

export default IconBtn