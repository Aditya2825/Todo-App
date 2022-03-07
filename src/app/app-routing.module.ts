import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'auth', loadChildren:()=>import('./auth/auth.module').then((m) => m.AuthModule),},
  {path:'todo', loadChildren:()=>import('./todo/todo.module').then((m) => m.TodoModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
