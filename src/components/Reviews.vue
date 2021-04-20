<template>
    <div>
        Reviews
        <div v-if="reviews.length > 0">
            <div v-for="review in reviews" :key="review.review_id" >
            {{ review.rating }} Stars: {{ review.content }} - {{ review.user }}
            </div>
        </div>
        <div v-else>
            No Reviews!
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
    props: ['reviews']
}
</script>