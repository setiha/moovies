import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output('onRegister') registerEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output('onLogin') loginEvent: EventEmitter<any> = new EventEmitter<any>();


  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onRegisterClicked(): void {
    this.registerEvent.emit();
  }
  onLoginClick(): void {
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      console.log(response);
      this.loginEvent.emit();
    });
  }

}
