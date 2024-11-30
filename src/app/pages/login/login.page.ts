import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  showSignup: boolean = false;
  termsAccepted: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async login() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  toggleSignup() {
    this.showSignup = !this.showSignup;
  }

  async signup() {
    if (!this.termsAccepted) {
      const alert = await this.alertCtrl.create({
        header: 'Términos no aceptados',
        message: 'Debes aceptar los términos y condiciones para continuar.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    try {
      await this.afAuth.createUserWithEmailAndPassword(
        this.signupEmail,
        this.signupPassword
      );
      alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
      this.showSignup = false;
    } catch (error) {
      console.error('Error al crear cuenta:', error);
    }
  }

  async openTerms() {
    const alert = await this.alertCtrl.create({
      header: 'Términos y Condiciones',
      message: `
        1. Aceptación de los Términos
        Al crear una cuenta y utilizar nuestra aplicación, aceptas los términos y condiciones establecidos en este documento. Si no estás de acuerdo con estos términos, no podrás registrarte ni utilizar los servicios ofrecidos.

        2. Uso de la Aplicación
        Esta aplicación está destinada únicamente para uso personal y no comercial. Los usuarios deben proporcionar información veraz y mantener la confidencialidad de sus credenciales.

        3. Registro y Cuenta
        Para crear una cuenta, es necesario proporcionar un correo electrónico válido y una contraseña segura. Debes ser mayor de edad o contar con el consentimiento de un tutor legal.

        4. Privacidad y Protección de Datos
        La información personal proporcionada será utilizada conforme a nuestra política de privacidad. No compartiremos tus datos con terceros sin tu consentimiento.

        5. Limitación de Responsabilidad
        No nos hacemos responsables por errores técnicos, interrupciones en el servicio o daños derivados del uso de la aplicación.

        6. Modificación de los Términos
        Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuo de la aplicación después de los cambios constituirá la aceptación de los mismos.

        7. Suspensión de Cuenta
        Podemos suspender o cancelar tu cuenta si detectamos uso indebido o violación de estos términos.

        8. Jurisdicción y Ley Aplicable
        Estos términos se rigen por las leyes locales aplicables y cualquier disputa será resuelta en los tribunales correspondientes.
      `,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
