//DOM objects

const view = {

	score:document.getElementById('score '),
	question:document.getElementById('question '),
	result:document.getElementById('result '),
	info:document.getElementById('info '),

	//function 

	 render(target,content,attributes){
	
		for(const key in attributes){
				
				target.setAttribute(key,attributes[key]);
		}
		
		
		if(target.id === 'score '){

				target.innerHTML = "Score:"+content;
		}
		else{
			content += "<br>"
		target.innerHTML +=content;
	}
	}

};




//Heroic names and real names of Heroes


const quiz = [
	
		{name : "Superman" , realName : "Clark Kent"},
		{name  : "Batman" , realName : "Wayne Bruce"},
		{name : "WonderWomen" , realName : "Diana Prince"},

];

//Main game Object 

const game = {

	start(quiz){

			this.questions = [...quiz];
			this.score = 0;

			//main game loop

			for(const q of this.questions){
				this.question = q;
				this.ask(this.question);
			}

			this.gameOver();

	},

	ask(question){

		const ques = `What is ${this.question.name}'s real name?.`;

		//function call to render
		
		view.render(view.question,ques);

		const response = prompt(ques);
		this.check(response);
	},

	check(response){

		const answer = this.question.realName;

		if(answer === response){

			//call to render
			let answeris = `Correct ! It is :${answer}`;
			view.render(view.result,answeris,{'class' :'correct'});
			alert("Correct !");
			this.score++;
			//call to render
			console.log(view.score);
			view.render(view.score,this.score);
		}
		else{

			//call to render
			
	
			view.render(view.result,`Wrong ! The correct answer was ${answer}`,{'class':'wrong'});
			 alert(`Wrong! The correct answer is ${answer}`);

		}
	},

	gameOver(){

		//call to render 
		view.render(view.info,`Game Over,You sccored ${this.score} point${this.score !== 1? 's':''}`);

		
	}



};

game.start(quiz);


