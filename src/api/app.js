const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

class App {
    constructor(app = express()) {
        this.app = app;

        this.app.use(express.json());

        this.app.use(cors());

        // this.app.use(routes);
        
        // this.app.use(errorHandler.handle);

        this.app.use(express.static('public'));
    }

    startServer() {
        this.app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }
}

module.exports = {  
    App,
}; 
