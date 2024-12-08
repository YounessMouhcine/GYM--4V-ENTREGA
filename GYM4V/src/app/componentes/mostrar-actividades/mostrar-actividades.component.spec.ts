import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarActividadesComponent } from './mostrar-actividades.component';

describe('MostrarActividadesComponent', () => {
  let component: MostrarActividadesComponent;
  let fixture: ComponentFixture<MostrarActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
