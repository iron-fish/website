import { GetServerSideProps } from "next";

export default function Noop() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  if (props.params?.path) {
    const kebabPath = Array.isArray(props.params?.path)
      ? props.params?.path.join("-")
      : props.params?.path;

    return {
      redirect: {
        destination: `/learn/blog/${kebabPath}`,
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: `/learn/blog`,
      permanent: false,
    },
  };
};
