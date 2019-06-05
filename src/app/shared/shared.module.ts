import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { EditorModule} from '@tinymce/tinymce-angular';
import { from } from 'rxjs';

@NgModule({
  declarations: [BlogComponent, BlogEditorComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    EditorModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    BlogComponent,
    BlogEditorComponent,
    FormsModule,
    EditorModule
  ]
})
export class SharedModule { }
