import { AccountModel } from 'app/features/login/models/account.model';

export class AccountFixture {
  static anAccount(): AccountModel {
    return {
      id: '1',
      age: 34,
      firstName: 'Michael',
      lastName: 'Desigaud',
      email: 'michael.desigaud@redfroggy.fr',
      username: 'mdesigaud',
    };
  }
}
