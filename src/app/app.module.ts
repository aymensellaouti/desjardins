import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NgstyleexampleComponent } from './directives/ngstyleexample/ngstyleexample.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassExampleComponent } from './directives/ng-class-example/ng-class-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { UsdToBtcPipe } from './pipes/usd-to-btc.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { SayHello } from './services/sayHello.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailCvComponent,
    NgstyleexampleComponent,
    MiniWordComponent,
    NgClassExampleComponent,
    HighlightDirective,
    RainbowDirective,
    UsdToBtcPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
