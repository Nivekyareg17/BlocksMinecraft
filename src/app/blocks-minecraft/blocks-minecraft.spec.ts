import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksMinecraft } from './blocks-minecraft';

describe('BlocksMinecraft', () => {
  let component: BlocksMinecraft;
  let fixture: ComponentFixture<BlocksMinecraft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocksMinecraft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksMinecraft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
