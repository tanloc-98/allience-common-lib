export interface BaseQuery<S, SO, F> extends BaseSearch<S>, BaseFilter<F>, BaseSort<SO> {
}
export interface BaseFilter<F> {
    filter?: F;
}
export interface BaseSort<S> {
    sort?: S;
}
export interface BaseSearch<S> {
    search?: S;
}
//# sourceMappingURL=query.base.d.ts.map