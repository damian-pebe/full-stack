import React from "react";
import { Skeleton } from "./ui/skeleton";
import { skeletonCardStyles } from "../lib/itemsStyles";

export const SkeletonCard = () => {
  return (
    <div style={skeletonCardStyles.container}>
      <div style={{ flex: 1 }}>
        <Skeleton
          style={{
            ...skeletonCardStyles.skeleton,
            ...skeletonCardStyles.titleSkeleton,
          }}
        />
      </div>
      <div style={{ width: 100 }}>
        <Skeleton
          style={{
            ...skeletonCardStyles.skeleton,
            ...skeletonCardStyles.priceSkeleton,
          }}
        />
      </div>
      <div style={{ width: 80 }}>
        <Skeleton
          style={{
            ...skeletonCardStyles.skeleton,
            ...skeletonCardStyles.categorySkeleton,
          }}
        />
      </div>
    </div>
  );
};
