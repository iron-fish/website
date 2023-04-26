export default function Noop() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: `/learn/blog`,
      permanent: false,
    },
  };
}
