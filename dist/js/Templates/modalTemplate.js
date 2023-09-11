class ModalTemplate {
    static instance = new ModalTemplate();
    _modal;
    constructor() {
        this._modal = document.querySelector('.message-panel');
    }
    get modal() {
        return this._modal;
    }
    showModal(message = '...', won) {
        const h1 = this._modal.querySelector('h1');
        if (won) {
            this._modal.classList.add('message-panel_success');
        }
        else if (won === false) {
            this._modal.classList.add('message-panel_danger');
        }
        this._modal.style.display = 'block';
        h1.innerText = message;
    }
    hideModal() {
        if (this._modal.className.split('')[1] === 'message-panel_success') {
            this._modal.classList.remove('message-panel_success');
        }
        else {
            this._modal.classList.remove('message-panel_danger');
        }
        this._modal.style.display = 'none';
    }
}
export default ModalTemplate;
