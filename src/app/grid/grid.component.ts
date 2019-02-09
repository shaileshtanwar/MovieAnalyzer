import { Component, OnInit } from '@angular/core';
import { GridComponentService } from './grid.component.service';
import { MovieVM } from './grid.component.vm';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private gridService: GridComponentService) { }
  public movieList: MovieVM[];
  public subMovieList: MovieVM[];
  public filteredSubMovieListBackUp: MovieVM[];
  public startIndex: number;
  public endIndex: number;
  public pageNumber: number;
  public totalPage: number[];
  public byLang: string = 'descending';
  public byGenre: string = 'descending';
  public byCountry: string = 'descending';
  public byBudget: string = 'descending';
  public byYear: string = 'descending';

  ngOnInit() {
    //API call to fetch data
    this.gridService.getGridData().subscribe((data: MovieVM[]) => {
      this.movieList = data;
      this.subMovieList = this.movieList.slice(0, 10);
      console.log(this.subMovieList)
      this.totalPage = Array((this.movieList.length + 1) / 10);
    });
    this.startIndex = 0;
    this.endIndex = 9;
    this.pageNumber = 1;
  }

  //Function to implement Pagination
  public changePage(index: number, source?: string) {
    if (!!source) {
      if (source === 'dec') {
        if (index >= 1) {
          this.pageNumber = index;
          this.endIndex = this.endIndex - 10;
          this.startIndex = this.startIndex - 10;
          this.subMovieList = this.movieList.slice(this.startIndex, this.endIndex);
        }
      } else {
        if (index < this.totalPage.length) {
          this.pageNumber = index;
          this.endIndex = this.endIndex + 10;
          this.startIndex = this.startIndex + 10;
          this.subMovieList = this.movieList.slice(this.startIndex, this.endIndex);
        }
      }
    } else {
      this.pageNumber = index;
      this.endIndex = index * 10;
      this.startIndex = this.endIndex - 10;
      this.subMovieList = this.movieList.slice(this.startIndex, this.endIndex);
    }
  }

  //Function to implement sorting
  public sortByLanguage() {
    if (this.byLang === 'ascending') {
      this.byLang = 'descending';
      this.subMovieList.sort((a, b) => {
        if (a.language < b.language) return 1;
        else if (a.language > b.language) return -1;
        else return 0;
      });
    } else {
      this.byLang = 'ascending';
      this.subMovieList.sort((a, b) => {
        if (a.language < b.language) return -1;
        else if (a.language > b.language) return 1;
        else return 0;
      });
    }
  }

  public sortByGenre() {
    if (this.byGenre === 'ascending') {
      this.byGenre = 'descending';
      this.subMovieList.sort((a, b) => {
        if (a.genres < b.genres) return 1;
        else if (a.genres > b.genres) return -1;
        else return 0;
      });
    } else {
      this.byGenre = 'ascending';
      this.subMovieList.sort((a, b) => {
        if (a.genres < b.genres) return -1;
        else if (a.genres > b.genres) return 1;
        else return 0;
      });
    }
  }

  public sortByCountry() {
    if (this.byCountry === 'ascending') {
      this.byCountry = 'descending';
      this.subMovieList.sort((a, b) => {
        if (a.country < b.country) return 1;
        else if (a.country > b.country) return -1;
        else return 0;
      });
    } else {
      this.byCountry = 'ascending';
      this.subMovieList.sort((a, b) => {
        if (a.country < b.country) return -1;
        else if (a.country > b.country) return 1;
        else return 0;
      });
    }
  }

  public sortByBudget() {
    if (this.byBudget === 'ascending') {
      this.byBudget = 'descending';
      this.subMovieList.sort((a, b) => {
        if (a.budget < b.budget) return 1;
        else if (a.budget > b.budget) return -1;
        else return 0;
      });
    } else {
      this.byBudget = 'ascending';
      this.subMovieList.sort((a, b) => {
        if (a.budget < b.budget) return -1;
        else if (a.budget > b.budget) return 1;
        else return 0;
      });
    }
  }

  public sortByYear() {
    if (this.byYear === 'ascending') {
      this.byYear = 'descending';
      this.subMovieList.sort((a, b) => {
        if (a.title_year < b.title_year) return 1;
        else if (a.title_year > b.title_year) return -1;
        else return 0;
      });
    } else {
      this.byYear = 'ascending';
      this.subMovieList.sort((a, b) => {
        if (a.title_year < b.title_year) return -1;
        else if (a.title_year > b.title_year) return 1;
        else return 0;
      });
    }
  }
}
