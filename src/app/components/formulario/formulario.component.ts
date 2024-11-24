import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioContactoComponent {
//  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  /*ngOnInit(): void {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactoForm.valid) {
      console.log(this.contactoForm.value);
      // Aquí puedes enviar los datos del formulario a tu servidor
    } else {
      console.log('Formulario no válido');
    }
  }*/
}
