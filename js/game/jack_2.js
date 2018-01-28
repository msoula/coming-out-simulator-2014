// Denounement
// j("jack_2_dialog_0047"); j("jack_2_dialog_0048");

// Recap what happened.
// Who's to blame.
// All coming towards --> Break up now, or try to stay together?

// Love you, X. Love you, Y.
// IMMEDIATELY CUT TO NOW - WE BROKE UP.

function Start_Jack_2(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_2");
	Show("us","bedroom_us_2");
	Show("light","bedroom_light_2",{x:0,y:159});

	PlaySound("bg","bedroom_2",{loop:-1,volume:0.5});

	if($.punched){
		Show("punch","bedroom_punch",{x:256,y:404});
	}

	/////////////////////////////

	n("jack_2_dialog_0000");
	if($.sadsack){
		j("jack_2_dialog_0001");
	}else{
		j("jack_2_dialog_0002");
	}
	j("jack_2_dialog_0003");

	Choose({
		"jack_2_choice_1_entry_0000": function(message){
			n(message);
			j("jack_2_dialog_0004");
			j("jack_2_dialog_0005");
			What_Happened();
		},
		"jack_2_choice_1_entry_0001": function(message){
			n(message);
			j("jack_2_dialog_0006");
			j("jack_2_dialog_0007");
			What_Happened();
		},
		"jack_2_choice_1_entry_0002": function(message){
			n(message);
			j("jack_2_dialog_0008");
			n("jack_2_dialog_0009");
			j("jack_2_dialog_0010");
			j("jack_2_dialog_0011");
			What_Happened();
		}
	});

}

function What_Happened(){

	if($.punched){
		Choose({
			"jack_2_choice_2_entry_0000": What_Happened_Abuse,
			"jack_2_choice_2_entry_0001": What_Happened_School,
			"jack_2_choice_2_entry_0002": What_Happened_Texts
		});
	}else if($.father_oblivious==false){
		Choose({
			"jack_2_choice_3_entry_0000": What_Happened_Abuse,
			"jack_2_choice_2_entry_0001": What_Happened_School,
			"jack_2_choice_2_entry_0002": What_Happened_Texts
		});
	}else{
		n("jack_2_dialog_0012");
		if($.changing_schools){
			Choose({
				"jack_2_choice_4_entry_0000": What_Happened_School,
				"jack_2_choice_4_entry_0001": What_Happened_Girl,
				"jack_2_choice_4_entry_0002": What_Happened_Texts,
			});
		}else{
			Choose({
				"jack_2_choice_5_entry_0000": What_Happened_School,
				"jack_2_choice_4_entry_0001": What_Happened_Girl,
				"jack_2_choice_4_entry_0002": What_Happened_Texts,
			});
		}
	}

}

function What_Happened_Abuse(message){
	$.told_jack = "abuse";

	n(message);
	j("jack_2_dialog_0013");
	j("jack_2_dialog_0014");
	n("jack_2_dialog_0015");
	j("jack_2_dialog_0016");
	n("jack_2_dialog_0017");
	j("jack_2_dialog_0018");
	What_Happened_2();
}
function What_Happened_School(message){
	$.told_jack = "school";

	n(message);
	j("jack_2_dialog_0019");
	j("jack_2_dialog_0020");
	n("jack_2_dialog_0021");
	j("jack_2_dialog_0022");
	What_Happened_2();
}
function What_Happened_Girl(message){
	$.told_jack = "girl";

	n(message);
	j("jack_2_dialog_0023");
	n("jack_2_dialog_0024");
	j("jack_2_dialog_0025");
	n("jack_2_dialog_0026");
	What_Happened_2();
}
function What_Happened_Texts(message){
	$.told_jack = "texts";

	n(message);
	j("jack_2_dialog_0027");
	j("jack_2_dialog_0028");
	n("jack_2_dialog_0029");
	j("jack_2_dialog_0030");
	What_Happened_2();
}

