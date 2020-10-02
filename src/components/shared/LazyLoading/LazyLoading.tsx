import React, { Suspense } from 'react';
import { ILazyLoadingSkeleton } from '../../../models/ILazyLoadingSkeleton';
/**
 * Pass the component as children.
 * Import component reference using React.lazy(), for more details on lazy 
 * https://reactjs.org/docs/code-splitting.html#reactlazy.
 * It will show loading animation while component is being load dynamically 
 * ( i.e. loading component lazily ).
 * Skeleton component from material-ui is used to show loading animation. 
 * @param props React Children 
 */
export default function LazyLoadingComponent(props: { children: React.ReactChild, items?: ILazyLoadingSkeleton[] }) {

    const createItems: ILazyLoadingSkeleton[] = props.items ? props.items : [{ width: 40, height: 40, variant: 'circle' }, { height: 20, variant: 'text' }, { height: 100, variant: 'rect' }];

    const fallbackComponents = createItems.map((item: ILazyLoadingSkeleton, index: number) => {
        const attributes: any = {}
        Object.keys(item).forEach(key => {
            attributes[key] = item[key];
        })
        return < div key={index} {...attributes}></div>

    });
    return <>
        <Suspense fallback={fallbackComponents}>
            {props.children}
        </Suspense>
    </>;

}