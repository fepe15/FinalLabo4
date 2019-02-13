import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';

import {FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

import { AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {FileUploadModule} from 'primeng/fileupload';

import { DialogModule} from 'primeng/dialog';

import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
} from '@angular/material';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ColorTimerDirective } from './directivas/color-timer.directive';
import { EstadoPedidoDirective } from './directivas/estado-pedido.directive';
import { FondoDirective } from './directivas/fondo.directive';
import { TipoProductoDirective } from './directivas/tipo-producto.directive';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { BotonBorrarComponent } from './boton-borrar/boton-borrar.component';
import { TablaPendientesComponent } from './tabla-pendientes/tabla-pendientes.component';
import { BotonPrepararComponent } from './boton-preparar/boton-preparar.component';
import { BotonServirComponent } from './boton-servir/boton-servir.component';
import { MesasComponent } from './mesas/mesas.component';
import { GenericoService } from './services/generico.service';
import { UsuariosService } from './services/usuarios.service';
import { ProductosService } from './services/productos.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CaptchaService } from './services/captcha.service';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
// import { RoleGuardService } from './services/auth/role-guard-service.service';

import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';
import { PedidoService } from './services/pedido.service';
import { MesasService } from './services/mesas.service';
import {MessageService} from 'primeng/api';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BotonSuspenderComponent } from './boton-suspender/boton-suspender.component';
import { BtnBorrarUsuarioComponent } from './btn-borrar-usuario/btn-borrar-usuario.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ChartModule } from 'angular-highcharts';
import { MapComponent } from './map/map.component';
import { ClienteComponent } from './cliente/cliente.component';
import {CheckboxModule} from 'primeng/checkbox';
import {SharedModule} from 'primeng/primeng';
import { PruebaPipe } from './pipes/prueba.pipe';
import { EncuestaComponent } from './encuesta/encuesta.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Angular2CsvModule } from 'angular2-csv';
import { CsvComponent } from './csv/csv.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CaptchaPropioComponent } from './captcha-propio/captcha-propio.component';
import { CambioDolarPipe } from './pipes/cambio-dolar.pipe';
import { AgregoTextoPosPipe } from './pipes/agrego-texto-pos.pipe';
import { EliminoMailPipe } from './pipes/elimino-mail.pipe';
import { LetraYcolorDirective } from './directive/letra-ycolor.directive';
 

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('token'));
}


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    FiltroPipe,
    FondoDirective,
    ColorTimerDirective,
    EstadoPedidoDirective,
    TipoProductoDirective,
    BotonAgregarComponent,
    BotonBorrarComponent,
    TablaPendientesComponent,
    BotonPrepararComponent,
    BotonServirComponent,
    MesasComponent,
    UsuariosComponent,
    BotonSuspenderComponent,
    BtnBorrarUsuarioComponent,
    EstadisticasComponent,
    MapComponent,
    ClienteComponent,
    PruebaPipe,
    EncuestaComponent,
    CsvComponent,
    CaptchaPropioComponent,
    CambioDolarPipe,
    AgregoTextoPosPipe,
    EliminoMailPipe,
    LetraYcolorDirective
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    Angular2CsvModule,
    ReactiveFormsModule,
    CheckboxModule,
    FileUploadModule,
    ChartModule,
    //material    
    MatFormFieldModule,    
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,    
    HttpModule,
    DialogModule,
    SharedModule,
    AngularFileUploaderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [DishService,
  PromotionService, LeaderService,
  GenericoService, 
    UsuariosService, 
    ProductosService, 
    CaptchaService,
    PedidoService,
    AuthService, 
    NgbRatingConfig,
    AuthGuardService, 
    JwtHelperService, 
    MessageService,
    MesasService
    // RoleGuardService
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
