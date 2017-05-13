<template>
  <div class="affiliation">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="しょぞく" kanji="所属" en="Affiliation"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">の</span><span class="s2">S2</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">わたし</span><span class="particle">は</span><span class="s2">La academia de lenguas orientales</span><span class="particle">の</span><kanji sound="きょうし" kanji="教師"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">わたし</span><span class="particle">は</span><span class="s2">グーグル</span><span class="particle">の</span><span class="s2">エンジニア</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">わたし</span><span class="particle">は</span><span class="s2">ボゴタ</span><kanji sound="びょういん" kanji="病院"></kanji><span class="particle">の</span><kanji sound="いしゃ" kanji="医者"></kanji><span class="end">です</span>。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import kanji from '../../../utils/Kanji'

  export default {
    components: {
      kanji
    }
  }
</script>

<style scoped>
  .example-container {
    border-bottom: 1px solid;
    margin-bottom: 8px;
  }

  .example-container:last-child .example, .example-container .example {
    border: 0;
  }

  .example-container:last-child {
    margin: 0;
    border: 0;
  }
</style>