declare var Modal: any;

const modal = (() => {
    let currentModal = null;

    function modalContainer() {
        return document.getElementById("modal-container");
    }

    const showModal = (title, contents) => {
        hideModal();

        const modalHtml =
            `<div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                ${contents}
            </div>`;

        currentModal = new Modal(modalContainer(), { content: modalHtml });

        modalContainer().addEventListener("hidden.bs.modal", event => {
            currentModal = null;
        }, false);

        currentModal.show();
    };

    const modalContents = () => {
        modalContainer().querySelector(".modal-body");
    };

    const hideModal = () => {
        if (currentModal) {
            currentModal.hide();
        }
    };

    return {
        show: showModal,
        hide: hideModal,
        contents: modalContents
    };
})();

export default modal;