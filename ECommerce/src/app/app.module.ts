import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProdFormComponent } from './components/prod-form/prod-form.component';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { ProdGridComponent } from './components/prod-grid/prod-grid.component';


const routes: Routes =[
  {path: '',component:WelcomeComponent},
  {path: 'products',component:ProdListComponent},
  {path: 'categories',component:CatListComponent},
  {path: 'addprod',component:ProdFormComponent},
  {path: 'addcat',component:CatFormComponent},
  {path: 'prodgrid',component:ProdGridComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    CatListComponent,
    WelcomeComponent,
    ProdFormComponent,
    CatFormComponent,
    ProdGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }