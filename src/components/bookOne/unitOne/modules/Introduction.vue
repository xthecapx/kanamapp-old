<template>
<div class="panel panel-default">
  <div class="panel-heading">
    <div class="panel-title">
      <p class="no-margin"><kanji sound="じこしょうかい" kanji="自己紹介" en="Introduction"></kanji></p>
    </div>
  </div>
  <div class="panel-body">
    <div class="example-container">
      <div class="example">
        <span class="s1">はじめまして</span>。
      </div>
      <div class="example tab">
        <span class="optional">(わたしは)</span><span class="s1">クリスチャン</span><span class="end">です</span>。
      </div>
      <div class="example tab">
        <span class="optional">(わたしは)</span><span class="s1">エンジニア</span><span class="end">です</span>。
      </div>
      <div class="example tab">
        <span class="optional">(わたしは)</span><span class="s1">コロンビア人</span><span class="end">です</span>。
      </div>
      <div class="example tab">
        <span class="optional">(わたしは)</span><span class="s1">コロンビア</span><span class="particle">から</span><kanji sound="から" kanji="来"></kanji><span class="end">ました</span>。
      </div>
      <div class="example tab">
        <span class="optional">(わたしは)</span><span class="s1"> 27</span><kanji sound="さい" kanji="歳"></kanji><span class="end">です</span>。
      </div>
      <div class="example">
        <span class="s1">どうぞ</span><span class="particle">よろしく</span><span class="end">おねがいします</span>。
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