export default class CardiopeerUser {
    private user_id: string;
    private name: string;
    private home_server: string;
    private email: string;
    private matrix_alias: string;

    public constructor();
    public constructor(user_id: string, name: string, home_server: string, email: string);
    public constructor(user_id?: string, name?: string, home_server?: string, email?: string){
        this.user_id = user_id;
        this.name = name;
        this.home_server = home_server;
        this.email = email;
    }

    public setName(newName: string): void{
        this.name = newName;
    }

    public getName(): string{
        return this.name;
    }

    public setUserID(newID: string): void{
        this.user_id = newID;
    }

    public getUserID(): string{
        return this.user_id;
    }

    public setHomeServer(newHomeServer: string) :void{
        this.home_server = newHomeServer;
    }

    public getHomeServer(): string{
        return this.home_server;
    }

    public setEmail(newEmail: string) :void{
        this.email = newEmail;
    }

    public getEmail(): string{
        return this.email;
    }

    public setMatrixAlias(newMatrixAlias: string): void{
        this.matrix_alias = newMatrixAlias;
    }

    public getMatrixAlias(): string{
        return this.matrix_alias;
    }
}