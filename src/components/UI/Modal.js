import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) =>{
    return (
    <div className={classes.backdrop} onClick={props.modalCloseBtnHandler}/>
    )
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}> {props.children} </div>
        </div>
    )
}

// to konw where to portal
const portalElement = document.getElementById('overlays');

const Modal = props =>{
    // const modalBackdropHandler = () =>{
    //     props.setShowModal(false);
    // }
    return(
        <React.Fragment>

            {/* without portal
            <Backdrop/>
            <ModalOverlay> {props.children} </ModalOverlay> */}

            {ReactDOM.createPortal(<Backdrop  modalCloseBtnHandler={props.modalCloseBtnHandler} />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
    )
}

export default Modal;