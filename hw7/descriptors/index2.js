function applyPropertyRules(obj,rules){
    for(item in obj){
        Object.defineProperty(obj,item,{
            writable:rules.writable,
            enumerable:rules.enumerable,
            configurable:rules.configurable,
        })
        console.log(Object.getOwnPropertyDescriptor(obj,item))    
    }
	return obj;
}

const rule={
    writable:false,
    enumerable:false,
    configurable:false,
}
const obj={
    name:'artak'
}

applyPropertyRules(obj,rule);