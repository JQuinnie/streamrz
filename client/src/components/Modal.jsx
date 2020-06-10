import React from 'react';
import ReactDOM from 'react-dom';

// event.stopPropagation will stop event from bubbling up, if onClick does not get handled it will bubble up until it is handled
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
