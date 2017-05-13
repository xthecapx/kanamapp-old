<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px"
      collapse=""
      side="left"
      :open="openSide"
      @update="openSide = $event">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item
            v-for="page in pages"
            tappable modifier="chevron"
            @click="currentPage = page; openSide = false">
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component
        :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  import BookOne from './pages/BookOne';
  import AppReference from './pages/Reference';

  export default {
    data() {
      return {
        currentPage: 'book-one',
        pages: ['book-one', 'app-reference'],
        openSide: false
      }
    },
    components: {
      "book-one": BookOne,
      "app-reference": AppReference
    }
  }
</script>
