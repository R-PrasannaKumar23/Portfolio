import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Softenger from '../ExperienceProfile/Softenger';
import AmkSolutions from '../ExperienceProfile/AmkSolutions';
import Nautica from '../ExperienceProfile/Nautica';
import Fuady from '../ExperienceProfile/Fuady';
import Florescer from '../ExperienceProfile/Florescer';
import YaliInfo from '../ExperienceProfile/YaliInfo';


const Modal = props => {
    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };

    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    };
    const refreshData = (data) => {
        props.callbackFn(data);
        props.closeModal()
    };
    // static displayName = Modal.name;
    return (
        <div className="modal" id="myModal" style={divStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title fontBold">{props.modalName}</h4>
                        <a data-bs-dismiss="modal" onClick={closeModal}> <Image src="/images/close.svg" className="img-fluid" /></a>
                    </div>
                    <div className="modal-body px-3 pt-2 pb-4">
                        {props.modalName == 'Softenger India Pvt Ltd' &&
                            <Softenger callbackFn={refreshData} editRec={props.editRec} />
                        }
                        {props.modalName == 'Amk Solutions' &&
                            <AmkSolutions callbackFn={refreshData} editRec={props.editRec} />
                        }
                        {props.modalName == '360 Nautica Tech Venture' &&
                            <Nautica callbackFn={refreshData} editRec={props.editRec} />
                        }
                        {props.modalName == 'Fuady Technology Solutions' &&
                            <Fuady callbackFn={refreshData} editRec={props.editRec} />
                        }
                        {props.modalName == 'Florescer Infotech' &&
                            <Florescer callbackFn={refreshData} editRec={props.editRec} />
                        }
                        {props.modalName == 'Yali Infotech' &&
                            <YaliInfo callbackFn={refreshData} editRec={props.editRec} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;

