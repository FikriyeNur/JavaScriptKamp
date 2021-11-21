import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component Yüklendi.");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);
let user1 = new User(1, "Fikriye Nur", "Harmandar", 24, "İstanbul");
let user2 = new User(2, "Anıl", "Aksoy", 26, "Denizli");

userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(user1.id));

let customer = { id: 1, firstName: "Fikriye Nur", lastName: "Harmandar" };
// prototyping
customer.age = 24;
//console.log(customer);
