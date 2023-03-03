import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-requiredinputform',
  templateUrl: './requiredinputform.component.html',
  styleUrls: ['./requiredinputform.component.scss']
})
export class RequiredinputformComponent {
  constructor( private formBuilder: FormBuilder) {}

    joinForm = this.formBuilder.group({
      gamePin: ['', Validators.required],
  });

  joinGame() {
    console.log(this.joinForm.value);
  }


}
