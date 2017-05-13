<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <p class="no-margin"><kanji sound="ねんれい" kanji="年齢" en="Age"></kanji></p>
      </div>
    </div>
    <div class="panel-body">
      <div class="example-container">
        <h4>Question</h4>
        <div class="example">
          <kanji sound="なんさい" kanji="何歳"></kanji><span class="end">ですか</span>。
        </div>
        <div class="example">
          <span class="s1">おいくつて</span><span class="end">ですか</span>。
        </div>
        <h4>Answer</h4>
        <div class="example">
          <span class="s1">おいくつて</span><span class="end">ですか</span>。
          <span class="s1">わたし</span><span class="particle">は</span> 27<kanji sound="さい" kanji="歳"></kanji><span class="end">です</span>。
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