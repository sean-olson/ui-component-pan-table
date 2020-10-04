export default {

    initialize: function(params) {

        //build headers
        const header_fragment = document.createDocumentFragment();
        params.content.forEach((item) => {
            const header_column = document.createElement('div');
            header_column.className = params.classes.column_item;
            header_column.setAttribute('id', `${item.prop}_column_header`)
            header_column.innerText = item.label;
            header_fragment.appendChild(header_column);
        });
        const header = document.getElementById(params.header.id);
        header.appendChild(header_fragment);

        //build list rows
    }
}