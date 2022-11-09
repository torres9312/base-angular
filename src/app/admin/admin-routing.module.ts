import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

    {
      path: '',
      pathMatch: 'full',
      redirectTo : 'dashboard'
      
    },

    {
      path: '',
      component: MainComponent,
      children :[
        { path: 'dashboard', component: DashboardComponent},
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

 

}
