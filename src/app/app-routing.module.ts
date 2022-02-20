import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IpInfoComponent} from "./pages/ip/ip-info/ip-info.component";
import {HomeComponent} from "./layout/home/home.component";

const routes: Routes = [
  {path: 'ip/:ip', component: IpInfoComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
