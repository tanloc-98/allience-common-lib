export interface BaseRepository<E, ID> {
    findById(id: ID): E;
    findAll(): Array<E>;
    findAllByIds(ids: Array<ID>): Array<E>;
    save(entity: E): E;
    saveAll(entities: Array<E> | Set<E>): Array<E>;
    deleteById(id: ID): boolean;
    deleteByIds(ids: Array<ID>): boolean;
    existedById(id: ID): boolean;
}
//# sourceMappingURL=repository.base.d.ts.map