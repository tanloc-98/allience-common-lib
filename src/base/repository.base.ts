export interface BaseRepository<E, ID> {
    /**
     * The method to get the entity base on primary key
     * @param id The primary key
     */
    findById(id: ID): E;

    /**
     * The method to get the entity base on primary key
     * @param id The primary key
     */
    findAll(): Array<E>;

    /**
     * The method to get the entity base on primary key
     * @param ids The primary key list
     */
    findAllByIds(ids: Array<ID>): Array<E>;

    /**
     * The method to save or update the entity
     * @param entity The entity will be save or update
     */
    save(entity: E): E;

    /**
     * The method to save or update the entities
     * @param entities The entity list will be save or update
     */
    saveAll(entities: Array<E> | Set<E>): Array<E>;

    /**
     * The method to delete the entity
     * @param id The primary key
     */
    deleteById(id: ID): boolean;

    /**
     * The method to delete the entities
     * @param ids The primary key list
     */
    deleteByIds(ids: Array<ID>): boolean;

    /**
     * The method to check the primary key is existed
     * @param id The primary key
     */
    existedById(id: ID): boolean;
}
