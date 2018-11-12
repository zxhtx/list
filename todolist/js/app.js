(function(Vue){
const todo_data=[
	{id:1,title:'敲代码',stat:false},
	{id:2,title:'代码敲不完,心里不安稳',stat:false},
	{id:3,title:'BUG改不完,躺着睡不着',stat:false},
];
	app=new Vue({
		el:'#todoapp',
		data:{
			todo_data:todo_data,
			inp_data:''
		},
		methods:{
			addTodo(ev){
				if(this.inp_data==''){
					return alert('请输入文本!!!嘿嘿嘿')
				}
				let data={
					id:this.todo_data.length+1,
					title:this.inp_data,
					stat:false
				}
				this.todo_data.push(data);
				this.inp_data='';

			},

		toggleAll(ev){
			for(let i=0;i<this.todo_data.length;i++){
				this.todo_data[i].stat=ev.target.checked;
			}

		},

		removeTodo(k){
			this.todo_data.splice(k,1);

		},

		romveCompleted(){
			this.todo_data=this.todo_data.filter(v=>!v.stat)
		},

		

		},
		computed:{
			getNu(){
				return(this.todo_data.filter((v)=>!v.stat)).length;
			}
		}
	});



})(Vue);