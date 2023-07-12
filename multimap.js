/* Creates a map indexable by multiple keys 
 * To set, we ask for multiple keys and a value
 * keys are identified by key names so we ask for keys as a Map of key name to key
 * key name schema must be set upon construction and keys must always follow the schema
 * the schema can change with add/remove key name
 * for get, we take in a key (and associated key name) and by default return the value indexed by the given key. But if you set the optional boolean "get_keys" to be true, we will instead give you all the keys associated with value indexed by the given key
 */

class Multimap {
    constructor(schema){
        this.data = new Map()
        for( const key_name of schema ) {
            this.data.set(key_name, new Map())
        }
    }

    keys_match(map1, map2) {
        result = true
        map1.keys().forEach(key_name => { result = result && map2.has(key_name)});
        map2.keys().forEach(key_name => { result = result && map1.has(key_name)});
        return result
    }

    map_contains_key(map, key) {
        return map.has(key)
    }

    keys(key_name) {
        return this.data.get(key_name).keys()
    }

    has(key_name, key) {
        assert(this.map_contains_key(this.data, key_name), "key name not in schema")
        return this.data.get(key_name).has(key)
    }

    schema(){
        return this.data.keys()
    }

    set(keys, value){
        assert(this.keys_match(this.data, keys), "keys doesn't match schema")
        key_names = this.data.keys()
        for (const key_name of key_names){
            key_indexed_data = this.data.get(key_name)
            key = keys.get(key_name)
            key_indexed_data.set(key, key_info)
            key_info = new Map()
            key_info.set("keys", keys)
            key_info.set("value", value)
        }
    }

    get(key_name, key, get_keys = false){
        assert(this.map_contains_key(this.data, key_name), "key name not in schema")
        result = this.data.get(key_name).get(key)
        if(get_keys) return result.get("keys")
        else return result.get("value")
    }

    get_submap(key_name1, key_name2 = null, value = null) {
        return
    }

    delete(key_name, key){
        assert(this.map_contains_key(this.data, key_name), "key name not in schema")
        keys = get(key_name, key, true)
        this.delete_given_all_keys(keys)
    }

    delete_given_all_keys(keys){
        this.data.keys().forEach((key_name) => {
            const key = keys.get(key_name)
            const key_indexed_data = this.data.get(key_name)
            key_indexed_data.delete(key)
        })
    }

    add_key_name(given_key_name, new_key_name, new_keys) {
        this.map_contains_key(this.data, given_key_name)
        const given_key_indexed_data = this.data.get(given_key_name)
        this.keys_match(given_key_indexed_data, new_keys)
        
        for( const key_name of this.data.keys()) {
            const key_indexed_data = this.data.get(key_name)
            for( const given_key of new_keys ) {
                const key = given_key_indexed_data.get(given_key).get("keys").get(key_name)
                const value = key_indexed_data.get(key)
                const keys = value.get("keys")
                keys.set(new_key_name, new_keys.get(given_key))
                value.set("keys", keys)
                key_indexed_data.set(key, value)
            }
        }
        const new_key_indexed_data = new Map()
        for( const given_key of new_keys ) {
            const key = new_keys.get(given_key)
            const value = given_key_indexed_data.get(given_key)
            new_key_indexed_date.set(key, value)
        }
        this.data.set(new_key_name, new_key_indexed_data)
    }

    remove_key_name(given_key_name){
        this.data.remove(given_key_name)
        for( const key_name of this.data.keys()) {
            const key_indexed_data = this.data.get(key_name)
            for( const key of key_indexed_data.keys() ) {
                const value = key_indexed_data.get(key)
                const keys = value.get("keys")
                keys.remove(given_key_name)
                value.set("keys", keys)
                key_indexed_data.set(key, value)
            }
        }
    }
}

