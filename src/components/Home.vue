<template>
  <el-row>
    <el-col :span="3" style="height: 800px;">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo" style="text-align: left;">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21" style="background: rgba(97,97,81,0.46);height: 800px;padding: 10px">
      <div class="liny_breadcrumbbox">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-card class="box-card" style="text-align: left;">
        <div slot="header" class="clearfix">
          <span>数据列表</span>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%" height="500">
          <el-table-column
            prop="Code"
            label="编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="CompanyName"
            label="名称"
            width="380">
          </el-table-column>
          <el-table-column
            prop="Address"
            label="地址">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination :total="total" @pageChange="pageChange"></pagination>
      </el-card>
    </el-col>
  </el-row>
</template>


<style>
  .liny_breadcrumbbox {height:20px;padding:20px;}
</style>


<script>
  import {queryCompanyList} from '../vuex/actions/CompanyAction'
  import Pagination from './Pagination'

  export default {
    data() {
      return {
        tableData: [],
        total: 100,
        page:1,
        limit:10
      }
    },
    components: {
      pagination: Pagination
    },
    mounted() {
      this.initTable();
    },
    methods: {
      // 页码切换
      pageChange(item) {
        this.page = item.page;
        this.limit = item.limit;
        this.initTable();
      },
      initTable() {
        queryCompanyList(this);
      }
    }
  }
</script>
