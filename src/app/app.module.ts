import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE, isDevMode } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  NgxBootstrapIconsModule,
  arrowUpCircleFill, bookmarksFill, postcardFill,
  geoAltFill, houseDoorFill, personLinesFill,
  buildingFill, telephoneFill, whatsapp, arrowLeftSquareFill, checkCircleFill, xSquareFill
} from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarGoBackComponent } from './components/navbar-goback/navbar-goback.component';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { StudioDetailsComponent } from './views/studio-details/studio-details.component';
import { FloatButtonTopComponent } from './components/float-button-top/float-button-top.component';
import { FloatButtonWhatsappComponent } from './components/float-button-whatsapp/float-button-whatsapp.component';
import { ProcedureDetailsComponent } from './views/procedure-details/procedure-details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ProcedureImplService } from './services/impl/procedureImpl.service';
import { ProcedureService } from './services/procedure.service';
import { ProductComponent } from './views/product/product.component';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductImplService } from './services/impl/productImpl.service';
import { ProductService } from './services/product.service';
import { DatabaseService } from './services/database.service';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { SafeHtmlPipe } from './pipes/safeHtml.pipe';
import { ProcedureComponent } from './views/procedure/procedure.component';
import { ProcedureFilterPipe } from './pipes/procedure-filter.pipe';
import { StudioService } from './services/studio.service';
import { StudioImplService } from './services/impl/studioImpl.service';
import { ProfessionalImplService } from './services/impl/professionalImpl.service';
import { ProfessionalService } from './services/professional.service';
import { HomeService } from './services/home.service';
import { HomeImplService } from './services/impl/homeImpl.service';
import { ServiceWorkerModule } from '@angular/service-worker';

const icons = {
  houseDoorFill,
  postcardFill,
  buildingFill,
  personLinesFill,
  bookmarksFill,
  geoAltFill,
  telephoneFill,
  arrowUpCircleFill,
  whatsapp,
  arrowLeftSquareFill,
  xSquareFill,
  checkCircleFill
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    ProcedureFilterPipe,
    SafeHtmlPipe,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarGoBackComponent,
    HomeComponent,
    CarouselComponent,
    BannerComponent,
    FloatButtonTopComponent,
    FloatButtonWhatsappComponent,
    ProcedureDetailsComponent,
    StudioDetailsComponent,
    ProductComponent,
    ProcedureComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    NgxBootstrapIconsModule.pick(icons),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DatabaseService, { dataEncapsulation: false, delay: 0 }
    ),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' }
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    {
      provide: ProcedureService, useExisting: ProcedureImplService
    },
    {
      provide: ProductService, useExisting: ProductImplService
    },
    {
      provide: StudioService, useExisting: StudioImplService
    },
    {
      provide: ProfessionalService, useExisting: ProfessionalImplService
    },
    {
      provide: HomeService, useExisting: HomeImplService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
