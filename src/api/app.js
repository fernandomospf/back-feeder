require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');
const { errorHandler } = require('../middlewares/ErrorHandler');    

const PORT = process.env.PORT || 3001;

class App {
    constructor(app = express()) {
        this.app = app; 

        this.app.use(express.json());

        this.app.use(cors());

        this.app.use(routes);
        
        this.app.use(errorHandler.handleError);
    }

    startServer() {
        this.app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }
}

module.exports = {
    App,
};
