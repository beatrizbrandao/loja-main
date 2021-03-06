import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquiagensComponent } from './maquiagens/maquiagens.component';
import { MaquiagemDetailComponent } from './maquiagem-detail/maquiagem-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'maquiagens', component: MaquiagensComponent},
  {path:'maquiagens/:id', component: MaquiagemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
