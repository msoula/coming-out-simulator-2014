// Then we broke up soon/X...
// Three stories (Lie / Truth / Half-truth) ... one interaction with each.
// Did you skip or not? Tie that into the sections.
// Your final choice, a whaaaaaat.

function Start_Outro(){

	// Just clear dialogue & stuff.
	queue(ClearScene,0);

	/////// SET UP SCENE ////////

    N("outro");
    p("outro");

	Show("background","coffeehouse_2");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	///////////////////////////////

	if($.breaking_up_soon){
		N("string_0000");
	}else{
		N("string_0001");
	}

	// Weave - intro
	if($.main_menu_convo_1==1){
		p("string_0002");
		N("string_0003");
	}else if($.main_menu_convo_1==3){
		p("string_0002");
		N("string_0004");
	}else if($.main_menu_convo_2==1){
		p("string_0002");
		N("string_0005");
	}

	Choose({
		"outro_choice_1_entry_0000":function(message){
			p(message);
			N("string_0006");
			Closure();
		},
		"outro_choice_1_entry_0001":function(message){
			p(message);
			N("string_0007");
			Closure();
		},
		"outro_choice_1_entry_0002":function(message){
			p(message);
			N("string_0008");
			Closure();
		}
	});

}

function Closure(){

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("string_0009");
	p("string_0010");

	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("string_0011");
	N("string_0012");
	N("string_0013");
	N("string_0014");

	if($.main_menu_convo_2==3){
		N("string_0015");
	}

	p("string_0016");
	N("string_0017");
	N("string_0018");

	if($.main_menu_convo_2==2){
		N("string_0019");
	}

	$.coming_out_stories_left = 3;
	$.order_of_stories = [];

	Choose({
		"outro_choice_2_entry_0000": function(message){
			p(message);
			N("string_0020");
			N("string_0021");
			p("string_0022");
			Closure_Story();
		},
		"outro_choice_2_entry_0001": function(message){
			p(message);
			N("string_0023");
			p("string_0022");
			Closure_Story();
		},
		"outro_choice_2_entry_0002": function(message){
			p(message);
			N("string_0024");
			p("string_0025");
			Closure_Story();
		}
	});

}

