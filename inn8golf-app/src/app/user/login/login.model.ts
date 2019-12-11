export class LoginModel {
  public email: string;
  public password: string;

  constructor(login?: LoginModel) {
    if (login) {
      this.email = login.email ? login.email : null;
      this.password = login.password ? login.password : null;
    }
  }
}
