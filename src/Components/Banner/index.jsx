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
