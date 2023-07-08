/* Creates a map indexable by multiple keys 
 * To set, we ask for multiple keys and a value
 * keys are identified by key names so we ask for keys as a Map of key name to key
 * key name schema must be set upon construction and keys must always follow the scame
 * for get, we take in a key (and associated key name) and by default return the value indexed by the given key. But if you set the optional boolean "get_keys" to be true, we will instead give you all the keys associated with value indexed by the given key
 */
class Multimap{
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
            key_info = new Map()
            key_info.set("keys", keys)
            key_info.set("value", value)
            key_indexed_data.set(key, key_info)
        }
    }

    get(key_name, key, get_keys = false){
        assert(this.map_contains_key(this.data, key_name), "key name not in schema")
        result = this.data.get(key_name).get(key)
        if(get_other_keys) return result.get("keys")
        else return result.get("value")
    }

    delete(key_name, key){
        assert(this.map_contains_key(this.data, key_name), "key name not in schema")
        keys = get(key_name, key, true)
        delete_given_all_keys(keys)
    }

    delete_given_all_keys(keys){
        for (const key_name of this.data.keys()){
            key_indexed_data = this.data.get(key_name)
            key = keys.get(key_name)
            key_indexed_data.delete(key)
        }
    }
}
