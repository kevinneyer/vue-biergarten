<template>
    <div>
        <select @change='styleHandler' name="style">
            <option value=null>All</option>
            <option value="IPA">IPA</option>
            <option value="Lager">Lager</option>
            <option value="Ale">Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Stout">Stout</option>
            <option value="Sour">Sour</option>
        </select>   
        <select @change='sortHandler' name="sort">
            <option value=null>None</option>
            <option value='abv-asc'>ABV ASC</option>
            <option value='abv-desc'>ABV DESC</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'FilterBeers',
    methods: {
        styleHandler(event) {
            this.$emit('style-handler', event.target.value)
        },
        sortHandler(event) {
            this.$emit('sort-handler', event.target.value)
        }
    }
}
</script>