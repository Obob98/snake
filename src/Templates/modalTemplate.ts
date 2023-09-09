interface ModalInterface {
    modal: HTMLDivElement
    showModal(won: boolean): void
    hideModal(): void
}

export default class ModalTemplate implements ModalInterface {
    static instance: ModalTemplate = new ModalTemplate()

    private _modal
    private constructor() {
        this._modal = document.querySelector('.message-panel') as HTMLDivElement
    }

    get modal(): HTMLDivElement {
        return this._modal
    }

    showModal(won: boolean): void {
        if (won) {
            this._modal.style.display = 'block'
            this._modal.classList.add('message-panel_success')
        } else {
            this._modal.style.display = 'block'
            this._modal.classList.add('message-panel_danger')
        }
    }

    hideModal(): void {
        this._modal.className = 'panel controls-panel'
        this._modal.style.display = 'none'
    }
} 