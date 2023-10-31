import { useGlobalContext } from '../../CreateContext';
import styles from './FontBtn.module.css';
import '../../App.css'

interface TypeFontBtn {
    icon: string,
    text: string,
}

function FontBtn({ icon, text }: TypeFontBtn) {

    const {setFont, font} = useGlobalContext(); 

    function handleFontChange(){
        setFont(text);
    }

    return (
        <button className={`${styles.button} ${font}_border`} onClick={handleFontChange}>
            <img src={icon} alt={text} />
        </button>
    )
}

export default FontBtn