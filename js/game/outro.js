// Then we broke up soon/X...
// Three stories (Lie / Truth / Half-truth) ... one interaction with each.
// Did you skip or not? Tie that into the sections.
// Your final choice, a whaaaaaat.

function Start_Outro(){

	// Just clear dialogue & stuff.
	queue(ClearScene,0);

	/////// SET UP SCENE ////////

	Show("background","coffeehouse_2");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	///////////////////////////////

	if($.breaking_up_soon){
		N("outro_dialog_0000");
	}else{
		N("outro_dialog_0001");
	}

	// Weave - intro
	if($.main_menu_convo_1==1){
		p("outro_dialog_0002");
		N("outro_dialog_0003");
	}else if($.main_menu_convo_1==3){
		p("outro_dialog_0002");
		N("outro_dialog_0004");
	}else if($.main_menu_convo_2==1){
		p("outro_dialog_0002");
		N("outro_dialog_0005");
	}

	Choose({
		"outro_choice_1_entry_0000":function(message){
			p(message);
			N("outro_dialog_0006");
			Closure();
		},
		"outro_choice_1_entry_0001":function(message){
			p(message);
			N("outro_dialog_0007");
			Closure();
		},
		"outro_choice_1_entry_0002":function(message){
			p(message);
			N("outro_dialog_0008");
			Closure();
		}
	});

}

function Closure(){

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("outro_dialog_0009");
	p("outro_dialog_0010");

	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("outro_dialog_0011");
	N("outro_dialog_0012");
	N("outro_dialog_0013");
	N("outro_dialog_0014");

	if($.main_menu_convo_2==3){
		N("outro_dialog_0015");
	}

	p("outro_dialog_0016");
	N("outro_dialog_0017");
	N("outro_dialog_0018");

	if($.main_menu_convo_2==2){
		N("outro_dialog_0019");
	}

	$.coming_out_stories_left = 3;
	$.order_of_stories = [];

	Choose({
		"outro_choice_2_entry_0000": function(message){
			p(message);
			N("outro_dialog_0020");
			N("outro_dialog_0021");
			p("outro_dialog_0022");
			Closure_Story();
		},
		"outro_choice_2_entry_0001": function(message){
			p(message);
			N("outro_dialog_0023");
			p("outro_dialog_0022");
			Closure_Story();
		},
		"outro_choice_2_entry_0002": function(message){
			p(message);
			N("outro_dialog_0024");
			p("outro_dialog_0025");
			Closure_Story();
		}
	});

}

function Closure_Story(){

	if($.coming_out_stories_left==3){
		N("outro_dialog_0026");
		N("outro_dialog_0027");
	}else if($.coming_out_stories_left==2){
		N("outro_dialog_0028");
	}else if($.coming_out_stories_left==1){
		N("outro_dialog_0029");
	}else{
		Finale_1();
		return;
	}

	$.coming_out_stories_left -= 1;

	var options = [];
	if(!$.told_story_lie) options["outro_choice_3_entry_0000"]=Tell_Me_A_Lie;
	if(!$.told_story_truth) options["outro_choice_3_entry_0001"]=Tell_Me_A_Truth;
	if(!$.told_story_half_truth) options["outro_choice_3_entry_0002"]=Tell_Me_A_Half_Truth;
	Choose(options);

}

function Is_Last_Story(){
	if($.coming_out_stories_left==0){
		if($.asked_about && $.asked_credits){
			p("outro_dialog_0030");
		}else{
			p("outro_dialog_0031");
			N("outro_dialog_0032");
		}
	}
}



