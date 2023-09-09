class ModalTemplate {
    static instance = new ModalTemplate();
    _modal;
    constructor() {
        this._modal = document.querySelector('.message-panel');
    }
    get modal() {
        return this._modal;
    }
    showModal(won) {
        if (won) {
            this._modal.style.display = 'block';
            this._modal.classList.add('message-panel_success');
        }
        else {
            this._modal.style.display = 'block';
            this._modal.classList.add('message-panel_danger');
        }
    }
    hideModal() {
        this._modal.className = 'panel controls-panel';
        this._modal.style.display = 'none';
    }
}
export default ModalTemplate;
