import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { TablaPendientesComponent } from '../tabla-pendientes/tabla-pendientes.component';
import { MesasComponent } from '../mesas/mesas.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { EstadisticasComponent } from '../estadisticas/estadisticas.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { EncuestaComponent } from '../encuesta/encuesta.component';
import { StockComponent } from '../stock/stock.component';
import { LocalComponent} from '../local/local.component';
import { PagoComponent} from '../pago/pago.component';
import { LocalesComponent } from "../locales/locales.component";
import { AdministradorComponent } from "../administrador/administrador.component";
import { DetalleComponent } from '../detalle/detalle.component';
import { PedidoslocalComponent } from "../pedidoslocal/pedidoslocal.component";

 
export const routes: Routes =[
    {path:'home', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'aboutus', component:AboutComponent},
    {path: 'dishdetail/:id', component:DishdetailComponent },
    {path:'contactus', component:ContactComponent},
    {path:'listado', component:TablaPendientesComponent},
    {path:'listadoMesas', component:MesasComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'estadisticas', component:EstadisticasComponent},
    {path:'cliente', component:ClienteComponent},
    {path:'encuesta', component:EncuestaComponent},
    {path:'local', component:LocalComponent},
    {path:'stock', component:StockComponent},
    {path:'pago', component:PagoComponent},
    {path:'administrador', component:AdministradorComponent},
    {path:'locales', component:LocalesComponent},
    {path:'detalle', component:DetalleComponent},
    {path:'pedidoslocal', component:PedidoslocalComponent},
    {path:'', redirectTo: '/home',pathMatch:'full'}
]
 	