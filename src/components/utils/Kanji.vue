<template>
  <div class="kanji-container">
    <div class="kanji">
      <small class="sound">{{ sound }}</small>
      <span class="write">{{ kanji }}</span>
    </div>
    <div class="en" v-if="en">{{ en }}</div>
  </div>
</template>

<script>
  export default {
    props: ['sound', 'kanji', 'en']
  }
</script>

<style scope>
  .kanji-container .en {
    display: inline-block;
    vertical-align: top;
    margin: 10px 0 0 10px;
    font-style: italic;
  }

  .kanji {
    display: inline-block;
    text-align: center;
    line-height: 17px;
  }

  .kanji .sound, .kanji .write {
    width: 100%;
  }

  .kanji .sound {
    float: left;
    font-size: 10px;
  }

  .kanji .write {
    float: left;
    clear: left;
  }
</style>