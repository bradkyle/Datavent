<template>
    <div>
        <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="120px" style='width: 400px; margin-left:50px;'>

        <div class="components-container">
          <pan-thumb :image="image" ></pan-thumb>
          <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">Change avatar
          </el-button>

          <image-cropper :width="300" :height="300" url="https://httpbin.org/post" @close='cropClose' @crop-upload-success="cropSuccess" langType="en"
            :key="imagecropperKey" v-show="imagecropperShow"></image-cropper>
        </div>

        <el-form-item :label="$t('table.firstName')" prop="firstname">
          <el-input v-model="temp.firstName"></el-input>
        </el-form-item>

        <el-form-item :label="$t('table.lastName')" prop="lastname">
          <el-input v-model="temp.lastName"></el-input>
        </el-form-item>

        <el-form-item :label="$t('table.email')" prop="email">
          <el-input v-model="temp.email"></el-input>
        </el-form-item>

        <el-form-item :label="$t('table.cell')" prop="cell">
          <el-input v-model="temp.cell"></el-input>
        </el-form-item>

        <el-form-item :label="$t('table.jobTitle')" prop="jobTitle">
          <el-select class="filter-item" v-model="temp.jobTitle" placeholder="Please select">
            <el-option v-for="item in options.jobTitleOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('table.ethnicity')" prop="ethnicity">
          <el-select class="filter-item" v-model="temp.Diet" placeholder="Please select">
            <el-option v-for="item in options.ethnicityTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('table.gender')" prop="gender">
          <el-select class="filter-item" v-model="temp.Gender" placeholder="Please select">
            <el-option v-for="item in options.genderTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('table.diet')" prop="diet">
          <el-select class="filter-item" v-model="temp.Diet" placeholder="Please select">
            <el-option v-for="item in options.dietaryOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date">
          </el-date-picker>
        </el-form-item>

        <el-form-item :label="$t('table.importance')">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
        </el-form-item>

        <el-form-item :label="$t('table.remark')">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="Please input" v-model="temp.remark">
          </el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updateData">{{$t('table.confirm')}}</el-button>
      </div>
    </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import ImageCropper from '@/components/ImageCropper'
import { updatePerson, createPerson } from '@/api/person'

export default {
  props: {
    temp: {
      type: [Array, Object],
      required: true
    },
    table: {
      type: [Array, Object],
      required: true
    },
    options: {
      type: [Array, Object],
      required: true
    }
  },
  components: { ImageCropper, PanThumb },
  data() {
    return {
      name: 'PersonForm',
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      imagecropperShow: false,
      imagecropperKey: 0,
      rules: {
        // type: [{ required: true, message: 'type is required', trigger: 'change' }],
        // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        // title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      }
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    cropClose() {
      this.imagecropperShow = false
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createPerson(this.temp).then(() => {
            this.emit('handleListCreate', this.temp)
          })
        }
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updatePerson(tempData).then(() => {
            this.emit('handleListUpdate', this.temp)
          })
        }
      })
    }
  }
}
</script>
