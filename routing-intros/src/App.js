/***                            Basic Router Part                      */

// import React from 'react';
// import { Route, Switch, Redirect } from "react-router-dom"
// import Welcome from './Basic-Router/Pages/welcome';
// import Product from './Basic-Router/Pages/product';
// import Mainheader from './Basic-Router/Component/Mainheader';
// import Productdetails from './Basic-Router/Pages/Productdetails';

// function App() {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <Mainheader></Mainheader>
//             <Switch>
//                 <Route path="/" exact>
//                     <Redirect to="/welcome"></Redirect>
//                 </Route>
//                 <Route path="/welcome" >
//                     <Welcome />
//                 </Route>
//                 {/* <Route path="/welcome/newuser" >
//                     <h1>hello new user</h1>
//                 </Route> */}
//                 <Route path="/product" exact component={Product}>
//                     {/* <Product /> */}
//                 </Route>
//                 <Route path="/product/:pid" >
//                     <Productdetails ></Productdetails>
//                 </Route>

//             </Switch>

//         </div>
//     )

// }

// export default App;


/**                             Project on Routing                            */

// import React, { Suspense } from 'react';
// import { Switch, Route, Redirect, } from 'react-router-dom';
// import Layout from './Quotes-project/Component/layout/Layout';

// const NewQuotes = React.lazy(() => import('./Quotes-project/Pages/NewQuotes'))
// const AllQuotes = React.lazy(() => import('./Quotes-project/Pages/AllQuotes'))
// const QuotesDetails = React.lazy(() => import('./Quotes-project/Pages/QuotesDetails'))



// function App() {
//     return (

//         <Layout>
//             <Suspense fallback={<p>Loading...</p>}>
//                 <Switch>
//                     <Route path="/" exact>
//                         <Redirect to="/quotes"></Redirect>
//                     </Route>

//                     <Route path="/quotes" exact>
//                         <AllQuotes></AllQuotes>
//                     </Route>

//                     <Route path="/quotes/:qid">
//                         <QuotesDetails></QuotesDetails>
//                     </Route>

//                     <Route path="/new-quotes">
//                         <NewQuotes></NewQuotes>
//                     </Route>

//                     <Route path="*">
//                         <h1>Wrong Path</h1>
//                     </Route>

//                 </Switch>
//             </Suspense>
//         </Layout>

//     )
// }

// export default App;


/*              Pagination Example                      */

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
const arr = [...Array(100).keys()]

function App() {

    let LimitPerPage = 20;
    let startingPage = 1;

    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);

    useEffect(() => {
        const PerPageItems = arr.slice((startingPage * LimitPerPage) - LimitPerPage, startingPage * LimitPerPage)
        setItems(PerPageItems);
        // window.addEventListener('scroll', function () {
        //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //         console.log("you're at the bottom of the page");
        //         handelload();
        //         // Show loading spinner and make fetch request to api
        //     }
        // })

        // return () => window.removeEventListener('scroll', function () {
        //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //         console.log("you're at the bottom of the page");
        //         handelload();
        //         // Show loading spinner and make fetch request to api
        //     }
        // });
    }, [startingPage, LimitPerPage])

    const NoofPage = arr.length / LimitPerPage;

    function handlePageClick(clickedkey) {
        const selectedkey = clickedkey.selected + 1;
        const PerPageItems = arr.slice((selectedkey * LimitPerPage) - LimitPerPage, selectedkey * LimitPerPage)
        setItems(PerPageItems);
    }

    function handelload(e) {
        // const selectedkey = clickedkey.selected + 1;
        console.log("trigger");
        const selectedkey = page;
        const PerPageItems = arr.slice((selectedkey * LimitPerPage) - LimitPerPage, selectedkey * LimitPerPage)
        setItems((pre) => {
            // console.log(pre)
            // console.log(PerPageItems);
            return [...pre, ...PerPageItems]
        });

        if (PerPageItems.length === 0 || PerPageItems.length < 20) {
            sethasMore(false);
            console.log("no page");
        }

        setpage(page + 1);
        // console.log(e.target.value);



    }

    return (
        <div>

            <InfiniteScroll
                loadMore={handelload}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {items.map((item, i) => <h1 key={i}>Item no {item}</h1>)}
            </InfiniteScroll>


            {/* <button type="submit" onClick={(e) => handelload(e)}> Load more </button> */}

            {/* <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={">>"}
                initialPage={startingPage - 1}
                pageCount={NoofPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            /> */}

        </div >
    );
}

export default App;