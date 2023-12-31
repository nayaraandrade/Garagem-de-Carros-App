import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './components/carros/carros.component';

const routes: Routes = [
  { path: 'carros', component: CarrosComponent },
    
  { path: '', redirectTo: 'carros', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
