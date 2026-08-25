export default class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.initScrollSpy();
        this.view.bindNavCollapse();
        this.view.bindPdfPreview(this.handlePdfPreview.bind(this));
    }

    handlePdfPreview() {
        const path = this.model.getPdfPath();
        this.view.showPdfModal(path);
    }
}
