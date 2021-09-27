import React, { Fragment, Suspense } from "react";

// Lazy Loading the component

const DepartmentComponent = React.lazy(() =>
  import("./../../funcitonalcomponents/departmentcomponent/departmentcomponent")
);

const LazyLoadedCompopnent = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="container">
            Waiting for the component to load.....
          </div>

        }
      >
         <section>
             <DepartmentComponent></DepartmentComponent>
         </section>

      </Suspense>
    </Fragment>
  );
};

export default LazyLoadedCompopnent;
