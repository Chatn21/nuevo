import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    provideAnimations(), // Agrega soporte para animaciones
    // provideNoopAnimations() // Usa esto si quieres deshabilitar las animaciones
  ]
}).catch((err) => console.error(err));

