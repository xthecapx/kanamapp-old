<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin">Other expressions</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">お</span><kanji sound="くに" kanji="国"></kanji><span class="particle">は</span><span class="pronoun">どちら</span><span class="end">ですか</span>。<br>
            ...<span class="s1">コロンビア</span><span class="end">です</span>。
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