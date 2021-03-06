import React from "react";

function Card({icon, title, children}) {
  return (
    <div className="Question">
      <div className="Question__tag">{""}</div>
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon} ivan`} aria-hidden="true"/> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
