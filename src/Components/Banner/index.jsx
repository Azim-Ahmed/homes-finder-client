// import styles from '../../styles/Banner.module.css';
// const Banner = () => {
//   return <div id="home" className={styles.parallax}></div>;
// };

// export default Banner;

//for next update :
//https://image-component.nextjs.gallery/background
//https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image
//https://inkplant.com/code/responsive-parallax-images
//https://uharston.medium.com/next-js-image-optimization-on-background-images-65de18ea03f5
//https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
//https://nextjs.org/docs/api-reference/next/image

import { Parallax } from 'react-parallax';

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  display: 'none',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const Banner = () => {
  return (
    <div>
      <Parallax bgImage="https://i.ibb.co/JzcY3Bm/house1.jpg" strength={100}>
        <div style={{ height: '750px' }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
