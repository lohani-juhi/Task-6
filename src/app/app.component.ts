import { Component } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gallery';
}
