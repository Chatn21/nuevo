import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthGuard } from './auth.guard.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ListasComponent } from './listas/listas.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  {path: 'list', component:ListasComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: '**', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
