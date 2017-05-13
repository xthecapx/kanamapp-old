<template>
  <div class="mo">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin"><span class="s1">S</span><span class="particle">も</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">クリスチャンさん</span><span class="particle">は</span><span class="s2">コロンビア</span><kanji sound="じん" kanji="人"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">ディアナさん</span><span class="particle">も</span><span class="s2">コロンビア</span><kanji sound="じん" kanji="人"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">アルバロさん</span><span class="particle">も</span><span class="s2">コロンビア</span><kanji sound="じん" kanji="人"></kanji><span class="end">です</span>。
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