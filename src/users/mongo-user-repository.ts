import { User } from "./user";
import userDatabase from "./user-database.json";
import { UserRepository } from "./user-repository";

export class MongoUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Using Mongo!");

    const rawUser = userDatabase.find((user) => user.id === id);

    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }
}
