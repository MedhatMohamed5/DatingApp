import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      () => {
        console.log('Registered successfully');
        this.alertify.success('Registered successfully');
      },
      error => {
        console.log(error);
        this.alertify.error(error);
      }
    );
  }

  cancel(): void {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
    this.alertify.message('Cancelled');
  }

}
