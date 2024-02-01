import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DummyUserComponent } from './components/dummy-user/dummy-user.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dummy-user', component: DummyUserComponent}
];
