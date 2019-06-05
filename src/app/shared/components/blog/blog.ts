export interface Blog {
    id: number;
    userId: number;
    createdAt: Date;
    name: string;
    avatar: string;
    blogImage: string;
    tags: string;
    description: string;

}

export declare type Blogs = Blog[];
