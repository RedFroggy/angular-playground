import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from 'app/features/login/login.component';
import { LoginService } from 'app/features/login/services/login.service';
import { RouterModule } from '@angular/router';
import { CanLoginGuard, LOGIN_ROUTES } from 'app/features/login/login.route';
import { AccountStore } from 'app/features/login/store/account.store';
import { CanAuthenticationGuard } from 'app/features/login/authentication.guard';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(LOGIN_ROUTES)],
  declarations: [LoginComponent],
  providers: [LoginService, AccountStore, CanLoginGuard, CanAuthenticationGuard],
  exports: [LoginComponent],
})
export class LoginModule {}
