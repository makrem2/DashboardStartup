export class User{
    nom: string;
    prenom: string;
    username: string;
    email: string;
    password: string;
    date_naic: string;
    tel: string;
    region:string;
    role: string[];
    constructor(nom: string,prenom: string,username: string,
    email: string,password: string,date_naic: string,
    tel: string, region:string,role: string[]) {
        this.nom=nom
        this.prenom=prenom
        this.username = username;
        this.email = email;
        this.password = password;
        this.date_naic=date_naic
        this.tel=tel
        this.region=region
        this.role  = role;
    }
}