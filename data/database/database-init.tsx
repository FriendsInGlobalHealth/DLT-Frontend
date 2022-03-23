import { DatabaseConnection } from './database-connection'

var db: any = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: []}], false, () =>
        console.log('Foreign keys turned on')
        );
        this.InitDb()
    }
    private InitDb(){
        var sql= [
            `DROP TABLE IF EXISTS users;`,

            `create table if not exists users(
                id integer primary key autoincrement,
                surname text,
                name text,
                phoneNumber integer,
                email text,
                username text,
                password text,
                entryPoint integer,
                status integer,
                createdBy integer,
                dateCreated text,
                updatedBy text,
                dateUpdated text,
                locality integer,
                partners integer,
                profiles integer,
                us integer,
                
            );`,
            
        ];

        db.transaction(
            (tx: any) => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("Execute sql : "+sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error: any) => {
                console.log("error call back : "+JSON.stringify(error));
                console.log(error);
            },() => {
                console.log("transaction complete call back");
            }
        );
    }
}