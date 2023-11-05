import { useGlobalContext } from '../../CreateContext';
import '../../css/cold_theme.css';
import '../../css/hot_theme.css';

import rock from '../../assets/hot_theme/rock.webp';
import bottom from '../../assets/hot_theme/bottom.webp';
import lamp from '../../assets/hot_theme/lamp.webp';
import masjid from '../../assets/hot_theme/masjid.webp';

import mountain_01 from '../../assets/cold_theme/monutain_01.webp';
import mountain_02 from '../../assets/cold_theme/monutain_02.webp';
import mountain_03 from '../../assets/cold_theme/monutain_03.webp';
import mountain_04 from '../../assets/cold_theme/monutain_04.webp';
import trees from '../../assets/cold_theme/trees.webp';
import cable from '../../assets/cold_theme/cable_cars.webp';
import house from '../../assets/cold_theme/house.webp';
import { useEffect, useRef } from 'react';


function ThemeBackground() {

    const { theme } = useGlobalContext();

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (theme === 'cold') {
          const handleScroll = () => {
            const scrollY = window.scrollY;
            const elements = containerRef.current?.querySelectorAll('img');
    
            elements?.forEach((element) => {
              if (element.id === 'crs') {
                const speedX = 0.2;
                const translateX = scrollY * speedX;
                element.style.transform = `translateX(${translateX}px)`;
              } else {
                const speedY = 0.2;
                const translateY = scrollY * speedY;
                element.style.transform = `translateY(${translateY}px)`;
              }
            });
          };
    
          window.addEventListener('scroll', handleScroll);
    
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        } else if (theme === 'hot') {
          const handleScrollHot = () => {
            const scrollY = window.scrollY;
            const elements = containerRef.current?.querySelectorAll('img');
    
            elements?.forEach((element) => {
              const speedY = 0.4;
              const translateY = scrollY * speedY;
              element.style.transform = `translateY(${translateY}px)`;
            });
          };
    
          window.addEventListener('scroll', handleScrollHot);
    
          return () => {
            window.removeEventListener('scroll', handleScrollHot);
          };
        }
      }, [theme]);
    return (
        <>
            {theme === 'cold' && (
                <section className='theme_container-wrapper' ref={containerRef}>
                    <img src={mountain_01} id='m1' />
                    <img src={mountain_02} id='m2' />
                    <img src={mountain_03} id='m3' />
                    <img src={mountain_04} id='m4' />
                    <img src={trees} id='tr' />
                    <img src={cable} id='crs' />
                    <img src={house} id='house' />
                </section>
            )}
            {
                theme==='hot' && (
                    <section className='theme_hotcontainer-wrapper' ref={containerRef}>
                        <img src={rock} id='rock' />
                        <img src={masjid} id='masjid' />
                        <img src={lamp} id='lamp' />
                        <img src={bottom} id='bottom' />
                    </section>
                )
            }
        </>
    )
}

export default ThemeBackground