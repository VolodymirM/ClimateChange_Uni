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

  it('renders all four action recommendations', () => {
    const actions = fixture.nativeElement.querySelectorAll('.actions-list li');

    expect(actions.length).toBe(4);
    expect(actions[0].textContent).toContain('Every kilowatt saved directly reduces our reliance');
    expect(actions[1].textContent).toContain('improve urban air quality');
    expect(actions[2].textContent).toContain('the destruction of urban green spaces');
    expect(actions[3].textContent).toContain('climate-conscious policies in your local government');
  });
});
