import { useState, ChangeEvent, useRef } from 'react';
import { AiFillPrinter } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { useGlobalContext } from '../../CreateContext';
import '../../App.css';
import ThemeBtn from '../theme_btn/ThemeBtn';
import icesvg from '../../assets/ice.svg';
import fireSvg from '../../assets/fire.svg';
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
import termometrocold from '../../assets/termometrocold.svg';
import termometrohot from '../../assets/termometrohot.svg';

function App() {
    const [text, setText] = useState<string>('');
    const [title, setTitle] = useState<string>("");
    const [stories, setStories] = useState<Array<{ title: string; text: string, id?: number }>>([]);
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

    const deleteStory = (id: number | undefined) => {
        if (id !== undefined) {
            const updatedStories = stories.filter(story => story.id !== id);
            setStories(updatedStories);
        }
    };

    return (
        <main className={`main_container theme_${theme}`}>
            {theme === 'cold' ?
                <>
                    <svg width="100" height="100" className='svg'>
                        <image href={icesvg} x="0" y="0" width="100" height="100" />
                    </svg>
                    <img className='imagetermo' src={termometrocold} alt='termometro com baixa temperatura' />
                </>
                :
                <>
                    <svg width="100" height="100" className='svg'>
                        <image href={fireSvg} x="0" y="0" width="100" height="100" />
                    </svg>
                    <img className='imagetermo' src={termometrohot} alt='termometro com baixa temperatura' />
                </>
            }

            <div className='title_container'>
                <h1 className={`main_title main_title-${theme}`}>Olá, Letícia</h1>
                <div className='themeBtn_container'>
                    <ThemeBtn themeBtn='hot' />
                    <ThemeBtn themeBtn='cold' />
                </div>
            </div>
            <input type='text' onChange={titleHandleChange} className={`${error && 'error'}`} value={title} placeholder='Digite o título' />
            <textarea onChange={handleChange} value={text} placeholder='Digite a história' className={`${error && 'error'}`} />
            {error && <p className='error_mensage'>Pelo menos um campo precisa ser preenchido</p>}
            <button onClick={createStory} className='create_story-btn'>Criar história</button>

            <div ref={divRef} className={`print_container ${font === 'arial' && 'arial_font'} ${font === 'times' && 'times_font'} ${font == 'courier' && 'courier_font'} ${font === 'roboto' && 'roboto_font'}`}>
                <div className={`button_container ${theme === 'cold' ? 'button_container-cold' : 'button_container-hot'}`}>
                    {theme === 'cold' ? <div className='print_container-font--wrapper'>
                        <IconBtn icon={coldface} />
                        <FontBtn text='arial' icon={arialSvg} />
                        <FontBtn text='times' icon={timessvg} />
                        <FontBtn text='courier' icon={courierSvg} />
                        <FontBtn text='roboto' icon={robotoSvg} />
                    </div> :
                        <div className='print_container-font--wrapper'>
                            <IconBtn icon={hotface} />
                            <FontBtn text='arial' icon={arialaltsvg} />
                            <FontBtn text='times' icon={timesaltsvg} />
                            <FontBtn text='courier' icon={courierAltSvg} />
                            <FontBtn text='roboto' icon={robotoAltSvg} />
                        </div>
                    }
                    <div className='print_container-button--wrapper'>
                        <button className='print_container-button'><AiFillPrinter size={28} onClick={handleCapture} /></button>
                        <button className='print_container-button'><MdCleaningServices size={28} onClick={cleanPage} /></button>
                    </div>
                </div>
                {stories.map((story, index) => (
                    <div key={index} className='story_container'>
                        <h1 className='story_title'>{story.title}</h1>
                        <p className='story_text'>{story.text}</p>
                        <button className='remove_unique-story--btn' onClick={() => deleteStory(story.id)}
                        >
                         <FaTrashAlt size={22} fill='#808080' />
                        </button>
                        <button className='edit_story-btn'> <BsFillPencilFill /></button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;
