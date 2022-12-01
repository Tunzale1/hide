import React from "react";


function Modal({hc}) {
 
 return (
 <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
        </div>
        <div className="modal-body">
          <p>
            Заберите его в пункте выдачи до 15 апреля включительно, потом
            заказ придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={hc}  className="btn btn-secondary">
          
            Закрыть
          </button>
        </div>
      </div>
    </div>
 )
}
export default Modal