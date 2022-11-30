import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('User added with the Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`User Updated with the Id : ${this.id}, email: ${this.email} `);
  }

  @AfterRemove()
  logremove() {
    console.log(`User Updated with the Id : ${this.id}, email: ${this.email} `);
  }
}
