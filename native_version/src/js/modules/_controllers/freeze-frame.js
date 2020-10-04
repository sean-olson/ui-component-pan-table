import data from '../data';

export default {

    initialize: function(params) {

        //build header
        const header_content = document.createDocumentFragment();
        const name_column = document.createElement('div');
        name_column.className = 'so-pt-column-heading';
        name_column.innerText = 'NAME';
        header_content.appendChild(name_column);

        const header = document.getElementById(params.header.id);
        header.appendChild(header_content);


        //build body list

    }
}