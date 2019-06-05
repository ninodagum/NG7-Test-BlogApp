import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { EditorModule} from '@tinymce/tinymce-angular';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [BlogComponent, BlogEditorComponent, UserComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
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
    MatIconModule,
    BlogComponent,
    BlogEditorComponent,
    FormsModule,
    EditorModule,
    NgForOf
  ]
})
export class SharedModule { }
