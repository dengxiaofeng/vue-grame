<template>
   <div class="recommend">
      <div ref="scroll" class="recommend-content" >
         <div>
             <!--轮播开始-->
              <div v-if="recommends.length" class="slider-wrapper">
                   <slider>
                      <div v-for="item in recommends">
                            <a :href="item.linkUrl">
                               <img class="needsclick"  :src="item.picUrl" />
                            </a>
                       </div>
                   </slider>
              </div>
              <!--轮播结束-->
              <!--菜单开始-->
               <div class="recommend-list">
                 <ul >
                    <li v-for="item in declist" class="item" >
                          <div class="icon">
                               <img :src="item.imgurl" width="45" height="45"/>
                          </div>
                          <div class="text">
                              
                               <p  class="desc" v-html="item.title"></p>
                          </div>
                    </li>
                 </ul>
             </div>
             <!--菜单结束-->
              <div class="recommend-list" v-for="item in hotlist" style="margin-top:20px">
                 <h3 v-html="item.title"></h3>
                 <ul >
                    <li   class="item hot-item" v-for="cur in item.data">
                          <div class="icon">
                               <img :src="cur.avatarimg" style="width:100%" />
                          </div>
                          <div class="text">
                              
                               <p  class="desc left" v-html="cur.footertitle"></p>
                               <p class="foot_desc">￥<span v-html="cur.price"></span>元/局</p>
                          </div>
                    </li>
                 </ul>
             </div>
            <!--  <div class="recommend-list">
            <div class="homelist_content">
                <div class="listitem_content" v-for="item in hotlist">
                    <h3 v-html="item.title"></h3>
                    <div class="listitem_item" v-for="cur in item.data">
                         <div class="singleitem_content">
                              <div class="singleitem_img">
                                   <img :src="cur.avatarimg">
                                   <div class="singleitem_jibie" v-html="cur.avatardec"></div>
                                 
                              </div>
                              <p v-html="cur.footertitle"></p>
                              <p class="singleitem_price fl">￥<span v-html="cur.price"></span>元/局</p>
                              <div class="clearfix"></div>
                         </div>
                    </div>
                </div>
            
            </div>
                       </div> -->
         </div>         
      </div>
   </div>
   
   
</template>

<script type="text/ecmascript-6">
   import Slider from 'base/slider/slider'
   import Scroll from 'base/scroll/scroll'
   export default{
       data(){
          return {
              recommends:[],
              declist:[],
              hotlist:[]
          }
       },
       created(){
           setTimeout(()=>{
              this._getRecommend();
           },2000)
           this._hotList();
           this._decList();
           
       },
       methods:{
          _getRecommend(){
            /* getRecommend().then((res)=>{
                 if(res.code==ERR_OK){
                     console.log(res.data.slider);
                     this.recommends=res.data.slider
                 }
             })*/
             this.recommends=[{"picUrl":"http://www.tuwan.com/uploads/1712/08/807-1G20Q40PO62.jpg"},{"picUrl":"http://www.tuwan.com/uploads/1712/08/807-1G20Q40R22c.jpg"}]
          },
          _decList(){
            this.declist=[{
                "imgurl":"http://res.tuwan.com/templet/play/m/images/wx_lol.png?1",
                "title":"线上LOL"
              },{
                "imgurl":"http://res.tuwan.com/templet/play/m/images/wx_xlol.png?1","title":"线上LOL"},{"imgurl":"http://res.tuwan.com/templet/play/m/images/wx_wzry.png?1","title":"线上LOL"},{"imgurl":"http://res.tuwan.com/templet/play/m/images/wx_jdqs.png?2","title":"线上LOL"},{"imgurl":"http://res.tuwan.com/templet/play/m/images/wx_sylt.png?2","title":"声优聊天"},{"imgurl":"http://static.tuwan.com/templet/play/images/playinfo/apply_hover_20016.png","title":"荒野行动"},{"imgurl":"http://res.tuwan.com/templet/play/m/images/wx_hs.png?2","title":"哄睡觉"},{"imgurl":"http://res.tuwan.com/templet/play/m/images/wx_xnlr.png?2","title":"虚拟恋人"}]
          },
          _hotList(){
             this.hotlist=[{
                title:'为您推荐',
                data:[{
                     avatarimg:'http://img1.tuwandata.com/v2/thumb/jpg/N2QwNSwzNjQsMzY0LDksMywxLC0xLE5PTkUsLCw5MA==/u/www.tuwan.com/uploads/play/8606591493973266.png',
                     avatardec:'王者',
                     footertitle:'幕刃王者800点',
                     price:'15'
                  },
                  {
                    avatarimg:'http://img1.tuwandata.com/v2/thumb/jpg/N2QwNSwzNjQsMzY0LDksMywxLC0xLE5PTkUsLCw5MA==/u/www.tuwan.com/uploads/play/8606591493973266.png',
                    avatardec:'王者',
                    footertitle:'幕刃王者800点',
                    price:'15'
                  },
                  {
                    avatarimg:'http://img1.tuwandata.com/v2/thumb/jpg/N2QwNSwzNjQsMzY0LDksMywxLC0xLE5PTkUsLCw5MA==/u/www.tuwan.com/uploads/play/8606591493973266.png',
                    avatardec:'王者',
                    footertitle:'幕刃王者800点',
                    price:'15'
                  }]
               },
               {title:'线上LOL',
                 data:[{
                     avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/21/65/91_avatar_big2.jpg',
                     avatardec:'钻石',
                     footertitle:'昭昭',
                     price:'42'
                 },
                 {
                   avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/32/73/36_avatar_big2.jpg',
                   avatardec:'王者',
                   footertitle:'菊花信♚寒霜',
                   price:'50'
                 },
                 {
                   avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/37/30/64_avatar_big2.jpg',
                   avatardec:'钻石',
                   footertitle:'夏米',
                   price:'42'
                 }]
            },{
              title:'虚拟恋人',
              data:[{
                     avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/21/65/91_avatar_big2.jpg',
                     avatardec:'钻石',
                     footertitle:'昭昭',
                     price:'42'
                 },
                 {
                   avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/32/73/36_avatar_big2.jpg',
                   avatardec:'王者',
                   footertitle:'菊花信♚寒霜',
                   price:'50'
                 },
                 {
                   avatarimg:'http://ucavatar.tuwan.com/data/avatar/000/37/30/64_avatar_big2.jpg',
                   avatardec:'钻石',
                   footertitle:'夏米',
                   price:'42'
                 }]
            }]
          }
       },
       components:{
          Slider,
          Scroll
       }
   }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .recommend
    position: relative
    width: 100%
    top: 0px
    left:0px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        margin: 0 auto;
        padding: 0;
        text-align: center;
        display: block;
        height: 100%;
        overflow: hidden;
       h3
        text-align:center
        color: #f92246
       ul
        list-style:none
        padding-left:10px
        padding-right:10px

        .item
          float:left
          width:25%
          box-sizing: border-box
          align-items: center
          overflow:hidden
          padding-top:20px
          padding-bottom:10px
          padding-left: 2px
          padding-right: 2px
        .hot-item
           width:33.33%
          .icon
           text-align:center
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            padding-top:5px
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
               font-size: 14px;
               color: #333;
               line-height: 1;
               font-weight: 300;
               padding-top: 0.1rem;
            .left
               text-align:left
            .foot_desc
               color:#f92246
               text-align:left
               padding-top:0.1rem
               span
                font-size: 0.32rem
                margin: 0 0.05rem 0 0
</style>