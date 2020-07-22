import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'pages', component: PagesComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'tags', component: TagsComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
