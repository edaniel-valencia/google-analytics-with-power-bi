import AppModel from './models/AppModel.js';
import AppView from './views/AppView.js';
import AppController from './controllers/AppController.js';

window.addEventListener('DOMContentLoaded', event => {
    const app = new AppController(new AppModel(), new AppView());
});
