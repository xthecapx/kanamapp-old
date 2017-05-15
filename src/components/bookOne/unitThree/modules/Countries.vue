<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p>Where (Country) it comes from/Where (Company) it comes from</p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">の</span><span class="s2">Place</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="pronoun">それ</span><span class="particle">は</span><kanji sound="にほん" kanji="日本"></kanji><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s1">ドイツ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="s1">アメリカ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="span pronoun">それ</span><span class="particle">は</span><span class="s1">トヨタ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="span pronoun">これ</span><span class="particle">は</span><span class="s1">BMW</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">ですか</span>。<br>
            ...<span class="s1">フォード</span><span class="particle">の</span><kanji sound="くるま" kanji="車"></kanji><span class="end">です</span>。
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

<style>
  .img-thumbnail {
    width:130px;
    height:auto;
  }
</style>