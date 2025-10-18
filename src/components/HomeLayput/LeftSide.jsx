import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftSide = () => {
    return (
      <div>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-md"></span>
          }
        >
          <Categories></Categories>
        </Suspense>
      </div>
    );
};

export default LeftSide;