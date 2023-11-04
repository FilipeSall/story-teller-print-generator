import { useState, ChangeEvent, useRef } from 'react';
import { AiFillPrinter } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { useGlobalContext } from '../../CreateContext';
import '../../App.css';
import '../../css/cold_theme.css';
import ThemeBtn from '../theme_btn/ThemeBtn';
import FontBtn from '../font_btn/FontBtn';
import arialSvg from '../../assets/arial.webp';
import timessvg from '../../assets/times.webp';
import timesaltsvg from '../../assets/timesAlt.webp';
import arialaltsvg from '../../assets/arialAlt.webp';
import courierSvg from '../../assets/courier.webp';
import courierAltSvg from '../../assets/courierAlt.webp';
import robotoSvg from '../../assets/roboto.webp';
import robotoAltSvg from '../../assets/robotoAlt.webp';
import hotface from '../../assets/hotface.webp';
import coldface from '../../assets/coldface.webp';
import IconBtn from '../icon_btn/IconBtn';
import StoryContainer from '../story_container/StoryContainer';
import latoSvg from '../../assets/lato.webp';
import latoAltSvg from '../../assets/latoAlt.webp';
import ThemeBackground from '../theme_background/ThemeBackground';

function App() {
    const [text, setText] = useState<string>('');
    const [title, setTitle] = useState<string>("");
    const [stories, setStories] = useState<Array<{ title: string; text: string, id: number }>>([]);
    const [error, setError] = useState<boolean>(false);
    const [nextId, setNextId] = useState(1);
    const { theme, font } = useGlobalContext();
    const divRef = useRef(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setError(false);
    }

    const titleHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        setError(false);
    }

    const createStory = () => {
        if (title.length > 0 || text.length > 0) {
          const newStory = { title, text, id: nextId };
          setStories([...stories, newStory]);
          setNextId(nextId + 1);
          setTitle('');
          setText('');
        } else {
          setError(true);
        }
      }

    const handleCapture = () => {
        if (stories.length > 0) {
            window.print();
        } else {
            setError(true);
        }
    };

    const cleanPage = () => {
        setStories([])
    }

    return (
        <main className={`main_container theme_${theme}`}>
            <ThemeBackground />
            <div className='main_container-wrapper '>
                <div className='title_container'>
                    <h1 className={`main_title main_title-${theme}`}>Olá, Letícia</h1>
                    <div className='themeBtn_container'>
                        <ThemeBtn themeBtn='hot' />
                        <ThemeBtn themeBtn='cold' />
                    </div>
                </div>
                <input type='text' onChange={titleHandleChange} className={`${error && 'error'} input-${theme}`} value={title} placeholder='Digite o título' />
                <textarea onChange={handleChange} value={text} placeholder='Digite a história' className={`${error && 'error'} textarea-${theme}`} />
                {error && <p className={`error_mensage error-${theme}`}>Pelo menos um campo precisa ser preenchido</p>}
                <button onClick={createStory} className='create_story-btn'>Criar história</button>
                <div ref={divRef} className={`print_container ${font}_font`}>
                    <div className={`button_container ${theme === 'cold' ? 'button_container-cold' : 'button_container-hot'}`}>
                        {theme === 'cold' ? <div className='print_container-font--wrapper'>
                            <IconBtn icon={coldface} />
                            <FontBtn text='arial' icon={arialSvg} />
                            <FontBtn text='times' icon={timessvg} />
                            <FontBtn text='courier' icon={courierSvg} />
                            <FontBtn text='roboto' icon={robotoSvg} />
                            <FontBtn text='lato' icon={latoSvg} />
                        </div> :
                            <div className='print_container-font--wrapper'>
                                <IconBtn icon={hotface} />
                                <FontBtn text='arial' icon={arialaltsvg} />
                                <FontBtn text='times' icon={timesaltsvg} />
                                <FontBtn text='courier' icon={courierAltSvg} />
                                <FontBtn text='roboto' icon={robotoAltSvg} />
                                <FontBtn text='lato' icon={latoAltSvg} />
                            </div>
                        }
                        <div className='print_container-button--wrapper'>
                            <button className='print_container-button'><AiFillPrinter size={28} onClick={handleCapture} /></button>
                            <button className='print_container-button'><MdCleaningServices size={28} onClick={cleanPage} /></button>
                        </div>
                    </div>
                  <StoryContainer setStories={setStories} stories={stories} />
                  
                </div>
            </div>
        </main>
    );
}

export default App;
