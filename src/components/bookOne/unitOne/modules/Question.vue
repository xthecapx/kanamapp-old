<template>
  <div class="questions">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="ぎもんぶん" kanji="疑問文" en="Question Sentence"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">ですか</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">あなた</span><span class="particle">は</span><span class="s2">クリスチャン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="s1">あなた</span><span class="particle">は</span><span class="s2">クリスチャン</span><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="particle">そう</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="s1">クリスチャンさん</span><span class="particle">は</span><span class="s2">エンジニアて</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="s1">わたし</span><span class="particle">は</span><span class="s2">エンジニア</span><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="particle">そう</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="s1">クリスチャンさん</span><span class="particle">は</span><span class="s2">フランス人</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">いいえ</span>、<span class="s1">わたし</span><span class="particle">は</span><span class="s2">フランス人</span><span class="end">じゃありません</span>。
          </div>
          <div class="example">
            ...<span class="s1">いいえ</span>、<span class="particle">そう</span><span class="end">てじゃありません</span>。
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin"><kanji sound="しつもん" kanji="質問" en="Questions"></kanji></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">お</span><kanji sound="なまえ" kanji="名前"></kanji><span class="s1">は?</span>
          </div>
          <div class="example">
            ...<span class="s1">クリスチャン</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">お</span><kanji sound="しごと" kanji="仕事"></kanji><span class="s1">は?</span>
          </div>
          <div class="example">
            ...<span class="s1">エンジニア</span><span class="end">です</span>。
          </div>
          <div class="example">
            <span class="s1">お</span><kanji sound="くに" kanji="国"></kanji><span class="s1">は?</span>
          </div>
          <div class="example">
            ...<span class="s1">コロンビア</span><span class="end">です</span>。
          </div>
          <div class="example">
            <kanji sound="なんさい" kanji="何歳"></kanji><span class="end">ですか</span>。 |  <span class="s1">おいくつ</span><span class="end">ですか</span>。
          </div>
          <div class="example">

          </div>
          <div class="example">
            ...<span class="s1">27</span><kanji sound="さい" kanji="歳"></kanji><span class="end">です</span>。
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin">Who's that person?</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">あ</span><span class="particle">の</span><kanji sound="かた" kanji="方"></kanji><span class="particle">は</span><span class="s1">どなた</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">ディアナさん</span><span class="end">です</span>。
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