import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column("varchar", {
      length: 50
    })
    username: String;

    @Column("varchar", {
      length: 80
    })
    name: String;

    @Column("varchar", {
      length: 80,
      unique: true
    })
    email: String;

    @Column("varchar", {
      length: 80
    })
    password: String;

    constructor(name: String, username: String, email: String, password: String) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
    }

    getUsername() {
      return this.username;
    }
    getName() {
      return this.name;
    }

}