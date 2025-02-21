import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'doble-electricidad';
  currentLanguage = 'es';

  constructor(private translate: TranslateService) {
    // Inicializa el servicio de traducción configurando el idioma predeterminado a español ('es').
    // Luego intenta recuperar el idioma preferido del usuario del almacenamiento local. Si no se encuentra ningún idioma preferido,
    // se predetermina al español ('es'). El servicio de traducción se configura para usar el idioma recuperado o predeterminado.
    const lang = localStorage.getItem('lang') || 'es';
    this.translate.setDefaultLang('es');
    this.translate.use(lang);
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }
}
