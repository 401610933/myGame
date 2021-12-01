/*
*  id 编号  
*  name 名字
*  info 描述
*  value 值
*  add value 实际技能伤害 = value + (技能次数 * 叠加值)
*  lv 等级 1级为最低级 以此类推  [lv1基础类] [lv2 buff 类] [lv3开局类] [lv4概率类]
*/
const allSkill = function() { //准备载入技能
	var allSkill = [{
		"id": 1000,
		"name":"蓝猫三千踢",
		"info":"永久增加基础攻击 3 点",
		"value":3,
		"addvalue":3,
		"lv":1
	}, {
		"id": 1001,
		"name":"双掌齐出",
		"info":"永久增加暴击几率 6 点",
		"value":6,
		"addvalue":6,
		"lv":1
	},{
		"id":1002,
		"name":"雨露均沾",
		"info":"永久增加暴击几率3点,闪避3点",
		"value":3,
		"addvalue":3,
		"lv":1
	},{
		"id":1003,
		"name":"春哥护体",
		"info":"永久增加生命值120点",
		"value":120,
		"addvalue":120,
		"lv":1
	},{
		"id":1004,
		"name":"飞沙风中转",
		"info":"永久增加闪避6点",
		"value":6,
		"addvalue":6,
		"lv":1
	},{
		"id":1005,
		"name":"风中凌乱",
		"info":"永久增加攻击速度10点",
		"value":10,
		"addvalue":10,
		"lv":1
	},{
		"id":1006,
		"name":"喵人的愤怒",
		"info":"永久增加防御1",
		"value":1,
		"addvalue":1,
		"lv":1
	},{
		"id":1007,
		"name":"大爷的燕尾",
		"info":"每次收到伤害,减少2点",
		"value":2,
		"addvalue":2,
		"lv":1
	},{
		"id":1008,
		"name":"老旧精灵球",
		"info":"每次攻击,伤害增加2点",
		"value":2,
		"addvalue":2,
		"lv":1
	},{
		"id":1009,
		"name":"电鳗撞击机",
		"info":"永久增加暴击伤害20%",
		"value":20,
		"addvalue":20,
		"lv":1
	},{
		"id":1010,
		"name":"葵花宝典",
		"info":"每攻击10次,恢复生命20点",
		"value":20,
		"addvalue":20,
		"lv":1
	},{
		"id":2001,
		"name":"泼妇十八抓",
		"info":"每次攻击有5%概率,降低对方基础攻击1点",
		"value":1,
		"addvalue":1,  //这个技能 看叠加的值 取几率还是攻击 我感觉无所谓
		"lv":2
	},{
		"id":2002,
		"name":"猪侠降龙掌",
		"info":"每次攻击有30%概率,降低对方暴击率1点",
		"value":1,
		"addvalue":1, 
		"lv":2
	},{
		"id":2003,
		"name":"超人的动感",
		"info":"每次攻击有30%概率,降低对方闪避率1点",
		"value":1,
		"addvalue":1,  
		"lv":2
	},{
		"id":2004,
		"name":"无限推倒术",
		"info":"每次攻击有20%概率,额外降低生命10点(固伤)",
		"value":10,
		"addvalue":10,  
		"lv":2
	},{
		"id":2005,
		"name":"魔王的必杀",
		"info":"每次攻击降低有10%概率,降低攻速10点",
		"value":10,
		"addvalue":10,  
		"lv":2
	},{
		"id":2006,
		"name":"猴子陶桃",
		"info":"每次攻击降低有15%概率,降低防御1点",
		"value":1,
		"addvalue":1,  
		"lv":2
	},{
		"id":2007,
		"name":"避邪剑谱",
		"info":"每次攻击降低有10%概率,增加1层数毒攻击",
		"value":1,
		"addvalue":1,  
		"lv":2
	}]
	return allSkill;
}



export default {
	allSkill,
}
