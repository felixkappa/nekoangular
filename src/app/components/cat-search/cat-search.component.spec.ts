import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSearchComponent } from './cat-search.component';

describe('CatSearchComponent', () => {
  let component: CatSearchComponent;
  let fixture: ComponentFixture<CatSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
