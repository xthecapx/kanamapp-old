<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <p><p><span class="pronoun">ここ</span> | <span class="pronoun">そこ</span> | <span class="pronoun">あそこ</span></p></p>
        <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
      </div>
    </div>
    <div class="panel-body">
      <div class="example-container">
        <div class="example">
          <span class="pronoun">ここ</span><span class="particle">は</span><kanji sound="きょうしつ" kanji="教室" en="Occupation"></kanji><span class="end">です</span>。
        </div>
      </div>
      <div class="example-container">
        <div class="example">
          <span class="pronoun">そこ</span><span class="particle">は</span><span class="s1">トイレ</span><span class="end">です</span>。
        </div>
      </div>
      <div class="example-container">
        <div class="example">
          <span class="pronoun">あそこ</span><span class="particle">は</span><kanji sound="しょくどう" kanji="食堂" en="Occupation"></kanji><span class="end">です</span>。
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