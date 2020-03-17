<template>
  <div style="padding-top: 16px;">
    <c-tabs selected="sports">
      <c-tabs-head>
        <template v-slot:actions>
          <c-button>设置</c-button>
        </template>
        <c-tabs-item name="anime">
          <hai-icon name="likes"></hai-icon>
          动漫
        </c-tabs-item>
        <c-tabs-item name="finance" disabled>财经</c-tabs-item>
        <c-tabs-item name="sports">体育</c-tabs-item>
      </c-tabs-head>

      <c-tabs-body>
        <c-tabs-pane name="anime">动漫相关资讯</c-tabs-pane>
        <c-tabs-pane name="finance">财经相关资讯</c-tabs-pane>
        <c-tabs-pane name="sports">体育相关资讯</c-tabs-pane>
      </c-tabs-body>
    </c-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from "../../../../src/tabs/Tabs"
  import TabsHead from "../../../../src/tabs/TabsHead"
  import TabsBody from "../../../../src/tabs/TabsBody"
  import TabsItem from "../../../../src/tabs/TabsItem"
  import TabsPane from "../../../../src/tabs/TabsPane"


  export default {
    components: {
      "c-tabs": Tabs,
      "c-tabs-head": TabsHead,
      "c-tabs-body": TabsBody,
      "c-tabs-item": TabsItem,
      "c-tabs-pane": TabsPane,
    },
    data() {
      return {
        content: `
         <c-input></c-input>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>