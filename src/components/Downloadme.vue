<script>
import axios from 'axios'
import 	{getCurrentInstance} from "vue"

export default {
	data() {
		return {
			info:'文件显示在这里...'
		}
	},
	mounted() {
    const {
    				appContext: {
    					config: {
    							globalProperties
    							}
    				}
    			} = getCurrentInstance(); 
	axios
	    			.get('http://50.64.117.26:5001/download?filename=' + globalProperties.$filename + '.txt')
					.then(response => (this.info = response.data))
					.catch(function(error) { // 请求失败处理
					console.log(error);
					});		 
	},
	
}

</script>

<template>
  <div class="about">
    <div >{{ info}}</div>
  </div>
</template>


<style>
	@media (min-width: 1024px) {
		.about {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	}
</style>