import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogedComponent } from './containers/loged/loged.component';
import { PublicComponent } from './containers/public/public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'',
    component: PublicComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path:'',
    component: LogedComponent,
    children:[
      {
        path:'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
