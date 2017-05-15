<template>
  <div class="demostratives">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">Place</span><span class="end">です</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <kanji sound="きょうしつ" kanji="教室"></kanji><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<kanji sound="きょうしつ" kanji="教室"></kanji><span class="particle">は</span><span class="pronoun">ここ</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="s1">トイレ</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<span class="s1">トイレ</span><span class="particle">は</span><span class="pronoun">そこ</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <kanji sound="しょくどう" kanji="食堂"></kanji><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<kanji sound="しょくどう" kanji="食堂"></kanji><span class="particle">は</span><span class="pronoun">あそこ</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <kanji sound="かいぎしつ" kanji="会議室"></kanji><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<span class="s1">2</span><kanji sound="かい" kanji="階"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <kanji sound="じむしょ" kanji="事務所"></kanji><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<span class="s1">3</span><kanji sound="かい" kanji="階"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="s1">クリスチャンさん</span><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<span class="s1">2</span><kanji sound="かい" kanji="階"></kanji><span class="s2">の</span><kanji sound="きょうしつ" kanji="教室"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <kanji sound="かいしゃ" kanji="会社"></kanji><span class="particle">は</span><span class="pronoun">どこ</span><span class="end">ですか</span>。<br>
            ...<span class="span s1">ソニー</span><span class="end">です</span>。
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