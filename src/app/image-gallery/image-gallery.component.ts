import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  images: Array<{src: string, thumb: string, alt: string}> = [];
  selectedImage: {src: string, alt: string} | null = null;
  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.images = [
      { src: 'https://picsum.photos/800/500', thumb: 'https://picsum.photos/200/200', alt: 'Image 1' },
      { src: 'https://picsum.photos/800/501', thumb: 'https://picsum.photos/200/201', alt: 'Image 2' },
      { src: 'https://picsum.photos/800/502', thumb: 'https://picsum.photos/200/202', alt: 'Image 3' },
      { src: 'https://picsum.photos/800/503', thumb: 'https://picsum.photos/200/203', alt: 'Image 4' },
      { src: 'https://picsum.photos/800/504', thumb: 'https://picsum.photos/200/204', alt: 'Image 5' },
      { src: 'https://picsum.photos/800/505', thumb: 'https://picsum.photos/200/205', alt: 'Image 6' },
      { src: 'https://picsum.photos/800/506', thumb: 'https://picsum.photos/200/201', alt: 'Image 7' },
      { src: 'https://picsum.photos/800/507', thumb: 'https://picsum.photos/200/202', alt: 'Image 8' },
      { src: 'https://picsum.photos/800/508', thumb: 'https://picsum.photos/200/203', alt: 'Image 9' },
      { src: 'https://picsum.photos/800/509', thumb: 'https://picsum.photos/200/204', alt: 'Image 10' },
      { src: 'https://picsum.photos/800/510', thumb: 'https://picsum.photos/200/205', alt: 'Image 11' },
      // Add more images here
    ];
  }

  openModal(image: {src: string, thumb: string, alt: string}): void {
    this.selectedImage = image;
    this.currentImageIndex = this.images.indexOf(image);
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1;
    }
    this.openModal(this.images[this.currentImageIndex]);
  }

  nextImage(): void {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
    this.openModal(this.images[this.currentImageIndex]);
  }
}
