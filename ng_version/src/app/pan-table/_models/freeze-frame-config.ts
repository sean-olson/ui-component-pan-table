import { ColumnDefintion } from './column-definition';

export class FreezeFrameConfig {
    private _header_group_class: string;
    private _data_wrapper_class: string;
    private _data_row_class: string;
    private _add_selector: boolean;
    private _selector_id_field: string;
    private _on_toggle_subject: object;
    private _on_select_handler: object;
    private _on_deselect_handler: object;
    private _column_defs: ColumnDefintion[];

    constructor(params: {header_group_class?: string,
                        data_wrapper_class?: string, 
                        data_row_class?: string, 
                        add_selector?: boolean,
                        selector_id_field?: string,
                        on_toggle_subject?: object,
                        on_select_handler?: object,
                        on_deselect_handler?: object,                        
                        column_defs?: ColumnDefintion[]}) {

        this._header_group_class = params.header_group_class || '';
        this._data_wrapper_class = params.data_wrapper_class || '';
        this._data_row_class = params.data_row_class || '';
        this._add_selector = params.add_selector || false;
        this._selector_id_field = params.selector_id_field || '';
        this._on_toggle_subject = params.on_toggle_subject || undefined;
        this._on_select_handler = params.on_select_handler || undefined;
        this._on_deselect_handler = params.on_deselect_handler || undefined;        
        this._column_defs = params.column_defs || [];
    }

    set headerGroupClass(val: string) { this._header_group_class = val;}
    get headerGroupClass(): string { return this._header_group_class;}
    set dataWrapperClass(val: string) { this._data_wrapper_class = val;}
    get dataWrapperClass(): string { return this._data_wrapper_class;} 
    set dataRowClass(val: string) { this._data_row_class = val;}
    get dataRowClass(): string { return this._data_row_class;} 
    set addSelector(val: boolean) { this._add_selector = val;}
    get addSelector(): boolean { return this._add_selector;}
    set selectorIdField(val: string) { this._selector_id_field = val;}
    get selectorIdField(): string { return this._selector_id_field;}    
    set columnDefs(val: ColumnDefintion[]) { this._column_defs = val;}
    get columnDefs(): ColumnDefintion[] { return this._column_defs;}
    set onToggleSubject(obj: object) {this._on_toggle_subject = obj;}
    get onToggleSubject(): object {return this._on_toggle_subject;}
    set onSelectHandler(obj: object) {this._on_select_handler = obj;}
    get onSelectHandler(): object {return this._on_select_handler;}
    set onDeselectHandler(obj: object) {this._on_deselect_handler = obj;}
    get onDeselectHandler(): object {return this._on_deselect_handler;}      

}