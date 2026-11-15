import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinktreeComponent } from './linktree-component';

describe('LinktreeComponent', () => {
  let component: LinktreeComponent;
  let fixture: ComponentFixture<LinktreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinktreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinktreeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
