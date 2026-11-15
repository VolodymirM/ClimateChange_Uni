import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenu } from './nav-menu';

describe('NavMenu', () => {
  let component: NavMenu;
  let fixture: ComponentFixture<NavMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the mobile menu and closes it after selecting a link', () => {
    const button = fixture.nativeElement.querySelector('.nav-toggle') as HTMLButtonElement;
    const navigation = fixture.nativeElement.querySelector('.nav-menu') as HTMLElement;

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(navigation.classList.contains('is-open')).toBe(true);

    navigation.querySelector('a')?.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(navigation.classList.contains('is-open')).toBe(false);
  });
});
