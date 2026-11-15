import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherParagraphs } from './other-paragraphs';

describe('OtherParagraphs', () => {
  let component: OtherParagraphs;
  let fixture: ComponentFixture<OtherParagraphs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherParagraphs],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherParagraphs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
