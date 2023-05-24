import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxComponentComponent } from './lightbox-component.component';

describe('LightboxComponentComponent', () => {
  let component: LightboxComponentComponent;
  let fixture: ComponentFixture<LightboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightboxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
