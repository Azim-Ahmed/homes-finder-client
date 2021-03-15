import { useRouter } from 'next/router';

const SingleService = ({ serviceData }) => {
  const router = useRouter();
  console.log(serviceData.service);
  return (
    <div>
      <h1>Service Section</h1>
    </div>
  );
};

export default SingleService;

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(
    `http://localhost:2000/api/services/getAllServices/${params.id}`
  );
  const serviceData = await res.json();

  return {
    props: {
      serviceData,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `http://localhost:2000/api/services/getAllServices/:id`
  );
  const services = await res.json();
  console.log(services.service);
  const paths = [];
  services.service.forEach((service) => paths.push(`/book/${service._id}`));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
