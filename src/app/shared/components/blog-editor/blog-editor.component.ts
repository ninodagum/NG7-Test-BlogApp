import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    if(window.tinymce){
      window.tinymce.init({selector: 'textarea#blogEditor', menubar: false});
    }
  }

  ngAfterViewInit(){
    // (Window as any).tinymce.init({selector: 'textarea#blogEditor'});
  }


}
