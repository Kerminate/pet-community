<template lang="html">
  <el-dialog title="提示" :visible.sync="dialogVisible" size="small">
    <component :is="currentView"></component>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      currentView: null
    }
  },
  methods: {
    showDialog (vnode) {
      // vnode 外部传入的标签
      this.currentView = vnode
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
