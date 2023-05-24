<template>
  <t-tab-bar v-model="value" @change="change">
    <t-tab-bar-item v-for="(item, i) in list" :key="item.name || i" :value="item.name">
      {{ item.text }}
      <template #icon>
        <icon :name="item.icon" />
      </template>
    </t-tab-bar-item>
  </t-tab-bar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from 'tdesign-icons-vue-next';


const router = useRouter();
const route = useRoute();
const redirect = route.query.redirect as string;

const value = ref('label_1');
const list = ref([
  { name: 'label_1', text: '首页', icon: 'barcode' },
  { name: 'label_2', text: '文件', icon: 'view-module' },
  { name: 'label_3', text: '消息', icon: 'logo-wechat' },
  { name: 'label_4', text: '账号', icon: 'user' },
]);


let redirectUrl = redirect ? decodeURIComponent(redirect) : '/';

watch(
  () => value.value,
  (newValue) => {
    console.log('当前值改变为：', newValue);
	if (newValue == 'label_1' ){
       redirectUrl = redirect ? decodeURIComponent(redirect) : '/';
	}
	if (newValue == 'label_2' ){
       redirectUrl = redirect ? decodeURIComponent(redirect) : '/file';
	}
	if (newValue == 'label_3' ){
       redirectUrl = redirect ? decodeURIComponent(redirect) : '/message';
	}
	if (newValue == 'label_4' ){
       redirectUrl = redirect ? decodeURIComponent(redirect) : '/account';
	}
	
    router.push(redirectUrl);  
	
  },
);
const change = (changeValue: number | string) => {
  console.log('TabBar 值改变为：', changeValue);
  router.push(redirectUrl);  
};
</script>
