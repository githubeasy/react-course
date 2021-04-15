function Modal(props){
    function cancelModalHandler(){
        props.onCancel();
    }

    function confirmModalHandler(){
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <button className='btn' onClick={confirmModalHandler}>Confirm</button>
                <button className='btn btn-alt' onClick={cancelModalHandler}>Cancel</button>
            </div>
        </div>
    );
}

export default Modal;