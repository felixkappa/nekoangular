import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css']
})
export class CatSearchComponent implements OnInit {
  breeds: any[] = [];
  searchQuery: string = '';
  hasSearched: boolean = false;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
    });
  }

  get filteredBreeds() {
    return this.breeds.filter(breed =>
      breed.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearch() {
    this.hasSearched = this.searchQuery.trim() !== '';
  }
}