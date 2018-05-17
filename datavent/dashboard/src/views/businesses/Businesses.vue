<template>
  <div class="app-container business-list-container">
    <el-row :gutter="32">
      <div class="filter-container">
        <sticky className="sub-navbar">
          <!-- <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" :placeholder="$t('table.name')" v-model="listQuery.firstName">
          </el-input>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" :placeholder="$t('table.email')" v-model="listQuery.email">
          </el-input>
          <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.importance" :placeholder="$t('table.importance')">
            <el-option v-for="item in options.importanceOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
          <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.gender" :placeholder="$t('table.gender')">
            <el-option v-for="item in  options.genderTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
          <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.ethnicity" :placeholder="$t('table.ethnicity')">
            <el-option v-for="item in  options.ethnicityTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
          <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.jobTitle" :placeholder="$t('table.jobTitle')">
            <el-option v-for="item in  options.jobTitleOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
          <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.diet" :placeholder="$t('table.diet')">
            <el-option v-for="item in  options.dietaryOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select> -->
          <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">{{$t('table.search')}}</el-button>
          <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">{{$t('table.add')}}</el-button>
          <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves icon="el-icon-download" @click="handleDownload">{{$t('table.export')}}</el-button>
          <el-button class="filter-item" type="primary" :loading="upLoading" v-waves icon="el-icon-upload" @click="handleUpload">{{$t('table.import')}}</el-button>
        </sticky>
    </div>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8" v-for="(o) in 15" :key="o" >
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
import Sticky from '@/components/Sticky'
import { calendarTypeOptions, jobTitleOptions, dietaryOptions, ethnicityTypeOptions, importanceOptions, genderTypeOptions } from '@/utils/options'
import { fetchList } from '@/api/business'

export default {
  components: { Sticky },
  data() {
    return {
      list: null,
      image: 'https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg',
      total: null,
      listLoading: true,
      activeName: 'first',
      options: {
        importanceOptions,
        calendarTypeOptions,
        ethnicityTypeOptions,
        dietaryOptions,
        jobTitleOptions,
        genderTypeOptions
      },
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
