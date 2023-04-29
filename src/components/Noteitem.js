import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, incidunt. Magnam maiores est natus adipisci
            consequatur illo, molestias esse necessitatibus officiis, cupiditate
            quam molestiae. Vel adipisci deserunt sint ipsam numquam.
          </p>
          <i className="fa-solid fa-trash mx-3"></i>
          <i className="fa-solid fa-file-pen mx-3"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