function Closure_Story(){

	if($.coming_out_stories_left==3){
		N("string_0026");
		N("string_0027");
	}else if($.coming_out_stories_left==2){
		N("string_0028");
	}else if($.coming_out_stories_left==1){
		N("string_0029");
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
			p("string_0030");
		}else{
			p("string_0031");
			N("string_0032");
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

	N("string_0033");
	Is_Last_Story();

	N("string_0034");
	if($.im_a_poet){
		N("string_0035");
	}else{
		N("string_0036");
	}
	N("string_0037");
	p("string_0002");
	N("string_0038");
	N("string_0039");

	// FAMILY WITH BENEFITS
	// Weave in -- top or bottom

	Choose({
		"outro_choice_4_entry_0000": function(message){
			$.outro_convo_lie = 1;
			p(message);
			N("string_0040");
			Tell_Me_A_Lie_2();
		},
		"outro_choice_4_entry_0001": function(message){
			$.outro_convo_lie = 2;
			p(message);
			N("string_0041");
			Tell_Me_A_Lie_2();
		},
		"outro_choice_4_entry_0002": function(message){
			$.outro_convo_lie = 3;
			p(message);
			N("string_0042");
			Tell_Me_A_Lie_2();
		}
	});
}
function Tell_Me_A_Lie_2(){

	N("string_0043");

	if($.outro_convo_lie==1){
		p("string_0044");
	}

	switch($.top_or_bottom){
		case "top": N("string_0045"); break;
		case "bottom": N("string_0046"); break;
		case "versatile": N("string_0047"); break;
	}

	N("string_0048");

	switch($.outro_convo_lie){
		case 2: p("string_0049"); break;
		case 3: p("string_0050"); break;
	}

	N("string_0051");
	N("string_0052");

	p("string_0002");

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

	N("string_0053");
	Is_Last_Story();

	N("string_0054");
	switch($.inception_answer){
		case "awake": N("string_0055"); break;
		case "dream": N("string_0056"); break;
		case "neither": N("string_0057"); break;
	}
	N("string_0058");
	N("string_0059");

	Choose({
		"outro_choice_5_entry_0000": function(message){
			$.outro_convo_truth = 3;
			p(message);

			N("string_0060");
			N("string_0061");
			p("string_0062");
			Tell_Me_A_Truth_2();
		},
		"outro_choice_5_entry_0001": function(message){
			$.outro_convo_truth = 2;
			p(message);

			N("string_0063");
			p("string_0064");
			Tell_Me_A_Truth_2();
		},
		"outro_choice_5_entry_0002": function(message){
			$.outro_convo_truth = 1;
			p(message);

			N("string_0065");
			N("string_0066");
			p("string_0067");
			Tell_Me_A_Truth_2();
		}
	});

}
function Tell_Me_A_Truth_2(){

	N("string_0068");
	N("string_0069");

	N("string_0070");
	N("string_0071");
	N("string_0072");

	switch($.outro_convo_truth){
		case 1: p("string_0073"); break;
		case 2: p("string_0074"); break;
		case 3: p("string_0075"); break;
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

	N("string_0076");
	Is_Last_Story();

	N("string_0077");
	N("string_0078", tr('dinner_2', $.studying_subject));

	p("string_0079");

	N("string_0080");
	N("string_0081");

	// CLAIRE AND I HELPED EACH OTHER EXPLORE OURSELVES, LESS GUILT, MORE EXPERIENCE.
	// Weave in -- studying what

	Choose({
		"outro_choice_6_entry_0000": function(message){
			$.outro_convo_half_truth = 1;
			p(message);
			N("string_0082");
			p("string_0083");
			N("string_0084");
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
			N("string_0085");
			p("string_0086");
			N("string_0084");
			Tell_Me_A_Half_Truth_2();
		}
	});

}
function Tell_Me_A_Half_Truth_2(){

	N("string_0087");
	N("string_0088");
	p("string_0089");

	if($.changing_schools || !$.father_oblivious){
		N("string_0090");
	}

	N("string_0091");
	N("string_0092");
	N("string_0093");

	p("string_0094");

	N("string_0095");

	p("string_0002");

	Closure_Story();

}





function Finale_1(){

	N("string_0096");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Show("cup",null);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");

	//////////////////////////

	N("string_0097");
	if($.order_of_stories[0]=="truth"){
		N("string_0098");
	}else if($.order_of_stories[2]=="truth"){
		N("string_0099");
	}else if($.order_of_stories[0]=="lie"){
		N("string_0100");
	}else{
		N("string_0101");
	}
	N("string_0102");
	p("string_0002");

	p("string_0103");
	N("string_0104");

	Choose({
		"outro_choice_7_entry_0000": function(message){
			p(message);
			N("string_0105");
			Finale_2();
		},
		"outro_choice_7_entry_0001": function(message){
			p(message);
			N("string_0106");
			Finale_2();
		},
		"outro_choice_7_entry_0002": function(message){
			p(message);
			N("string_0107");
			Finale_2();
		}
	});

}

function Finale_2(){

	Show("nicky","coffee_nicky_packup_1");

	N("string_0002");
	N("string_0108");
	N("string_0109");
	N("string_0110");

	Show("nicky","coffee_nicky_packup_2");

	// SERIOUSNESS.
	PlaySound("sfx","laptop_shut");
	PlaySound("bg","bedroom_1",{loop:-1, volume:0.4});

	p("string_0111");

	if($.punched){
		N("string_0112");
	}else if($.father_oblivious==false){
		N("string_0113");
	}else if($.changing_schools){
		N("string_0114");
	}else{
		N("string_0115");
	}

	N("string_0116");

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

	N("string_0117");
	N("string_0118");

	PlaySound("sfx","laptop_pack_2");
	Show("nicky","coffee_nicky_packup_4");

	N("string_0119");
	N("string_0120");
	N("string_0121");

	p("string_0002");

	N("string_0122");
	N("string_0123");
	N("string_0124");
	N("string_0125");

	p("string_0002");

	N("string_0126");
	N("string_0002");
	N("string_0126");

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
	N("string_0127");

	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	//queue(ClearScene,0); // coz the sound's cool!
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);


}


