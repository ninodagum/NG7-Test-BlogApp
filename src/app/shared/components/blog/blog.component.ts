import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  @Output() delete: EventEmitter<Blog> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('blog :: ', this.blog);
  }

  onDelete(){
    this.delete.emit(this.blog);
  }



}
