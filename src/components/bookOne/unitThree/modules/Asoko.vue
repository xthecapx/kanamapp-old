<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><span class="pronoun">あそこ</span> | <span class="pronoun">あちら</span></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <img src="images/b1u3/grammar/asoko.jpg" class="img-responsive img-thumbnail" />
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あそこ</span> | <span class="pronoun">あちら</span> is the place far from the speaker and the listener.
          </div>
          <div class="example">
            <span class="pronoun">あちら</span> is more polite than <span class="pronoun">あそこ</span>
          </div>
          <div class="example">
            <span class="pronoun">あそこ</span><span class="particle">は</span><kanji sound="だいがく" kanji="大学"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="すずき" kanji="鈴木"></kanji><span class="s1">さん</span><span class="particle">は</span><span class="pronoun">あそこ</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="pronoun">あちら</span><span class="particle">は</span><span class="s2">トイレ</span><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="かいだん" kanji="階段"></kanji><span class="particle">は</span><span class="pronoun">あちら</span><span class="end">です</span>。
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