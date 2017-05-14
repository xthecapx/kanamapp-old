<template>
  <div class="grammar">
    <div class="col-xs-12 col-sm-8 col-md-6">
      <div class="form-group">
        <label for="sel1">What do you want to study?:</label>
        <select
          class="form-control"
          v-model="display">
          <option
            v-for="topic in topics"
            :value="topic.key">{{ topic.name }}</option>
        </select>
      </div>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
        mode="out-in">
        <component
          :is="display"></component>
      </transition>
      <div class="table-wrapper">
        <v-client-table
          :data="tableData"
          :columns="columns"
          :options="options"></v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
  import Demonstratives from './modules/Demonstratives'
  import { vocabulary } from './modules/Vocabulary'

  export default {
    data() {
      return {
        columns: ['kanji', 'sound', 'en'],
        options: {
          perPage: 5,
          texts: {
            filter:'Vocabulary:',
            filterPlaceholder:'Type Here',
          }
        },
        tableData: vocabulary,
        display: "demonstratives",
        topics: [
          {
            name: 'Demonstratives determiners',
            key: 'demonstratives'
          }
        ]
      }
    },
    methods: {
      goTopics() {
        this.$emit('mode', 'topics')
      }
    },
    components: {
      "demonstratives": Demonstratives
    }
  }
</script>

<style>
  .panel-title, .panel-body p {
    line-height: 20px;
  }

  .no-margin {
    margin: 0;
  }

  .panel-body p {
    line-height: 35px;
  }

  .kanji-container {
    display: inline-block;
  }

  .example {
    border-bottom: 1px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .example.tab {
    margin-left: 15px;
  }

  .example-container:last-child .example {
    padding: 0;
    border: 0;
  }
</style>