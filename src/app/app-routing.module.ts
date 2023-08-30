import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './pages/application/application.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Equity Management' },
  { path: 'about', component: AboutComponent, title: 'About us' },
  { path: 'contact', component: ContactComponent, title: 'Contact us' },
  { path: 'application', component: ApplicationComponent, title: 'Application' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
