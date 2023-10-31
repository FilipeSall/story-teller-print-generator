import { useGlobalContext } from '../../CreateContext';
import styles from './ThemeBtn.module.css';

interface ThemeBtn {
    themeBtn: string,
}

function ThemeBtn({ themeBtn }: ThemeBtn) {

    const {setTheme} = useGlobalContext();

    function handleClick(){
        setTheme(themeBtn);
    }
    
    return (
        <button className={`${styles.themeBtn} ${themeBtn === 'cold' ? styles.themeCold : styles.themeHot}`} value={themeBtn} onClick={handleClick}>
            
        </button>
    )
}

export default ThemeBtn