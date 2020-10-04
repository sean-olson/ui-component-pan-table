
export class DataFieldConfig {
    private _data_field_class: string;
    private _is_array : boolean;
    private _display_field : string;
    private _data_attribute_field : string;
    private _click_handler: Object;

    constructor(params: {data_field_class?: string, 
                        is_array?: boolean, 
                        display_field?: string,
                        data_attribute_field?: string,
                        click_handler?: Object,
                    }) {

        this._data_field_class = params.data_field_class || '';
        this._is_array = params.is_array || false;
        this._display_field = params.display_field || '';
        this._data_attribute_field = params.data_attribute_field || '';
        this._click_handler = params.click_handler || undefined;
    }

    set dataFieldClass(val: string) { this._data_field_class = val;}
    get dataFieldClass(): string { return this._data_field_class;}
    set isArray(val: boolean) { this._is_array = val;}
    get isArray(): boolean { return this._is_array;}
    set displayField(val: string) { this._display_field = val;}
    get displayField(): string { return this._display_field;}     
    set dataAttributeField(val: string) { this._data_attribute_field = val;}
    get dataAttributeField(): string { return this._data_attribute_field;}     
    set clickHandler(val: Object) { this._click_handler = val;}
    get clickHandler(): Object { return this._click_handler;}     
}