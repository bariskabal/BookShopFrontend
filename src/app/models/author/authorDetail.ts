import { Book } from "../book/book";

export interface AuthorDetail{
    id:number,
    authorName:string;
    description:string;
    books:Book[]
}