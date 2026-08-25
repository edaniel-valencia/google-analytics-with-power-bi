export default class AppView {
    constructor() {
        this.mainNav = document.body.querySelector('#mainNav');
        this.navbarToggler = document.body.querySelector('.navbar-toggler');
        this.responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
        this.downloadBtn = document.getElementById('btn-preview-pdf'); 
        
        const modalEl = document.getElementById('pdfPreviewModal');
        if (modalEl && typeof bootstrap !== 'undefined') {
            this.pdfModal = new bootstrap.Modal(modalEl);
        }
        this.pdfIframe = document.getElementById('pdfIframe');
        this.actualDownloadBtn = document.getElementById('btn-actual-download');
        
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    initScrollSpy() {
        if (this.mainNav && typeof bootstrap !== 'undefined') {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 74,
            });
        }
    }

    bindNavCollapse() {
        this.responsiveNavItems.map((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(this.navbarToggler).display !== 'none') {
                    this.navbarToggler.click();
                }
            });
        });
    }

    bindPdfPreview(handler) {
        if(this.downloadBtn) {
            this.downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handler();
            });
        }
    }

    showPdfModal(pdfPath) {
        if (this.pdfIframe && this.actualDownloadBtn && this.pdfModal) {
            this.pdfIframe.src = pdfPath;
            this.actualDownloadBtn.href = pdfPath;
            this.pdfModal.show();
        }
    }
}
