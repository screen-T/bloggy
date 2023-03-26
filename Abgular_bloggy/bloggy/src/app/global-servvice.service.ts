import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServviceService {
  logo_path="assets/image/bloggy_logo.png"
  blog_image="assets/image/blog_image.jpg"
  pdp="assets/image/pdp.png"
  satr="assets/image/bookmark.png"
  navbar="assets/image/navigation-bar.png"
  constructor() { }
}
