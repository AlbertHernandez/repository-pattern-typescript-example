import { config } from "../config";
import { ElasticUserRepository } from "./elastic-user-repository";
import { MongoUserRepository } from "./mongo-user-repository";
import { MySQLUserRepository } from "./mysql-user-repository";
import { UserByIdFinder } from "./user-by-id-finder";
import { UserGetController } from "./user-get-controller";
import { UserRepository } from "./user-repository";

const getUserRepository = (): UserRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoUserRepository();
    case "elastic":
      return new ElasticUserRepository();
    case "mySQL":
      return new MySQLUserRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const userByIdFinder = new UserByIdFinder(getUserRepository());

export const userGetController = new UserGetController(userByIdFinder);
