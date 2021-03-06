export default class UserService {
  constructor(loggerService) {
    this.users = [];
    this.loggerService = loggerService;
  }

  add(user) {
    //console.log("Kullanıcı Eklendi" + " : " + user);
    this.users.push(user);
    this.loggerService.log(user);
  }

  list() {
    return this.users;
    //console.log("Kullanıcılar Listelendi.");
  }

  getById(id) {
    return this.users.find((u) => u.id === id);
    //console.log("Kullanıcı Detayı Getirildi.");
  }
}
