<template>
    <div>
        <select @change='styleHandler($event)' name="style">
            <option value="None">None</option>
            <option value="IPA">IPA</option>
            <option value="Lager">Lager</option>
            <option value="Ale">Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Stout">Stout</option>
            <option value="Sour">Sour</option>
        </select>   
    </div>
</template>

<script>
export default {
    name: 'FilterBeers',
    data() {
        return{
            style: 'None'
        }
    },
    methods: {
        styleHandler(event) {
            this.style = event.target.value
            this.$emit('style-handler', this.style)
            console.log(this.style )
        }
    }
}
</script>