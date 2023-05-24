<template>
	<div class="upload-demo">
	    <div class="upload-title">拍照或上传上传较慢请耐心等一会儿!</div>
	    <t-upload
	      :default-files="[]"
	      :multiple="false"
	      :max="1"
	      :size-limit="{ size: 3000000, unit: 'MB' }"
	      accept ="image/*"
		  capture = "camera"
		  method="POST"
	      action="http://50.64.117.26:5001/upload"
	      @validate="onValidate"
		  @success="onSuccess"
	    >
	    </t-upload>
	  </div>
</template>

<script setup lang="ts">

	import  {ref,onMounted, getCurrentInstance}   from 'vue'
	import { MessagePlugin } from 'tdesign-vue-next'

    const { appContext : { config: { globalProperties } } } = getCurrentInstance()
    console.log(globalProperties.$filename);

  onMounted(() => {
  })

   const onValidate = (context: any) => {
    console.log('onValidate Faild:', context);
	if (context.type === 'FILE_OVER_SIZE_LIMIT') {
    MessagePlugin.warning('文件大小超出上限');
    }
  }

   const onSuccess =(context: any) => {
       console.log('success', context);
	   console.log('filename:',context.file.name);
	   globalProperties.$filename = context.file.name;
   }

</script>

<style scoped>
 .parent {display:flex;align-items:center;}
.t-upload{
	 /*position: fixed;*/
	 top:5;
	 left:5;
	 width: 100%;
	 height: 100%;
	 overflow: hidden;
 }
.upload-demo{
	 /*position: fixed;*/
	 width: 100%;
	 height: 100%;
	 overflow: hidden;
 }

</style>
