<template>
    <div class="test-wrap" @click="clearInterval">
        
        <div id="root">
            <dl>
                <dt>dt</dt>
                <dd>dd-1</dd>
                <dd>
                    <span>span</span>
                    <span>
                        <i>i</i>
                        <em>em</em>
                    </span>
                </dd>
                <dd>dd-3</dd>
            </dl>
            <ul>
                <li>li-1</li>
                <li>li-2</li>
                <li>li-3</li>
            </ul>
            <p>p</p>
        </div>
    </div>
</template>

<script>
import randomRuleString from 'random-rule-string'
export default {
    name: 'test',
    data () {
        return {
            timer:null
        }
    },
    mounted(){
        // this.interval();

        console.log(randomRuleString())

        function deepTraversal(node, list=[]) {
            var children = node.children;
            list.push(node);
            if(children.length !== 0){
                for(let item of children){
                    deepTraversal(item, list)
                }
            }
            return list;
        }

        // var root = document.getElementById('root');
        // var list = deepTraversal(root);
        // console.log(list)



        function wideTraversal(node) {
            // 节点数组
            var list = [];
            // 临时数组
            var tem = [];
            tem.push(node);
            while(tem.length !== 0){
                // 临时数组删除第一个元素，并将其存入节点数组
                var first = tem.shift();
                list.push(first);
                // 第一个元素如果存在子节点， 则将子元素存入临时数组
                if(first.children.length !== 0){
                    tem = [
                        ...tem,
                        ...first.children
                    ]
                }
            }
            return list;
        }
        var root = document.getElementById('root');
        console.log(wideTraversal(root)); 



    },
    methods:{
        interval(){
            this.timer = setInterval(function(){
                console.log(this)
            }.bind(this),1000)

            // this.timer = setInterval(() => {
            //     console.log(this)
            // },1000)
        },
        clearInterval() {
            clearInterval(this.timer)
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'test';
	.#{$class-pre}{
		&-wrap{
			
		}
	}
</style>