import Image from 'next/image';
const Footer = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-4 mt-5">
      <div className="text-center mt-4">
        <Image src="/favicon.png" width={200} height={70} alt="logo image" />
        <p>
          Contact Us <br /> Info@VegahomesFinder.com <br /> 1+(613)-413-7941{' '}
          <br /> ©2020 by Vega Homes Finder.
        </p>
      </div>
    </div>
  );
};

export default Footer;
