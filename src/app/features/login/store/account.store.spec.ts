import { AccountStore } from 'app/features/login/store/account.store';
import { AccountFixture } from '../../../../test/fixtures/account.fixture';
import { getStore } from '@ngneat/elf';

describe('account store unit tests', () => {
  it('should store accounts', (done) => {
    let store: AccountStore = new AccountStore();

    store.getAccount().subscribe((account) => {
      expect(account).toEqual(AccountFixture.anAccount());
      done();
    });

    store.setAccount(AccountFixture.anAccount());
    expect(getStore('account')).toBeDefined();
  });
});
