<template>
  <div class="my-wrapper" :style="customStyle">
    <el-cascader
      v-model="localValue"
      :options="options"
      :placeholder="placeholder"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'AppCascader',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Chọn ngôn ngữ'
    },
    bgColor: {
      type: String,
      default: '#1e3c72'
    },
    bgDropDown:{
      type:String,
      default:'#dd0182'
    },
    textColor: {
      type: String,
      default: '#ffffff'
    },
    styleWidth:{
      type:String,
      default:'150px'
    },

  },
  computed: {
    customStyle() {
      return {
        '--bg-color': this.bgColor,
        '--text-color': this.textColor,
        '--style-width': this.styleWidth,
       
    
      }
    }
  },
  data() {
    return {
      localValue: this.modelValue 
    }
  },
  watch: {
    modelValue(val) {
      this.localValue = val; 
    }
  },
  methods: {
    onChange(val) {
      this.$emit('update:modelValue', val); 
    }
  }
}
</script>

<style>
.my-wrapper .el-input__wrapper {
  background-color: var(--bg-color) !important;
  border-radius: 15px;
  width: var(--style-width) !important;
  box-shadow: none;

}
.my-wrapper .el-input__inner {
  color: var(--text-color) !important;
}

.el-popper.is-light {
  margin-top: 0px;
  border: 1px solid white;
  
}


.my-wrapper .el-input__wrapper:focus,
.my-wrapper .el-input__wrapper.is-focus,
.my-wrapper .el-input__wrapper:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}

.el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in-checked-path{
  color: #dd0182 !important;
}
.my-wrapper .el-input__wrapper:hover {
  box-shadow: none !important;
  border: 1px solid transparent !important;
}

.el-icon svg {
  color: white !important;
}
</style>
