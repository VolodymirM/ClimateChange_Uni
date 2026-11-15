import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeActionComponent } from './take-action-component';

describe('TakeActionComponent', () => {
  let component: TakeActionComponent;
  let fixture: ComponentFixture<TakeActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TakeActionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
