import Head from "next/head";

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

const Reviews = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Fat burgers | Main page</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <div>
        <h1>Feedback clients</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((el, i) => {
              return (
                <div key={el.id} className="review">
                  {el.id} {`${el.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
