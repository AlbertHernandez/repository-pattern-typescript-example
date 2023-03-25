import { config } from "../../config";
import { UserByIdFinder } from "../application/user-by-id-finder";
import { UserRepository } from "../domain/user-repository";
import { UserGetController } from "./http/user-get-controller";
import { ElasticUserRepository } from "./user-repository/elastic-user-repository";
import { MongoUserRepository } from "./user-repository/mongo-user-repository";
import { MySQLUserRepository } from "./user-repository/mysql-user-repository";

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
