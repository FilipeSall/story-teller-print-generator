import { useGlobalContext } from '../../CreateContext';
import '../../css/cold_theme.css';
import mountain_01 from '../../assets/cold_theme/monutain_01.webp';
import mountain_02 from '../../assets/cold_theme/monutain_02.webp';
import mountain_03 from '../../assets/cold_theme/monutain_03.webp';
import mountain_04 from '../../assets/cold_theme/monutain_04.webp';
import trees from '../../assets/cold_theme/trees.webp';
import cable from '../../assets/cold_theme/cable_cars.webp';
import house from '../../assets/cold_theme/house.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ThemeBackground() {

    const { theme } = useGlobalContext();



    return (
        <>
            {theme === 'cold' && (
                <section className='theme_container-wrapper'>
                    <img src={mountain_01} id='m1' />
                    <img src={mountain_02} id='m2' />
                    <img src={mountain_03} id='m3' />
                    <img src={mountain_04} id='m4' />
                    <img src={trees} id='tr' />
                    <img src={cable} id='crs' />
                    <img src={house} id='house' />
                </section>
            )}
        </>
    )
}

export default ThemeBackground