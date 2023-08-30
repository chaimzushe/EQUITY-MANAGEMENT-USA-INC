import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './pages/application/application.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Equity Management' },
  { path: 'about', component: AboutComponent, title: 'About us' },
  { path: 'contact', component: ContactComponent, title: 'Contact us' },
  { path: 'application', component: ApplicationComponent, title: 'Application' },
  { path: 'terms', component: TermsComponent, title: 'terms & conditions' },
  { path: 'privacy', component: PrivacyComponent, title: 'privacy' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
