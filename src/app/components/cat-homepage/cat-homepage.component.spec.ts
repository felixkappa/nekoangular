import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHomepageComponent } from './cat-homepage.component';

describe('CatHomepageComponent', () => {
  let component: CatHomepageComponent;
  let fixture: ComponentFixture<CatHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
