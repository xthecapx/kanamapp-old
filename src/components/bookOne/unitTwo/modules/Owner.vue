<template>
  <div class="questions">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="もちぬし" kanji="持ち持主" en="Owner"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">の</span><span class="s2">S2</span><span class="end">ですか</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><span class="s1">だれ</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><span class="s1">クリスチャンさん</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
          <div class="example tab">
            = <span class="pronoun">そ</span><span class="particle">の</span><span class="s2">ペン</span><span class="particle">は</span><span class="s1">クリスチャンさん</span><span class="particle">の</span><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><span class="s1">クリスチャンさん</span><span class="particle">の</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><span class="s1">だれ</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s1">ディアナさん</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
          <div class="example tab">
            = <span class="pronoun">こ</span><span class="particle">の</span><span class="s2">ペン</span><span class="particle">は</span><span class="s1">ディアナさん</span><span class="particle">の</span><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s1">ディアナさん</span><span class="particle">の</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><span class="s1">だれ</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><span class="s1">アルバロさん</span><span class="particle">の</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
          <div class="example tab">
            = <span class="pronoun">あ</span><span class="particle">の</span><span class="s2">ペン</span><span class="particle">は</span><span class="s1">ディアナさん</span><span class="particle">の</span><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><span class="s1">アルバロさん</span><span class="particle">の</span><span class="end">です</span>。
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