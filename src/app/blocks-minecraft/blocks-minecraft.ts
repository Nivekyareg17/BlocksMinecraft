import { Component, OnInit } from '@angular/core';
import { BlockService } from '../services/block-service'; 
import { FormsModule } from '@angular/forms';

interface Block {
  _id?: string;
  nombre: string;
  bioma: string;
  type: string;
  color: string;
  description: string;
    
}

@Component({
  selector: 'app-blocks-minecraft',
  standalone: false,
  templateUrl: './blocks-minecraft.html',
  styleUrl: './blocks-minecraft.css',
})
export class BlocksMinecraft implements OnInit {
 
  blocks: Block[] = []; 
  block: Block = { nombre: '', bioma: '', type: '', color: '', description: '' }; 
  
  editando = false;
  idEnEdicion: string | null = null;

  
  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.getBlocks();
  }

  getBlocks() {
    this.blockService.getBlock().subscribe(data => {
      this.blocks = data;
    });
  }

  guardarBlocks() {
    if (!this.editando) {
      this.blockService.crearBlock(this.block).subscribe(() => {
        this.block = {nombre: '', bioma: '', type: '', color: '', description: ''};
        this.getBlocks(); 
      });
    } else {
      if (this.idEnEdicion) {
        this.blockService.actualizarBlock(this.idEnEdicion, this.block).subscribe(() => {
          this.editando = false;
          this.idEnEdicion = null;
          this.block = { nombre: '', bioma: '', type: '', color: '', description: ''};
          this.getBlocks(); 
        });
      }
    }
  }

  editarBlock(b: Block) { 
    this.editando = true;
    this.idEnEdicion = b._id!;
    this.block = { nombre: b.nombre, bioma: b.bioma, type: b.type, color: b.color, description: b.description };
  }

  eliminarBlock(id: string) {
    this.blockService.eliminarBlock(id).subscribe(() => {
      this.getBlocks(); 
    });
  }
}