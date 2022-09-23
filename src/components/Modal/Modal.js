const Modal = (props) => {
    // console.log(props.modal);
    const {title, description, image} = props.modal;

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => props.setModal({})}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={image} className="block mx-auto w-[300px]" alt="" />
          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <p className="py-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
