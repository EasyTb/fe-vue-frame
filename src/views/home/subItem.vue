<template>
  <div :class="classes">
       <slot></slot>
  </div>
</template>
<script>
	
export default {
  name: 'sub-word',
  props : {
  	itemtype : [String],
  	selecttype : [String]
  },
  computed : {
  	 classes (){
        console.log(this.itemtype);
  	 	return [
  	 		{
  	 			isActive : (this.itemtype==this.selecttype)
  	 		}
  	 	];

  	 }

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>