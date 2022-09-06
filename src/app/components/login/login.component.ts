import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: Login;

  constructor(private _router: Router) {
    this.formulario=new Login();
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.formulario);
    this._router.navigateByUrl('home');
  }

}
