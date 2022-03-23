export class Users {
    constructor(
        id?: number,
        surname?: string,
        name?: string,
        phoneNumber?: string,
        email?: string,
        username?: string,
        password?: string,
        entryPoint?: any,
        status?: any,
        createdBy?: string,
        dateCreated?: string,
        updatedBy?: string,
        dateUpdated?: string,
        locality?: any,
        partners?: any,
        profiles?: any,
        us?: any
        ){

        this.id = id;
        this.surname = surname;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.username = username;
        this.password = password;
        this.entryPoint = entryPoint;
        this.status = status;
        this.createdBy = createdBy;
        this.dateCreated = dateCreated;
        this.updatedBy = updatedBy;
        this.dateUpdated = dateUpdated;
        this.locality = locality;
        this.partners = partners;
        this.profiles = profiles;
        this.us = us;
    }
    public id: number;
	public surname: string;
	public name: string;
	public phoneNumber: string;
	public email: string;
	public username: string;
	public password: string;
	public entryPoint: any;
	public status: any;
	public createdBy: string;
	public dateCreated: string;
	public updatedBy: string;
	public dateUpdated: string;
    public locality: any;
    public partners: any;
    public profiles: any;
    public us: any
}

