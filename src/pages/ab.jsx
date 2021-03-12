const ab = ({ countries }) => {
  console.log(countries);
  return <div>done</div>;
};

export default ab;

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
