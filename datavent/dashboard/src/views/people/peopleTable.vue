<template>
  <div class="app-container people-list-container">
    <div class="filter-container">
      <sticky className="sub-navbar">
        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" :placeholder="$t('table.name')" v-model="listQuery.firstName">
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
        </el-select>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">{{$t('table.search')}}</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">{{$t('table.add')}}</el-button>
        <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves icon="el-icon-download" @click="handleDownload">{{$t('table.export')}}</el-button>
        <el-button class="filter-item" type="primary" :loading="upLoading" v-waves icon="el-icon-upload" @click="handleUpload">{{$t('table.import')}}</el-button>
      </sticky>
    </div>

    <!-- People Table -->

    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="loading" border fit highlight-current-row
      style="width: 100%" @selection-change="handleSelectionChange">

      <el-table-column
      type="selection"
      width="55">
      </el-table-column>

      <el-table-column align="center" :label="$t('table.id')" width="85">
        <template slot-scope="scope">
          <span><img v-bind:src=scope.row.image class="profile-image" height="50" wisdth="50"></span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.name')">
        <template slot-scope="scope">
          <span class="link-type" @click="handleView(scope.row)">{{scope.row.firstName}} {{scope.row.lastName}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.email')">
        <template slot-scope="scope">
          <span  class="link-type"  @click="handleEmail(scope.row)">{{scope.row.email}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.diet')">
        <template slot-scope="scope">
          <span  class="link-type">{{scope.row.diet.display_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.gender')">
        <template slot-scope="scope">
          <span >{{scope.row.gender.display_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.ethnicity')">
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.ethnicity.display_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" :label="$t('table.jobTitle')">
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.jobTitle.display_name}}</span>
        </template>
      </el-table-column>

      <el-table-column width="80px" :label="$t('table.importance')">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
        </template>
      </el-table-column>

    </el-table>

    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[30, 50, 100, 150]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <!-- Create New Person dialogue -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" padding-bottom="5vh !important">
      <person-form :temp="temp" :table="$t('table')" :options="options" :list="list"></person-form>
    </el-dialog>

    <el-dialog title="View Person" :visible.sync="dialogViewVisible" margin-bottom="5vh !important">
      <div class="tab-container">
        <el-tabs style='margin-top:15px;' v-model="activeName">
          <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
            <keep-alive>
               <div v-if="activeName=='details'">
                  <h1>{{item.key}}</h1>
               </div>
               <div v-else-if="activeName=='edit'">
                  <person-form :temp="temp" :table="$t('table')" :options="options" :list="list"></person-form>
               </div>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>

    <el-dialog title="Excel Upload" :visible.sync="dialogUploadVisible">
      <upload-excel-component @on-selected-file='selected'></upload-excel-component>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item'>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.people-list-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .el-table{
    border: 1px solid #e0e0e0
  }
  
}
.sub-navbar{
  border: 1px solid #e0e0e0 !important;
}
</style>


<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import Sticky from '@/components/Sticky'
import PersonForm from '@/components/PersonForm'
import { fetchList } from '@/api/person'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'
import { calendarTypeOptions, jobTitleOptions, dietaryOptions, ethnicityTypeOptions, importanceOptions, genderTypeOptions } from '@/utils/options'
import ImageCropper from '@/components/ImageCropper'

// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

const genderKeyValue = genderTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'complexTable',
  directives: {
    waves
  },
  data() {
    return {
      tabMapOptions: [
        { label: 'Details', key: 'details' },
        { label: 'Edit Details', key: 'edit' },
        { label: 'Events', key: 'events' },
        { label: 'Affiliations', key: 'affiliations' },
        { label: 'Tags', key: 'tags' },
        { label: 'Email', key: 'email' }
      ],
      activeName: 'details',
      createdTimes: 0,
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      options: {
        importanceOptions,
        calendarTypeOptions,
        ethnicityTypeOptions,
        dietaryOptions,
        jobTitleOptions,
        genderTypeOptions
      },
      listQuery: {
        page: 1,
        limit: 50,
        importance: undefined,
        type: undefined,
        email: undefined,
        ethnicity: undefined,
        gender: undefined,
        diet: undefined,
        jobTitle: undefined,
        image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
        sort: '+id'
      },
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
        ethnicity: '',
        gender: '',
        diet: '',
        jobTitle: '',
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogUploadVisible: false,
      dialogViewVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      downloadLoading: false,
      multipleSelection: []
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    },
    genderFilter(gender) {
      return genderKeyValue[gender]
    }
  },
  created() {
    this.getList()
  },
  components: { Sticky, UploadExcelComponent, ImageCropper, PersonForm },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleListUpdate($event) {
      for (const v of this.list) {
        if (v.id === this.temp.id) {
          const index = this.list.indexOf(v)
          this.list.splice(index, 1, $event)
          break
        }
        this.dialogFormVisible = false
        this.dialogViewVisible = false
        this.$notify({
          title: 'Success',
          message: 'Created Person',
          type: 'success',
          duration: 2000
        })
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleListCreate($event) {
      this.list.unshift($event)
      this.dialogFormVisible = false
      this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        duration: 2000
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: 'Success',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleView() {
      this.dialogStatus = 'view'
      this.dialogViewVisible = true
    },
    handleEmail() {
      console.log('Not implemented')
    },
    handleUpload() {
      this.resetTemp()
      this.dialogStatus = 'upload'
      this.dialogUploadVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel(tHeader, data, 'table-list')
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