function Tell_Me_A_Lie(message){

	$.told_story_lie = true;
	$.order_of_stories.push("lie");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("outro_dialog_0033");
	Is_Last_Story();

	N("outro_dialog_0034");
	if($.im_a_poet){
		N("outro_dialog_0035");
	}else{
		N("outro_dialog_0036");
	}
	N("outro_dialog_0037");
	p("outro_dialog_0002");
	N("outro_dialog_0038");
	N("outro_dialog_0039");

	// FAMILY WITH BENEFITS
	// Weave in -- top or bottom

	Choose({
		"outro_choice_4_entry_0000": function(message){
			$.outro_convo_lie = 1;
			p(message);
			N("outro_dialog_0040");
			Tell_Me_A_Lie_2();
		},
		"outro_choice_4_entry_0001": function(message){
			$.outro_convo_lie = 2;
			p(message);
			N("outro_dialog_0041");
			Tell_Me_A_Lie_2();
		},
		"outro_choice_4_entry_0002": function(message){
			$.outro_convo_lie = 3;
			p(message);
			N("outro_dialog_0042");
			Tell_Me_A_Lie_2();
		}
	});
}
function Tell_Me_A_Lie_2(){

	N("outro_dialog_0043");

	if($.outro_convo_lie==1){
		p("outro_dialog_0044");
	}

	switch($.top_or_bottom){
		case "top": N("outro_dialog_0045"); break;
		case "bottom": N("outro_dialog_0046"); break;
		case "versatile": N("outro_dialog_0047"); break;
	}

	N("outro_dialog_0048");

	switch($.outro_convo_lie){
		case 2: p("outro_dialog_0049"); break;
		case 3: p("outro_dialog_0050"); break;
	}

	N("outro_dialog_0051");
	N("outro_dialog_0052");

	p("outro_dialog_0002");

	Closure_Story();

}





