interface ModalInterface {
    modal: HTMLDivElement
    showModal(message: string, won?: boolean): void
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

    showModal(message: string = '...', won?: boolean): void {
        const h1 = this._modal.querySelector('h1') as HTMLHeadingElement

        if (won) {
            this._modal.classList.add('message-panel_success')
        } else if (won === false) {
            this._modal.classList.add('message-panel_danger')
        }

        this._modal.style.display = 'block'
        h1.innerText = message
    }

    hideModal(): void {
        if (this._modal.className.split('')[1] === 'message-panel_success') {
            this._modal.classList.remove('message-panel_success')
        } else {
            this._modal.classList.remove('message-panel_danger')
        }
        this._modal.style.display = 'none'
    }
} 