function What_Happened_2(){

	n("jack_2_dialog_0031");
	j("jack_2_dialog_0032");
	j("jack_2_dialog_0033");
	j("jack_2_dialog_0034");

	Choose({
		"jack_2_choice_6_entry_0000": function(message){
			$.blame = "jack";

			n(message);
			n("jack_2_dialog_0035");
			j("jack_2_dialog_0018");
			n("jack_2_dialog_0036");
			n("jack_2_dialog_0037");
			What_Now();
		},
		"jack_2_choice_6_entry_0001": function(message){
			$.blame = "parents";

			n(message);
			n("jack_2_dialog_0038");
			if($.told_jack!="texts"){
				j("jack_2_dialog_0039");
			}else{
				j("jack_2_dialog_0040");
				n("jack_2_dialog_0041");
			}
			What_Now();
		},
		"jack_2_choice_6_entry_0002": function(message){
			$.blame = "nicky";

			n(message);
			n("jack_2_dialog_0042");
			if($.told_jack!="texts"){
				j("jack_2_dialog_0043");
			}
			j("jack_2_dialog_0044");
			n("jack_2_dialog_0045");
			What_Now();
		}
	});

}

function What_Now(){

	j("jack_2_dialog_0018");

	n("jack_2_dialog_0046");
	n("jack_2_dialog_0047");
	n("jack_2_dialog_0048");

	j("jack_2_dialog_0018");
	j("jack_2_dialog_0049");

	Choose({
		"jack_2_choice_7_entry_0000": function(message){
			n(message);

			if($.told_jack=="texts"){
				n("jack_2_dialog_0050");
				n("jack_2_dialog_0051");
			}else if($.told_jack=="girl"){
				n("jack_2_dialog_0052");
			}else{
				n("jack_2_dialog_0053");
			}

			What_Now_2();
		},
		"jack_2_choice_7_entry_0001": function(message){
			n(message);

			if($.told_jack=="abuse"){
				n("jack_2_dialog_0054");
			}else if($.told_jack=="school"){
				n("jack_2_dialog_0055");
			}else{
				n("jack_2_dialog_0056");
			}

			What_Now_2();
		},
		"jack_2_choice_7_entry_0002": function(message){
			n(message);

			n("jack_2_dialog_0057");
			n("jack_2_dialog_0058");
			n("jack_2_dialog_0059");
			What_Now_2();
		}
	});

}

function What_Now_2(){

	j("jack_2_dialog_0060");
	n("jack_2_dialog_0061");
	j("jack_2_dialog_0062");
	n("jack_2_dialog_0018");

	Choose({
		"jack_2_choice_8_entry_0000": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("jack_2_dialog_0063");
			n("jack_2_dialog_0064");
			j("jack_2_dialog_0065");
			n("jack_2_dialog_0066");
			n("jack_2_dialog_0018");
			j("jack_2_dialog_0067");
			n("jack_2_dialog_0018");
			What_Now_3();
		},
		"jack_2_choice_8_entry_0001": function(message){
			n(message);

			j("jack_2_dialog_0018");
			j("jack_2_dialog_0068");
			n("jack_2_dialog_0018");
			What_Now_3();
		},
		"jack_2_choice_8_entry_0002": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("jack_2_dialog_0018");
			What_Now_3();
		}
	});

}

function What_Now_3(){

	n("jack_2_dialog_0069");
	n("jack_2_dialog_0070");
	j("jack_2_dialog_0071");
	j("jack_2_dialog_0018");
	j("jack_2_dialog_0072");
	n("jack_2_dialog_0073");

	var insult = "";
	if($.hippies) insult+="jack_2_dialog_param_0000";
	if($.im_a_poet) insult+="jack_2_dialog_param_0001";
	if(insult!=""){
		n("jack_2_dialog_0074", insult);
	}else{
		n("jack_2_dialog_0075");
	}

	The_Game_Ends();

}

function The_Game_Ends(){
	Wait(500);
	Start_Outro();
}

