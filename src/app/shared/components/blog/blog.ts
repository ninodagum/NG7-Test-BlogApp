import { User } from 'src/app/core/user/user';

export interface Blog {
    id: number;
    userId: number;
    createdAt: Date;
    name: string;
    avatar: string;
    blogImage: string;
    tags: string;
    description: string;
    likes?: number;
    user?: User;

}

export declare type Blogs = Blog[];
