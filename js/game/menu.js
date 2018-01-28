function Start(){

	$ = {};

	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("menu_dialog_0000");
	N("menu_dialog_0001");
	N("menu_dialog_0002");
	N("menu_dialog_0003");

	Choose({
		"menu_choice_1_entry_0000": Play,
		"menu_choice_1_entry_0001": function(){
			Credits("menu_dialog_0004");
		},
		"menu_choice_1_entry_0002": function(){
			About("menu_dialog_0005");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){

	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("menu_dialog_0006");
		N("menu_dialog_0007");
		p("menu_dialog_0008");
		N("menu_dialog_0009");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p("menu_dialog_0010");
		p("menu_dialog_0011");
		N("menu_dialog_0012");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("menu_dialog_0013");
	}

	N("menu_dialog_0014");
	p("menu_dialog_0015");
	N("menu_dialog_0016");

	N("menu_dialog_0017");

	Choose({
		"menu_choice_2_entry_0000": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("menu_dialog_0018");
			p("menu_dialog_0019");
			N("menu_dialog_0020");
			Play_2();
		},
		"menu_choice_2_entry_0001": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("menu_dialog_0021");
			p("menu_dialog_0022");
			N("menu_dialog_0023");
			p("menu_dialog_0024");
			N("menu_dialog_0025");
			Play_2();
		},
		"menu_choice_2_entry_0002": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("menu_dialog_0026");
			N("menu_dialog_0027");
			p("menu_dialog_0028");
			N("menu_dialog_0025");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("menu_dialog_0029");
		p("menu_dialog_0008");
	}

	N("menu_dialog_0030");
	N("menu_dialog_0031");
	N("menu_dialog_0032");
	N("menu_dialog_0033");

	Choose({
		"menu_choice_3_entry_0000": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("menu_dialog_0034");
			p("menu_dialog_0010");
			Play_3();
		},
		"menu_choice_3_entry_0001": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("menu_dialog_0035");
			p("menu_dialog_0036");
			Play_3();
		},
		"menu_choice_3_entry_0002": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("menu_dialog_0037");
			p("menu_dialog_0010");
			Play_3();
		}
	});

}

function Play_3(){

	N("menu_dialog_0038");
	if(!$.asked_credits){
		N("menu_dialog_0039");
		p("menu_dialog_0008");
	}

	var whatISay = [];
	switch($.main_menu_convo_1){
		case 1: whatISay.push("menu_dialog_0040"); break;
		case 2: whatISay.push("menu_dialog_0041"); break;
		case 3: whatISay.push("menu_dialog_0042"); break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay.push("menu_dialog_0043"); break;
		case 2: whatISay.push("menu_dialog_0044"); break;
		case 3: whatISay.push("menu_dialog_0045"); break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("menu_dialog_0046");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);

	N("menu_dialog_0047");
	N("menu_dialog_0048");
	N("menu_dialog_0049");
	p("menu_dialog_0050");
	N("menu_dialog_0034");

	N("menu_dialog_0010");
	N("menu_dialog_0051");

	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;

	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("menu_dialog_0004");
	}

	N("menu_dialog_0052");
	N("menu_dialog_0053");
	N("menu_dialog_0054");

	p("menu_dialog_0055");
	if($.asked_about){
		p("menu_dialog_0056");
	}else{
		p("menu_dialog_0057");
	}

	N("menu_dialog_0058");

	if($.asked_about){
		p("menu_dialog_0059");
		p("menu_dialog_0060");
		p("menu_dialog_0061");
		N("menu_dialog_0062");
		N("menu_dialog_0063");
	}else{
		N("menu_dialog_0064");
	}

	N("menu_dialog_0065");
	N("menu_dialog_0066");

	if($.asked_about){
		Choose({
			"menu_choice_4_entry_0000": Play
		});
	}else{
		Choose({
			"menu_choice_5_entry_0000": Play,
			"menu_choice_5_entry_0001": function(){
				About("menu_dialog_0067");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("menu_dialog_0068");
	}else{
		N("menu_dialog_0069");
		N("menu_dialog_0070");
		N("menu_dialog_0071");
	}

	p("menu_dialog_0061");
	N("menu_dialog_0072");

	if($.asked_credits){
		p("menu_dialog_0073");
		N("menu_dialog_0074");
		p("menu_dialog_0075");
	}

	N("menu_dialog_0076");
	p("menu_dialog_0077");
	N("menu_dialog_0078");
	N("menu_dialog_0079");
	N("menu_dialog_0080");

	p("menu_dialog_0081");
	N("menu_dialog_0082");
	p("menu_dialog_0083");

	if($.asked_credits){
		Choose({
			"menu_choice_6_entry_0000": Play
		});
	}else{
		Choose({
			"menu_choice_7_entry_0000": Play,
			"menu_choice_7_entry_0001": function(){
				Credits("menu_dialog_0084");
			}
		});
	}

}
