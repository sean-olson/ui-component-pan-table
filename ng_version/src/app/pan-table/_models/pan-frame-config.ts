import { ColumnDefintion } from './column-definition';

export class PanFrameConfig {

    private _header_group_class: string;
    private _data_wrapper_class: string;
    private _data_row_class: string;
    private _column_defs: ColumnDefintion[];

    constructor(params: {header_group_class?: string, 
                        data_wrapper_class?: string, 
                        data_row_class?: string,
                        column_defs?: ColumnDefintion[]}) {

        this._header_group_class = params.header_group_class || '';
        this._data_wrapper_class = params.data_wrapper_class || '';
        this._data_row_class = params.data_row_class || '';
        this._column_defs = params.column_defs || [];
    }

    set headerGroupClass(val: string) { this._header_group_class = val;}
    get headerGroupClass(): string { return this._header_group_class;}
    set dataWrapperClass(val: string) { this._data_wrapper_class = val;}
    get dataWrapperClass(): string { return this._data_wrapper_class;} 
    set dataRowClass(val: string) { this._data_row_class = val;}
    get dataRowClass(): string { return this._data_row_class;}        
    set columnDefs(val: ColumnDefintion[]) { this._column_defs = val;}
    get columnDefs(): ColumnDefintion[] { return this._column_defs;}

}