import { useState } from "react";
import Modal from "../Modal/Modal";

const ShowProduct = (props) => {
  const { title, price, image } = props.product;
  const [modal, setModal] = useState({});
  
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
            <label onClick={() => {setModal(props.product)}} htmlFor="my-modal-3" className="btn btn-primary btn-outline">
              Details
            </label>
            <button
              onClick={() => {
                props.buyNow(price, title);
              }}
              className="btn btn-secondary btn-outline"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {modal.id && (<Modal modal={modal} setModal={setModal}></Modal>)}
      
    </div>
  );
};

export default ShowProduct;
