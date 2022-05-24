import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainRoutes} from './routes';
import {ErrorComponent} from './features/error/error.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
    },

    ...MainRoutes,
    { path: '**', component: ErrorComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }