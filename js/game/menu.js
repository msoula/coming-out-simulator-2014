function Start(){

	$ = {};

	/////// SET UP SCENE ////////

    N("menu");
    p("menu");

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("string_0000");
	N("string_0001");
	N("string_0002");
	N("string_0003");

	Choose({
		"menu_choice_1_entry_0000": Play,
		"menu_choice_1_entry_0001": function(){
			Credits("string_0004");
		},
		"menu_choice_1_entry_0002": function(){
			About("string_0005");
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
		N("string_0006");
		N("string_0007");
		p("string_0008");
		N("string_0009");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p("string_0010");
		p("string_0011");
		N("string_0012");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("string_0013");
	}

	N("string_0014");
	p("string_0015");
	N("string_0016");

	N("string_0017");

	Choose({
		"menu_choice_2_entry_0000": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("string_0018");
			p("string_0019");
			N("string_0020");
			Play_2();
		},
		"menu_choice_2_entry_0001": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("string_0021");
			p("string_0022");
			N("string_0023");
			p("string_0024");
			N("string_0025");
			Play_2();
		},
		"menu_choice_2_entry_0002": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("string_0026");
			N("string_0027");
			p("string_0028");
			N("string_0025");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("string_0029");
		p("string_0008");
	}

	N("string_0030");
	N("string_0031");
	N("string_0032");
	N("string_0033");

	Choose({
		"menu_choice_3_entry_0000": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("string_0034");
			p("string_0010");
			Play_3();
		},
		"menu_choice_3_entry_0001": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("string_0035");
			p("string_0036");
			Play_3();
		},
		"menu_choice_3_entry_0002": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("string_0037");
			p("string_0010");
			Play_3();
		}
	});

}

function Play_3(){

	N("string_0038");
	if(!$.asked_credits){
		N("string_0039");
		p("string_0008");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "string_0040"; break;
		case 2: whatISay = "string_0041"; break;
		case 3: whatISay = "string_0042"; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "string_0043"; break;
		case 2: whatISay += "string_0044"; break;
		case 3: whatISay += "string_0045"; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("string_0046");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);

	N("string_0047");
	N("string_0048");
	N("string_0049");
	p("string_0050");
	N("string_0034");

	N("string_0010");
	N("string_0051");

	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;

	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("string_0004");
	}

	N("string_0052");
	N("string_0053");
	N("string_0054");

	p("string_0055");
	if($.asked_about){
		p("string_0056");
	}else{
		p("string_0057");
	}

	N("string_0058");

	if($.asked_about){
		p("string_0059");
		p("string_0060");
		p("string_0061");
		N("string_0062");
		N("string_0063");
	}else{
		N("string_0064");
	}

	N("string_0065");
	N("string_0066");

	if($.asked_about){
		Choose({
			"menu_choice_4_entry_0000": Play
		});
	}else{
		Choose({
			"menu_choice_5_entry_0000": Play,
			"menu_choice_5_entry_0001": function(){
				About("string_0067");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("string_0068");
	}else{
		N("string_0069");
		N("string_0070");
		N("string_0071");
	}

	p("string_0061");
	N("string_0072");

	if($.asked_credits){
		p("string_0073");
		N("string_0074");
		p("string_0075");
	}

	N("string_0076");
	p("string_0077");
	N("string_0078");
	N("string_0079");
	N("string_0080");

	p("string_0081");
	N("string_0082");
	p("string_0083");

	if($.asked_credits){
		Choose({
			"menu_choice_6_entry_0000": Play
		});
	}else{
		Choose({
			"menu_choice_7_entry_0000": Play,
			"menu_choice_7_entry_0001": function(){
				Credits("string_0084");
			}
		});
	}

}
