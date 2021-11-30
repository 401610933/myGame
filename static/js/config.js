export default {
  // 初始化分页
  iLikeYanggb() {
    console.log('i like yanggb2222')
  },
  getmeun(perMisson,name){
  	//console.log(perMisson);
  	let x=0
  	let y=0
  	let z=0
	let back=false
  	for(x in perMisson){
  		// 在第一层就已经匹配到的时候  直接 break 返回
  		if(perMisson[x].name==name){
  			//console.log("匹配到了",name)
			back = true
  			break
  		}
  		// 如果没有找到则继续下一层循环
  		for(y in perMisson[x].list){
  			if(perMisson[x].list[y].name==name){
  				//console.log("第2层匹配到了",name)
				back = true
  				break
  			}
  			// 如果第2层没有找到则继续下一层循环 也是最后一层
  			for(z in perMisson[x].list[y].list){
  				if(perMisson[x].list[y].list[z].name==name){
  					//console.log("第3层匹配到了",name)
					back = true
  					break;
  				}
  			}
  		}
  	}
	return back;
  }
  
}