<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <p><kanji sound="ひていぶん" kanji="否定文" en="Negative Sentence"></kanji></p>
        <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">じゃありません</span>。</p>
      </div>
    </div>
    <div class="panel-body">
      <div class="example-container">
        <div class="example">
          <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">じゃありません</span>。
        </div>
        <div class="example">
          <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">じゃありません</span>。
        </div>
        <div class="example">
          <span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">じゃありません</span>。
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