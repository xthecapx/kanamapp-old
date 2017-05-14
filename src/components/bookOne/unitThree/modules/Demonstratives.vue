<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><span class="pronoun">ここ</span> | <span class="pronoun">こちら</span></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <img src="images/b1u3/grammar/koko.jpg" class="img-responsive img-thumbnail" />
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">ここ</span> | <span class="pronoun">こちら</span> is the place where the speaker is.
          </div>
          <div class="example">
            <span class="pronoun">こちら</span> is more polite than <span class="pronoun">ここ</span>
          </div>
          <div class="example">
            <span class="pronoun">ここ</span><span class="particle">は</span><kanji sound="きょうしつ" kanji="教室"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="びょういん" kanji="病院"></kanji><span class="particle">は</span><span class="pronoun">ここ</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="pronoun">こちら</span><span class="particle">は</span><kanji sound="しょくどう" kanji="食堂"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="かいぎしつ" kanji="会議室"></kanji><span class="particle">は</span><span class="pronoun">こちら</span><span class="end">です</span>。
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