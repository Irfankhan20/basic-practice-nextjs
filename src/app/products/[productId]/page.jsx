const DynamicProductPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>this is dynamic product page of {params.productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
