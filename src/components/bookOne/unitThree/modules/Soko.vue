<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><span class="pronoun">そこ</span> | <span class="pronoun">そちら</span></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <img src="images/b1u3/grammar/soko.jpg" class="img-responsive img-thumbnail" />
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">そこ</span> | <span class="pronoun">そちら</span> is the place where the listener is.
          </div>
          <div class="example">
            <span class="pronoun">そちら</span> is more polite than <span class="pronoun">そこ</span>
          </div>
          <div class="example">
            <span class="pronoun">そこ</span><span class="particle">は</span><kanji sound="じむしょ" kanji="事務所"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="うけつけ" kanji="受付"></kanji><span class="particle">は</span><span class="pronoun">そこ</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="pronoun">そちら</span><span class="particle">は</span><span class="s2">ロビー</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">エレベータ</span><span class="particle">は</span><span class="pronoun">そちら</span><span class="end">です</span>。
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