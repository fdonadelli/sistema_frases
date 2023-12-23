import { Person } from "../entity/person";

export interface IUserRepository {

    create(payload: Person) : string; 
}