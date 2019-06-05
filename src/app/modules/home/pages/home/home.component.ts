import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogEditorComponent } from 'src/app/shared/components/blog-editor/blog-editor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // this.dialog.open(BlogEditorComponent);
  }

  ngAfterViewInit(){
    // this.dialog.open(BlogEditorComponent);
  }

  openEditor(){
    this.dialog.open(BlogEditorComponent);
  }



}
