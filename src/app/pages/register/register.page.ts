import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'; // Importa Auth y el método
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router) {} // Cambia AngularFireAuth a Auth

  async onRegister() {
    try {
      await createUserWithEmailAndPassword(this.auth, this.email, this.password); // Usa el método correcto
      this.router.navigate(['/home']); // Redirige a la página de inicio después del registro
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  }
}
