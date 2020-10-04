export class User {

    private _id: string;
    private _first_name: string;
    private _last_name: string;
    private _email: string;
    private _gender: string;
    private _ip_address: string;
    private _university: string;
    private _job_title: string;
    private _shirt_size: string;
    private _city: string;
    private _postal_code: string;

    constructor(params: {        
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        gender: string,
        ip_address: string,
        university: string,
        job_title: string,
        shirt_size: string,
        city: string,
        postal_code: string}) {

        this._id = params.id;
        this._first_name = params.first_name;
        this._last_name = params.last_name;
        this._email = params.email;
        this._gender = params.gender;
        this._ip_address = params.ip_address;
        this._university = params.university;
        this._job_title = params.job_title;
        this._shirt_size = params.shirt_size;
        this._city = params.city;
        this._postal_code = params.postal_code;        

    }

    set id(val: string) { this._id = val;}
    get id(): string { return this._id;}
    set firstName(val: string) { this._first_name = val;}
    get firstName(): string { return this._first_name;}
    set lastName(val: string) { this._last_name = val;}
    get lastName(): string { return this._last_name;} 
    get fullName(): string { return `${this._last_name}, ${this._first_name}`;}               
    set email(val: string) { this._email = val;}
    get email(): string { return this._email;}        
    set gender(val: string) { this._gender = val;}
    get gender(): string { return this._gender;}        
    set ipAddress(val: string) { this._ip_address = val;}
    get ipAddress(): string { return this._ip_address;}        
    set university(val: string) { this._university = val;}
    get university(): string { return this._university;}        
    set jobTitle(val: string) { this._job_title = val;}
    get jobTitle(): string { return this._job_title;}        
    set shirtSize(val: string) { this._shirt_size = val;}
    get shirtSize(): string { return this._shirt_size;}        
    set city(val: string) { this._city = val;}
    get city(): string { return this._city;}        
    set postalCode(val: string) { this._postal_code = val;}
    get postalCode(): string { return this._postal_code;}   
         
}