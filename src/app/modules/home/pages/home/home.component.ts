import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BlogEditorComponent } from 'src/app/shared/components/blog-editor/blog-editor.component';
import { Blogs } from 'src/app/shared/components/blog/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newBlogDescription: string;
  blogs: Blogs;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

}
