/* Allows a multi-indexable*/
class Multimap{

    constructor(key_names){
        this.key_names = key_names
        this.data = new Map()
        for( const key_name of this.key_names ) {
            this.data.set(key_name, new Map())
        }
    }

    add_entity(new_entity){
        for( const key_name of this.key_names ) {
            key_indexed_data = this.data.get(key_name)
            key = new_entity.get(key_name)
            key_indexed_data.set(key, new_entity)
        }
    }

    get_entity(key_name, key){
        return this.data.get(key_name).get(key)
    }

}

