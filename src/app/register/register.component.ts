import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output('onBackToLogin') backToLogin: EventEmitter<any> = new EventEmitter<any>()
  email: string = '';
  name: string = '';
  imageUrl: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onBackToLoginClicked(): void {
    this.backToLogin.emit();
  }

  onRegisterClicked(): void {
    this.authService.register(this.email, this.name, this.imageUrl, this.password).subscribe((response: any) => {
      console.log(response);
    })
  }

}
