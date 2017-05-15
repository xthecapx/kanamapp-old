<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin"><kanji sound="ねだん" kanji="値段" en="Price"></kanji></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">たまご</span><span class="particle">は</span><span class="s2">いくら</span><span class="end">ですか</span>。<br>
            ...<span class="s1">たまご</span><span class="particle">は</span><span class="s2">400</span><kanji sound="えん" kanji="円"></kanji><span class="end">です</span>。
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