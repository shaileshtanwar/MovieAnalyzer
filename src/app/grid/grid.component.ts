import { Component, OnInit } from '@angular/core';
import { GridComponentService } from './grid.component.service';
import { MovieVM } from './grid.component.vm';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private gridService: GridComponentService) { }
  public movieList: MovieVM[];
  public startIndex: number;
  public endIndex: number;
  public pageNumber: number;
  public totalPage: number[];
  ngOnInit() {
    this.gridService.getGridData().subscribe((data: MovieVM[]) => {
      this.movieList = data;
      this.totalPage = Array((this.movieList.length + 1) / 10);
    });
    this.startIndex = 0;
    this.endIndex = 9;
    this.pageNumber = 1;
  }

  public changePage(index: number, source?: string) {
    if (!!source) {
      if (source === 'dec') {
        if (index >= 1) {
          this.pageNumber = index;
          this.endIndex = this.endIndex - 10;
          this.startIndex = this.startIndex - 10;
        }
      } else {
        if (index < this.totalPage.length) {
          this.pageNumber = index;
          this.endIndex = this.endIndex + 10;
          this.startIndex = this.startIndex + 10;
        }
      }
    } else {
      this.pageNumber = index;
      this.endIndex = index * 10;
      this.startIndex = this.endIndex - 10;
    }
  }
}
