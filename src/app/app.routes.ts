import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


export const routes: Routes = [{
    path:'',
    component:MainComponentComponent
},
{
    path:'category_view',
    component:CategoryViewComponent
},
{
    path:'register',
    component:RegistrationComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'resetpassword',
    component:ForgetpasswordComponent
}
];
