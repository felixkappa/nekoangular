import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { CommonModule } from '@angular/common';
interface CatBreed {
  id: string;
  name: string;
  image: { url: string };
}

@Component({
  selector: 'app-cat-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {
  catBreeds: CatBreed[] = [];
  error: string | null = null;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((data:any) =>{
      this.catBreeds = data;
    });
  }
}