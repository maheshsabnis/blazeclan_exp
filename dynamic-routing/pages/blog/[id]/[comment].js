import {useRouter} from 'next/router';
import Header from '../../../components/header';

const Comment=()=>{
 
    const router = useRouter();
    // these parameter values will be received
    // form URLs on index.js
    const {id,comment} = router.query;

    return (
        <>
          <Header/>
          <h1>Showing the Dynamic Route</h1>
          <h2>
              The Blog mid = {id}
          </h2>
          <h2>
              The Comment is {comment}
          </h2>
        </>
    )

};

export default Comment;