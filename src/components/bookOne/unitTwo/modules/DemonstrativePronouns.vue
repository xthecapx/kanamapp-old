<template>
  <div class="mo">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><span class="particle">これ</span> | <span class="particle">それ</span> | <span class="particle">あれ</span></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">です</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <img src="images/b1u2/grammar/kore.jpg" class="img-responsive img-thumbnail" />
            <span class="pronoun">これ</span><span class="particle">は</span><span class="s1">ペン</span><span class="end">です</span>。
          </div>
          <div class="example">
            <img src="images/b1u2/grammar/sore.jpg" class="img-responsive img-thumbnail" />
            <span class="pronoun">それ</span><span class="particle">は</span><span class="s1">ペン</span><span class="end">です</span>。
          </div>
          <div class="example">
            <img src="images/b1u2/grammar/are.jpg" class="img-responsive img-thumbnail" />
            <span class="pronoun">あれ</span><span class="particle">は</span><span class="s1">ペン</span><span class="end">です</span>。
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