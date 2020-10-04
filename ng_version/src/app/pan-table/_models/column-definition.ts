import { DataFieldConfig } from './data-field-config';

export class ColumnDefintion {

    private _heading: string;
    private _header_cell_class: string;
    private _data_cell_class: string;
    private _data_field: DataFieldConfig;


    constructor(params: {heading: string, 
                         header_cell_class: string, 
                         data_cell_class: string,
                         data_field: DataFieldConfig
                        }) {

    this._heading = params.heading;
    this._header_cell_class = params.header_cell_class;
    this._data_cell_class = params.data_cell_class;
    this._data_field = params.data_field;
}

set heading(val: string) { this._heading = val;}
get heading(): string { return this._heading;}
set headerCellClass(val: string) { this._header_cell_class = val;}
get headerCellClass(): string { return this._header_cell_class;}
set dataCellClass(val: string) { this._data_cell_class = val;}
get dataCellClass(): string { return this._data_cell_class;}     
set dataField(val: DataFieldConfig) { this._data_field = val;}
get dataField(): DataFieldConfig { return this._data_field;}     

}