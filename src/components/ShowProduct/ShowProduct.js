const ShowProduct = (props) => {
  const { title, price, image } = props.product;
  return (
    <div className="container mx-auto py-10">
      <div className="card bg-base-100 shadow-xl border border-black">
        <figure>
          <img className="h-[300px] w-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title.slice(0, 25) + "..."}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary btn-outline">Detail</button>
            <button className="btn btn-secondary btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
