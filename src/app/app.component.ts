import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moversandpackers';

  showScrollUpButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollUpButton = window.scrollY > 200;
  }

  scrollToContent() {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
