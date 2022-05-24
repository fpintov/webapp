import {MainContentComponent} from './main-content/main-content.component';
import {Routes} from '@angular/router';
//import {AuthGuardService} from './features/guards/auth-guard.service';

export let MainRoutes: Routes = [
    {
        path: 'recaudacion',
        component: MainContentComponent,
        children: [
            {path: 'main-content', component: MainContentComponent}//, canActivate: [AuthGuardService]},          
        ]
    }
];