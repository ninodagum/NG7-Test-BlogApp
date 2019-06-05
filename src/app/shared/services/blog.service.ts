import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Blogs, Blog } from '../components/blog/blog';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blogs = new BehaviorSubject<Blogs>(null);
  private _user: User;


  constructor(
    private httpService: HttpService
  ) { }

  get blogs(): Observable<Blogs> {
    return this._blogs;
  }

  set user(user: User){
    this._user = user;
  }

  get user(){
    return this._user;
  }

  loadBlogs() {
      this.httpService.get(`users/${this._user.id}/blogs`).subscribe(
        (blogs: Blogs) => {
            this._blogs.next(blogs);
        }
      );
  }

  addBlog(blog: Blog){
    this._blogs.value.unshift(blog);
    this._blogs.next(this._blogs.value);
  }

  deleteBlog(blog:Blog){
    const blogId  = blog.id;
    const updatedResult = this._blogs.value.filter(blog=>blogId != blog.id);
    this._blogs.next(updatedResult);
  }

}
