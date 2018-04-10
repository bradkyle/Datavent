<template>
  <div class="app-container business-list-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24"  >
        <el-card :body-style="{ padding: '30px' }">
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8" v-for="(o) in 6" :key="o" >
        <el-card :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span ><img v-bind:src=image class="profile-image" height="50" width="50"></span>
            <span>Business name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>          
          <div class="chart-wrapper">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Metrics" name="first">Task</el-tab-pane>
                <el-tab-pane label="People" name="second">
                  <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="Date"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="Name"
                    width="180">
                    <el-tag>Tag One</el-tag>
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="Address">
                  </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="Events" name="third">Events</el-tab-pane>
                <el-tab-pane label="Edit Details" name="forth">Role</el-tab-pane>                
            </el-tabs>
          </div>
        </el-card>
      </el-col>
    </el-row>

    
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.business-list-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  .el-card{
    margin-bottom: 20px;
    height:430px;
  }
}
</style>

<style>

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
import { fetchList } from '@/api/business'

export default {

  data() {
    return {
      list: null,
      image: 'https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg',
      total: null,
      listLoading: true,
      activeName: 'first',
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  },
  components: {},
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
