<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <p><kanji sound="こうていぶん" kanji="肯定文" en="Positive Sentence"></kanji></p>
        <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
      </div>
    </div>
    <div class="panel-body">
      <div class="example-container">
        <kanji sound="なまえ" kanji="名前" en="Name"></kanji>
        <div class="example">
          <span class="s1">わたし</span><span class="particle">は</span><span class="s2">クリスチャン</span><span class="end">です</span>。
        </div>
      </div>
      <div class="example-container">
        <kanji sound="しょくぎょう" kanji="職業" en="Occupation"></kanji>
        <div class="example">
          <span class="s1">わたし</span><span class="particle">は</span><span class="s2">エンジニア</span><span class="end">です</span>。
        </div>
      </div>
      <div class="example-container">
        <kanji sound="こくせき" kanji="国籍" en="Nationality"></kanji>
        <div class="example">
          <span class="s1">わたし</span><span class="particle">は</span><span class="s2">コロンビア人</span><span class="end">です</span>。
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