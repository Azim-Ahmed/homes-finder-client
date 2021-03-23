import Head from 'next/head';

const SEO = ({ title, name, content, children }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name={name} content={content} />
      {children}
    </Head>
  );
};

export default SEO;
