import Header from "../../../components/header";
import {useRouter} from 'next/router';
import Link from "next/link";
const Blog=()=>{
    const router = useRouter();
    const {id} =  router.query;

    

    return (
        <>
            <Header/>
            <h2>
                The Current Blog Id = {id} 
            </h2>
            <ul>
                <li>
                    {/* [id] will be received from the Header Component using the Link 
                        /blog/first, value of [id] will be first 
                         The value for [comment] will be received from the 'as' expression value
                         '/blog/${id}/first-comment', the [comment] will be 'first-comment'
                         Link component uses 'href' and 'as' props as Regular expressions
                         
                         NOTE:
                          The '/blog/[id]/[comment]' expression means that, the root (/ or 'pages')
                          contains 'blog' sub-directory, this contains [id] sub directory, the [id]
                          sub-directory, contains [comment].js

                          Note: [id] and [comment] will be dynamically replaced based on query
                          parameters

                          Note: as={`/blog/${id}/first-comment`}
                            - ${id} and first-comment will be values for Query Parameters
                            gerated using 'as'  

                        */}
                    <Link href="/blog/[id]/[comment]"
                      as={`/blog/${id}/first-comment`}>
                       <a>First Comment</a>
                    </Link>
                </li>
                <li>
                <Link href="/blog/[id]/[comment]"
                      as={`/blog/${id}/second-comment`}>
                       <a>Second Comment</a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Blog;