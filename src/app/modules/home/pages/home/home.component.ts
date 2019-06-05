import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BlogEditorComponent } from 'src/app/shared/components/blog-editor/blog-editor.component';
import { Blogs, Blog } from 'src/app/shared/components/blog/blog';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Observable } from 'rxjs';
import { load } from '@angular/core/src/render3';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newBlogDescription: string;
  blogs: Observable<Blogs>;

  constructor(private blogService: BlogService, private userService: UserService) {

   }

  ngOnInit() {
    this.blogs = this.blogService.blogs;
    this.blogService.user = this.userService.user;
    this.blogService.loadBlogs();
  }

  submit(){
    const newBlog: Blog = {
        id: Math.floor(Math.random() * Math.floor(999)),
        userId: this.userService.user.id,
        createdAt: new Date(),
        name: 'Roma Harber',
        avatar: 'http://lorempixel.com/640/480/nature',
        blogImage: 'http://lorempixel.com/640/480/food',
        tags: 'tags 1 | tag2 | tag3',
        description: this.newBlogDescription,
        user: this.userService.user
    }
    this.blogService.addBlog(newBlog);
  }

  deleteBlog(blog:Blog){
    this.blogService.deleteBlog(blog);
  }
  clearEditor(){
    this.newBlogDescription = undefined;
  }
}
