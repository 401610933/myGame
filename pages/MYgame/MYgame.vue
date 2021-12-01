<template>
	<view>
		<view class="flex margin-xs">
			<view class="flex-treble">
				<view class="cu-progress striped active">
					<view class="bg-red" :style="[{ width:MYlifeP+'%'}]">{{MYlifeP}}%</view>
				</view>
				{{mylifeResidue}}/{{myConfig.life}}
			</view>
			<view class="flex-sub margin-xs">{{NowTime}}</view>
			<view class="flex-treble">
				<view class="cu-progress striped active">
					<view class="bg-red" :style="[{ width:otherlifeP+'%'}]">{{otherlifeP}}%</view>
				</view>
				{{otherlifeResidue}}/{{otherConfig.life}}
			</view>
		</view>
		<view>
			<view class="flex">
				<view class="flex-treble padding-lr-xs">攻击:{{myConfig.att}}</view>
				<view class="flex-treble">防御:{{myConfig.def}}</view>
				<view class="flex-sub padding-lr-xs"></view>
				<view class="flex-treble padding-lr-xs">攻击:{{otherConfig.att}}</view>
				<view class="flex-treble ">防御:{{otherConfig.def}}</view>
			</view>
			<view class="flex">
				<view class="flex-treble padding-lr-xs">暴击:{{myConfig.baoji}}%</view>
				<view class="flex-treble">毒:{{myConfig.poison}}</view>
				<view class="flex-sub padding-lr-xs"></view>
				<view class="flex-treble padding-lr-xs">暴击:{{otherConfig.baoji}}%</view>
				<view class="flex-treble">毒:{{otherConfig.poison}}</view>
			</view>
			<view class="flex">
				<view class="flex-treble padding-lr-xs">闪避:{{myConfig.dodge}}%</view>
				<view class="flex-treble">格挡:{{myConfig.immune}}</view>
				<view class="flex-sub padding-lr-xs"></view>
				<view class="flex-treble padding-lr-xs">闪避:{{otherConfig.dodge}}%</view>
				<view class="flex-treble">格挡:{{otherConfig.immune}}</view>
			</view>
			<view class="flex">
				<view class="flex-treble padding-lr-xs">攻速:{{myConfig.speed}}</view>
				<view class="flex-treble">爆伤:{{myConfig.baojiAtt}}%</view>
				<view class="flex-sub padding-lr-xs"></view>
				<view class="flex-treble padding-lr-xs">攻速:{{otherConfig.speed}}</view>
				<view class="flex-treble">爆伤:{{otherConfig.baojiAtt}}%</view>
			</view>
		</view>

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-red margin-tb-sm lg" @click="TimeStart()">Start</button>
			<button class="cu-btn bg-red margin-tb-sm lg" @click="TimeStop()">Stop</button>
		</view>
		<view>暂时没有技能全靠基础属性攻击<br>调用JS并输出技能:{{skill}}</view>
	</view>
</template>

<script>
	import config from '@/static/js/myGameSkill.js'; //ji neng
	export default {
		data() {
			return {
				myConfig: {
					life: 1000, //sheng ming
					att: 10, //gong ji
					baoji: 50, //bao ji
					dodge: 0, //shan bi
					speed: 500, //su du
					def: 0, //fang yu
					poison: 0, //du
					immune: 0, //mian yi 抵挡一次
					baojiAtt: 150, //bao ji shang hai
					mystopId:'',
				},
				otherConfig: {
					life: 800, //sheng ming
					att: 5, //gong ji
					baoji: 0, //bao ji
					dodge: 0, //shan bi
					speed: 100, //su du
					def: 50, //fang yu
					poison: 0, //du
					immune: 0, //mian yi  抵挡一次
					baojiAtt: 150, //bao ji shang hai
				},
				NowTime: 0, //start time
				skill: "",
				StopId: '' ,//stop time
				MYlifeP:100,
				otherlifeP:100,
				mylifeResidue:1000, // my 战斗 血量
				otherlifeResidue:800, // other 战斗 血量
			}
		},
		methods: {
			TimeStart: function() {  //开始计时
				this.StopId = setInterval(() => {
					this.NowTime += 1;
					if (this.NowTime == 10) {
						clearInterval();
					}
				}, 1000);
				this.MyToOther()
			},
			TimeStop: function() {
				clearInterval(this.StopId)  //停止计时
				clearInterval(this.mystopId);
			},
			MyToOther:function(){  //my to other gong ji
				this.mystopId = setInterval(() => {
					let hurt = this.myConfig.att;     // 计算伤害
					hurt = this.def(hurt,this.otherConfig.def)
					hurt = this.baoji(this.myConfig.baoji,hurt,this.myConfig.baojiAtt);  //得到 爆伤
					this.otherlifeResidue -= hurt;  // att 
					this.otherlifeP = (this.otherlifeResidue/this.otherConfig.life) * 100;  //计算 剩余 %
				}, 1000-this.myConfig.speed)
			},
			baoji:function(thisOdds,att,baojiAtt){   // thisOdds:自身暴击率 --- att:伤害值 ---- baojiAtt:暴击伤害
				let odds = parseInt(Math.random()*(100-0+1)+0,10);		//0-100 随机抽
				if(odds<=thisOdds){
					att = parseInt(att*(baojiAtt/100))
				}
				return att
			},
			def:function(att,def){		//att 当前伤害  ---- def 人物防御
				att -= def
				att<0 ? att=1 : ''
				return att
			}

		},
		created() {
			this.skill = config.allSkill() //zai ru ji neng
		},
		computed: {
			
		},
		watch: {
			otherlifeResidue: function() {
				if(this.otherlifeResidue<=0){
					alert("您赢了");
					clearInterval(this.StopId);
					clearInterval(this.mystopId);
				}
			},
		}
	}
</script>

<style>

</style>
