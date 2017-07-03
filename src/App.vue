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
  import Dictionary from './pages/Dictionary';

  export default {
    data() {
      return {
        currentPage: 'BookOne',
        pages: ['BookOne', 'Answer', 'Dictionary'],
        openSide: false
      }
    },
    components: {
      "BookOne": BookOne,
      "Answer": AppReference,
      "Dictionary": Dictionary
    }
  }
</script>
