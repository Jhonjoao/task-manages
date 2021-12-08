import React from "react";
import { BsXSquare } from "react-icons/bs";

function ModalAdd (props) {

    return(
        <div className="modalMask">
            <div className='modal'>
                <button className="closeModal" onClick={props.closeModal}>
                    <BsXSquare />
                </button>
                {props.children}
            </div>
        </div>
    )
}

export default ModalAdd;