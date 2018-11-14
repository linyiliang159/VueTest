<template>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="30%">
    <component :is="currentView"></component>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        currentView:null
      };
    },
    methods: {
      showHandle(vnode) {
        this.currentView=vnode;
        this.dialogVisible = true;
      },
      hideHandle(){
        this.dialogVisible = false;
      }
    }
  };
</script>
