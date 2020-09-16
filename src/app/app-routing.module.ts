import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';


const routes: Routes = [
  { path:'', component:ClaimDetailsComponent},
  { path: 'status/:index', component:ClaimStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
