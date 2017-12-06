<template>
  <div class="hello">
        <div class="child_router">
           <aside>
             <ul class="nav_list">
               <li v-for="(item,index) in $router.options.routes">
                {{ item.alias }}
                  <ol class="child_span">
                    <li v-for="child in item.children" @click="tojob(child.path,child.name)">
                      <router-link :to="{path:item.path + '/' + child.path}">{{ child.alias }}</router-link>
                   </li>
                  </ol>
               </li>
             </ul>
           </aside>
           <section>
              <router-view></router-view> 
           </section>
           <footer>
             <div @click="$store.commit('add')">加一</div>
             <div>{{ $store.state.count }}</div>
             <!-- <div>{{ $store.state.a.count }}</div> -->
             <div>{{ count }}</div>  
             <!-- //同上面一样，加了辅助函数后的写法 -->
             <span>{{ zhenzhu.names }}</span>
             <div @click="$store.commit('reduce')">减一</div>
           </footer>
        </div>
      <div class="box">
        <div class="mapstate">
                <button @click='reduces'>减</button>
                <button>{{ count }}</button>
                <button @click='adds'>加</button>
        </div>
        <div class="requestTest">
           <span>{{  }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import vuex from '../vuex/index'
// import {mapState} from 'vuex'
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{
    ...mapMutations([ //映射方法的辅助函数，简化绑定提交的辅助函数，也就是简化$store.commit()
      'adds',
      'reduces'
    ]),
    //请求测试模拟json数据格式，以后的数据由后台提供
    requestTest(){
      // this.$http.get('../../static/index.json')
      // .then((response)=>{
      //    for(let i=0;len=arr.people.length;i<len;i++){
      //       console.log(i);
      //    }
      // }).cstch((error)=>{
      //    alert(1);
      // });
      var p=new Promise(function(resolve,reject){});
      p.then((response)=>{
             console.log(response);
       }).catch((error)=>{
          alert(1);
       });
    },
    tojob(path,name){
      
    }
  },
/*  computed:mapState([ //第一种写法
     'count',
     'zhenzhu'
  ]),*/
  computed:{ //第二种写法，好处：可以写很多辅助函数
    ...mapState([
      'count',
      'zhenzhu',
      'num'
  ]),
  watch:{

  },
  mounted(){
    this.requestTest();
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope="scope" lang="scss">
.hello{
  width:100%;
  height:800px;
  background: #ccc;
}
.child_router{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  aside{
    width: 234px;
    height: 100%;
    background: green;
      .nav_list{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
          li{
            width: 100%;
            height: 40px;
            list-style: none;
            position: relative;
            background: orange;
            margin: 5px 0 0 0;
              .child_span{
                width: 200px;
                height: auto;
                position: absolute;
                top: 0;
                left: 235px;
                margin: 0;
                padding: 0;
                display: none;
                  li{
                    width: 100%;
                    height: 30px;
                    margin: 5px 0 0 0px;
                    background: yellow;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                  }
              }
          }
          li:hover{
            background: blue;
          }
          li:hover .child_span{
            display: block;
          }
      }
  }
  section{
    flex:1;
    height: 100%;
    background: red;
  }
  footer{
    width: 500px;
    height: 400px;
    background: #abcdef;
      div{
        width: 100px;
        height: 50px;
        background: #dc5;
        margin: 5px 0 0 0;
      }
      div:nth-of-type(2){
        background: #af9;
      }
      span{
        display: block;
        width: 100px;
        height: 50px;
        background: #ad4;
        float: right;
      }
  }
}
.box{
  width: 100%;
  height: 500px;
  background: #fa2;
  display: flex;
  justify-content: space-between;
}
.mapstate{
    width: 500px;
    height: 300px;
    background: #ef8;
    display: inline-block;
      button{
         width: 100px;
         height: 50px;
         background: #fb2;
      }
  }
.requestTest{
    width: 500px;
    height: 300px;
    background: #af2;
    display: inline-block;
      span{
         width: 100px;
         height: 50px;
         background: #fb2;
     }
 }
</style>