function Tell_Me_A_Truth(message){

	$.told_story_truth = true;
	$.order_of_stories.push("truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("outro_dialog_0053");
	Is_Last_Story();

	N("outro_dialog_0054");
	switch($.inception_answer){
		case "awake": N("outro_dialog_0055"); break;
		case "dream": N("outro_dialog_0056"); break;
		case "neither": N("outro_dialog_0057"); break;
	}
	N("outro_dialog_0058");
	N("outro_dialog_0059");

	Choose({
		"outro_choice_5_entry_0000": function(message){
			$.outro_convo_truth = 3;
			p(message);

			N("outro_dialog_0060");
			N("outro_dialog_0061");
			p("outro_dialog_0062");
			Tell_Me_A_Truth_2();
		},
		"outro_choice_5_entry_0001": function(message){
			$.outro_convo_truth = 2;
			p(message);

			N("outro_dialog_0063");
			p("outro_dialog_0064");
			Tell_Me_A_Truth_2();
		},
		"outro_choice_5_entry_0002": function(message){
			$.outro_convo_truth = 1;
			p(message);

			N("outro_dialog_0065");
			N("outro_dialog_0066");
			p("outro_dialog_0067");
			Tell_Me_A_Truth_2();
		}
	});

}
function Tell_Me_A_Truth_2(){

	N("outro_dialog_0068");
	N("outro_dialog_0069");

	N("outro_dialog_0070");
	N("outro_dialog_0071");
	N("outro_dialog_0072");

	switch($.outro_convo_truth){
		case 1: p("outro_dialog_0073"); break;
		case 2: p("outro_dialog_0074"); break;
		case 3: p("outro_dialog_0075"); break;
	}

	Closure_Story();

}





function Tell_Me_A_Half_Truth(message){
	$.told_story_half_truth = true;
	$.order_of_stories.push("half-truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("outro_dialog_0076");
	Is_Last_Story();

	N("outro_dialog_0077");
	N("outro_dialog_0078", $.studying_subject);

	p("outro_dialog_0079");

	N("outro_dialog_0080");
	N("outro_dialog_0081");

	// CLAIRE AND I HELPED EACH OTHER EXPLORE OURSELVES, LESS GUILT, MORE EXPERIENCE.
	// Weave in -- studying what

	Choose({
		"outro_choice_6_entry_0000": function(message){
			$.outro_convo_half_truth = 1;
			p(message);
			N("outro_dialog_0082");
			p("outro_dialog_0083");
			N("outro_dialog_0084");
			Tell_Me_A_Half_Truth_2();
		},
		"outro_choice_6_entry_0001": function(message){
			$.outro_convo_half_truth = 3;
			p(message);
			Tell_Me_A_Half_Truth_2();
		},
		"outro_choice_6_entry_0002": function(message){
			$.outro_convo_half_truth = 2;
			p(message);
			N("outro_dialog_0085");
			p("outro_dialog_0086");
			N("outro_dialog_0084");
			Tell_Me_A_Half_Truth_2();
		}
	});

}
function Tell_Me_A_Half_Truth_2(){

	N("outro_dialog_0087");
	N("outro_dialog_0088");
	p("outro_dialog_0089");

	if($.changing_schools || !$.father_oblivious){
		N("outro_dialog_0090");
	}

	N("outro_dialog_0091");
	N("outro_dialog_0092");
	N("outro_dialog_0093");

	p("outro_dialog_0094");

	N("outro_dialog_0095");

	p("outro_dialog_0002");

	Closure_Story();

}





function Finale_1(){

	N("outro_dialog_0096");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Show("cup",null);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");

	//////////////////////////

	N("outro_dialog_0097");
	if($.order_of_stories[0]=="truth"){
		N("outro_dialog_0098");
	}else if($.order_of_stories[2]=="truth"){
		N("outro_dialog_0099");
	}else if($.order_of_stories[0]=="lie"){
		N("outro_dialog_0100");
	}else{
		N("outro_dialog_0101");
	}
	N("outro_dialog_0102");
	p("outro_dialog_0002");

	p("outro_dialog_0103");
	N("outro_dialog_0104");

	Choose({
		"outro_choice_7_entry_0000": function(message){
			p(message);
			N("outro_dialog_0105");
			Finale_2();
		},
		"outro_choice_7_entry_0001": function(message){
			p(message);
			N("outro_dialog_0106");
			Finale_2();
		},
		"outro_choice_7_entry_0002": function(message){
			p(message);
			N("outro_dialog_0107");
			Finale_2();
		}
	});

}

function Finale_2(){

	Show("nicky","coffee_nicky_packup_1");

	N("outro_dialog_0002");
	N("outro_dialog_0108");
	N("outro_dialog_0109");
	N("outro_dialog_0110");

	Show("nicky","coffee_nicky_packup_2");

	// SERIOUSNESS.
	PlaySound("sfx","laptop_shut");
	PlaySound("bg","bedroom_1",{loop:-1, volume:0.4});

	p("outro_dialog_0111");

	if($.punched){
		N("outro_dialog_0112");
	}else if($.father_oblivious==false){
		N("outro_dialog_0113");
	}else if($.changing_schools){
		N("outro_dialog_0114");
	}else{
		N("outro_dialog_0115");
	}

	N("outro_dialog_0116");

	Choose({
		"what.": Finale_3,
		"whaaat.": Finale_3,
		"whaaaaaaaaaaaaaaat.": Finale_3
	});

}

function Finale_3(message){

	p(message);

	PlaySound("sfx","laptop_pack");
	Show("nicky","coffee_nicky_packup_3");

	N("outro_dialog_0117");
	N("outro_dialog_0118");

	PlaySound("sfx","laptop_pack_2");
	Show("nicky","coffee_nicky_packup_4");

	N("outro_dialog_0119");
	N("outro_dialog_0120");
	N("outro_dialog_0121");

	p("outro_dialog_0002");

	N("outro_dialog_0122");
	N("outro_dialog_0123");
	N("outro_dialog_0124");
	N("outro_dialog_0125");

	p("outro_dialog_0002");

	N("outro_dialog_0126");
	N("outro_dialog_0002");
	N("outro_dialog_0126");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	// CUTSCENE -- MY NEW BOYFRIEND
	Wait(1000);

	PlaySound("sfx2","laptop_pack");
	Show("nicky","coffee_nicky_date_1");
	Wait(1000);

	PlaySound("sfx","step_2");
	Show("nicky","coffee_nicky_date_2");
	Wait(1000);

	PlaySound("sfx","step_1");
	Show("nicky","coffee_nicky_date_3");
	Wait(1000);

	PlaySound("sfx","step_2",{volume:0.75});
	Show("nicky","coffee_nicky_date_4");
	Wait(1000);

	PlaySound("sfx","step_1",{volume:0.5});
	Show("nicky",null);
	Wait(1000);

	PlaySound("sfx","step_2",{volume:0.25});
	Choose({
		"outro_choice_8_entry_0000": Finale_4
	});

}
function Finale_4(message){

	p(message);
	N("outro_dialog_0127");

	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	//queue(ClearScene,0); // coz the sound's cool!
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);


}


