
import panControllers from './_controllers/pan-controllers';
import freezeFrame from './_controllers/freeze-frame';
import panFrame from './_controllers/pan-frame';

const config = {
    panControllers: {        
        left: {id: 'so-pt-pan-table-left-controller'},
        right: {id: 'so-pt-pan-table-right-controller'},
        panHeader: {id:'so-pt-table-pan-frame-header'},
        panBody: {id: 'so-pt-table-pan-frame-body'},
        maxPan: -750
    },
    freezeFrame: {
        header: {id: 'so-pt-table-freeze-frame-header'}, 
        body: {id: 'so-pt-table-freeze-frame-body'}
    },
    panFrame: {
        header: {id: 'so-pt-table-pan-frame-header'}, 
        body: {id: 'so-pt-table-pan-frame-body'},
        classes: {column_item: 'so-pt-table-pan-frame-column-item', row_item: 'so-pt-table-pan-frame-row-item'},
        content: [
            {label: 'Email', prop: 'email'},
            {label: 'IP Address', prop: 'ip_address'},
            {label: 'University', prop: 'university'},
            {label: 'Job Title', prop: 'job_title'},
            {label: 'Shirt Size', prop: 'shirt_size'},
            {label: 'City', prop: 'city'}
        ]
    }
};

class Initializer {
    
    constructor() {}

    initializeApp() {
        panControllers.initialize(config.panControllers);
        freezeFrame.initialize(config.freezeFrame);
        panFrame.initialize(config.panFrame);
    }

}

const initializer = new Initializer()

export default initializer;