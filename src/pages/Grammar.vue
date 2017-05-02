<template id="grammar">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <v-ons-button modifier="quiet" style="margin: 6px 0" @click="goTopics">Go Topics</v-ons-button>
      <h2>S1は S2です。(肯定文 | <span>こうていぶん</span> (Positive Sentence))</h2>
      <p>わたしは<mark>クリスチャン</mark>です。(名前(Name))</p>
      <p>わたしは<mark>エンジニア</mark>です。(職業 | <span>しょくぎょう</span>(Occupation))</p>
      <p>わたしは<mark>コロンビア人</mark>です。(国籍 | <span>こくせき</span> (Nationality))</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goTopics() {
        this.$emit('mode', 'topics')
      }
    }
  }
</script>