/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const AddWidgetDialog = ({
  widgets,
  isModalOpen,
  onRequestClose,
  onWidgetSelect,
}) => {
  const widgetItems = Object.keys(widgets).map(widget => (
    <div className="list-group" key={widget}>
      <a href="#" className="list-group-item" onClick={() => onWidgetSelect(widget)}>
        <h6 className="list-group-item-heading">{widgets[widget].title}</h6>
      </a>
    </div>
  ));
  return (
    <Modal
      className="Modal__Bootstrap modal-dialog"
      isOpen={isModalOpen}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onRequestClose}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">Add a widget</h4>
        </div>
        <div className="modal-body">
          <h5>Pick a widget to add</h5>
          {widgetItems}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={onRequestClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

AddWidgetDialog.propTypes = {
  widgets: PropTypes.shape({}),
  isModalOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onWidgetSelect: PropTypes.func,
};

AddWidgetDialog.defaultProps = {
  widgets: {},
  isModalOpen: false,
  onRequestClose: () => {},
  onWidgetSelect: () => {},
};

export default AddWidgetDialog;
