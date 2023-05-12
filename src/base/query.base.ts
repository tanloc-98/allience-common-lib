/**
 * The wrapper for search, sort and filter with pagination
 */
export interface BaseQuery<S, SO, F> extends BaseSearch<S>, BaseFilter<F>, BaseSort<SO> {}

/**
 * The Wrapper of filter
 */
export interface BaseFilter<F> {
    /**
     * Contains properties to filter
     */
    filter?: F;
}

/**
 * The Wrapper of sort
 */
export interface BaseSort<S> {
    /**
     * Contains properties to sort
     */
    sort?: S;
}

/**
 * The Wrapper of search
 */
export interface BaseSearch<S> {
    /**
     * Contains properties to search
     */
    search?: S;
}
