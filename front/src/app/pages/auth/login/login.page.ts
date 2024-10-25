import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiRestService } from '../../../services/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  username: string = '';
  password: string = '';

  private apiService: ApiRestService = inject(ApiRestService);
  private router: Router = inject(Router);

  async onSubmit() {
    console.log(this.username);
    console.log(this.password);
    const sent = await this.apiService.post(
      'auth/',
      JSON.stringify({ username: this.username, contraseña: this.password }),
    );
    this.apiService.setToken(sent.token);
    const user = sent.usuario
    localStorage.setItem('user_id', user.id_usuario);
    this.router.navigate(['/tasks']);
  }
}
