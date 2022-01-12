import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountModel } from 'app/features/login/models/account.model';

@Injectable()
export class LoginService {
  /**
   * Simulate a http call to authenticate the user
   */
  authenticate(username: string, password: string): Observable<AccountModel> {
    if (username === 'admin' && password === 'admin') {
      return of({
        id: '1',
        age: 34,
        firstName: 'Michael',
        lastName: 'Desigaud',
        email: 'michael.desigaud@redfroggy.fr',
        username: 'mdesigaud',
      });
    }
    throw new Error('Invalid credentials');
  }
}
