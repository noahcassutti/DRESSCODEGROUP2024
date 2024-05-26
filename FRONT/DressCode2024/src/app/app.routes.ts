import { Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ProductosComponent } from './pages/productos/productos.component';

import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
export 

    const routes: Routes = [
        //{path: "", component:  }, //InicioComponent
        {path: "productos", component: ProductosComponent},
        {path:"mis-compras", component:DashboardComponent},
        //{path: "products/:category/:productId", component: ProductDetailComponent},
        { path: 'Contacto', component: ContactoComponent },
        //{path: "**", redirectTo: "", pathMatch: "full"}
        {path: "login", component: LoginComponent},
        {path: "registro", component: RegistroComponent},
        {path: "index", component: LandingComponent},
        {path:"", redirectTo:"/index", pathMatch:"full"},
        {path: "sobre-nosotros", component: SobreNosotrosComponent},





        //este ruteo a esta pagina404 va a al ultimo
        {path: "**", component: Pagina404Component},
      
        //este ruteo a esta pagina404 va a al ultimo

        
      

];
