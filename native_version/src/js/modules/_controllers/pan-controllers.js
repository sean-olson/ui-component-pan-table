

export default {
    panPosition: 0,
    maxPan: 0,
    panHeader: undefined,
    panBody: undefined,
    onPanLeft: function(inc) {
        if(this.panPosition > this.maxPan) {
            this.panPosition = (this.panPosition - inc) <= this.maxPan ? this.maxPan : this.panPosition - inc;
            this.panHeader.setAttribute('style', `left: ${this.panPosition}px; tansition: left 1s;`);
        } else {
            console.log('max pan has been reached.');
        }
    },
    onPanRight: function(inc) {
        if(this.panPosition < 0) {
            this.panPosition = (this.panPosition + inc) >= 0 ? 0 : this.panPosition + inc;
            this.panHeader.setAttribute('style', `left: ${this.panPosition}px; tansition: left 1s;`);
        } else {
            console.log('max pan has been reached.');
        }
    },
    initialize: function(params) {
        this.panPosition = 0;
        this.maxPan = params.maxPan;
        this.panHeader = document.getElementById(params.panHeader.id);
        this.panBody = document.getElementById(params.panBody.id);
        this.panHeader.setAttribute('style', `left: ${this.panPosition}px; tansition: left 1s;`)
        this.panBody.setAttribute('style', `left: ${this.panPosition}px; tansition: left 1s;`)

        document.getElementById(params.left.id).addEventListener('click', () => {
            this.onPanLeft(150);
        });
        document.getElementById(params.right.id).addEventListener('click', () => {
            this.onPanRight(150);
        });


    }
}