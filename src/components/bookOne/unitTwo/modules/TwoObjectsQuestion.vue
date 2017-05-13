<template>
  <div class="questions">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="ぎもんぶん" kanji="疑問文" en="Question Sentence"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">ですか</span>。<span class="s2">S3</span><span class="end">ですか</span>。</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。<span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。<span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。<span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
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