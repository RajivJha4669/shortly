import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('navBar') navBar!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: Event) {
    const navClassList = (this.navBar.nativeElement as HTMLElement).classList;
    if (window.scrollY > 20) {
      (this.logo.nativeElement as HTMLImageElement).src =
        'assets/images/logo-light.svg';
      navClassList.add('sticky');
    } else {
      (this.logo.nativeElement as HTMLImageElement).src =
        'assets/images/logo-dark.svg';
      navClassList.remove('sticky');
    }
  }

  ngOnInit(): void {}
}
