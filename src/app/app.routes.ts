import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ContactComponent } from './Common/inline-template/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
