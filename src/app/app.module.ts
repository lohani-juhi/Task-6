import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        ImageGalleryComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [],
    bootstrap:[AppComponent]
})

export class AppModule { }