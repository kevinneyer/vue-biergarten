<template>
    <div>
        <select @change='styleHandler' name="style">
            <option value="All">All</option>
            <option value="IPA">IPA</option>
            <option value="Lager">Lager</option>
            <option value="Ale">Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Stout">Stout</option>
            <option value="Sour">Sour</option>
        </select>   
        <select @change='sortHandler' name="sort">
            <option value="none">None</option>
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
    data() {
        return{
            style: 'All',
            sort: 'None'
        }
    },
    methods: {
        styleHandler(event) {
            this.style = event.target.value
            this.$emit('style-handler', this.style)
        },
        sortHandler(event) {
            this.sort = event.target.value
            this.$emit('sort-handler', this.sort)
        }
    }
}
</script>