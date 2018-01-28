// Denounement
// j("string_0047"); j("string_0048");

// Recap what happened.
// Who's to blame.
// All coming towards --> Break up now, or try to stay together?

// Love you, X. Love you, Y.
// IMMEDIATELY CUT TO NOW - WE BROKE UP.

function Start_Jack_2(){

	/////// SET UP SCENE ////////

    j("jack_2");
    n("jack_2");

	Show("background","bedroom_2");
	Show("us","bedroom_us_2");
	Show("light","bedroom_light_2",{x:0,y:159});

	PlaySound("bg","bedroom_2",{loop:-1,volume:0.5});

	if($.punched){
		Show("punch","bedroom_punch",{x:256,y:404});
	}

	/////////////////////////////

	n("string_0000");
	if($.sadsack){
		j("string_0001");
	}else{
		j("string_0002");
	}
	j("string_0003");

	Choose({
		"jack_2_choice_1_entry_0000": function(message){
			n(message);
			j("string_0004");
			j("string_0005");
			What_Happened();
		},
		"jack_2_choice_1_entry_0001": function(message){
			n(message);
			j("string_0006");
			j("string_0007");
			What_Happened();
		},
		"jack_2_choice_1_entry_0002": function(message){
			n(message);
			j("string_0008");
			n("string_0009");
			j("string_0010");
			j("string_0011");
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
		n("string_0012");
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
	j("string_0013");
	j("string_0014");
	n("string_0015");
	j("string_0016");
	n("string_0017");
	j("string_0018");
	What_Happened_2();
}
function What_Happened_School(message){
	$.told_jack = "school";

	n(message);
	j("string_0019");
	j("string_0020");
	n("string_0021");
	j("string_0022");
	What_Happened_2();
}
function What_Happened_Girl(message){
	$.told_jack = "girl";

	n(message);
	j("string_0023");
	n("string_0024");
	j("string_0025");
	n("string_0026");
	What_Happened_2();
}
function What_Happened_Texts(message){
	$.told_jack = "texts";

	n(message);
	j("string_0027");
	j("string_0028");
	n("string_0029");
	j("string_0030");
	What_Happened_2();
}

function What_Happened_2(){

	n("string_0031");
	j("string_0032");
	j("string_0033");
	j("string_0034");

	Choose({
		"jack_2_choice_6_entry_0000": function(message){
			$.blame = "jack";

			n(message);
			n("string_0035");
			j("string_0018");
			n("string_0036");
			n("string_0037");
			What_Now();
		},
		"jack_2_choice_6_entry_0001": function(message){
			$.blame = "parents";

			n(message);
			n("string_0038");
			if($.told_jack!="texts"){
				j("string_0039");
			}else{
				j("string_0040");
				n("string_0041");
			}
			What_Now();
		},
		"jack_2_choice_6_entry_0002": function(message){
			$.blame = "nicky";

			n(message);
			n("string_0042");
			if($.told_jack!="texts"){
				j("string_0043");
			}
			j("string_0044");
			n("string_0045");
			What_Now();
		}
	});

}

function What_Now(){

	j("string_0018");

	n("string_0046");
	n("string_0047");
	n("string_0048");

	j("string_0018");
	j("string_0049");

	Choose({
		"jack_2_choice_7_entry_0000": function(message){
			n(message);

			if($.told_jack=="texts"){
				n("string_0050");
				n("string_0051");
			}else if($.told_jack=="girl"){
				n("string_0052");
			}else{
				n("string_0053");
			}

			What_Now_2();
		},
		"jack_2_choice_7_entry_0001": function(message){
			n(message);

			if($.told_jack=="abuse"){
				n("string_0054");
			}else if($.told_jack=="school"){
				n("string_0055");
			}else{
				n("string_0056");
			}

			What_Now_2();
		},
		"jack_2_choice_7_entry_0002": function(message){
			n(message);

			n("string_0057");
			n("string_0058");
			n("string_0059");
			What_Now_2();
		}
	});

}

function What_Now_2(){

	j("string_0060");
	n("string_0061");
	j("string_0062");
	n("string_0018");

	Choose({
		"jack_2_choice_8_entry_0000": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("string_0063");
			n("string_0064");
			j("string_0065");
			n("string_0066");
			n("string_0018");
			j("string_0067");
			n("string_0018");
			What_Now_3();
		},
		"jack_2_choice_8_entry_0001": function(message){
			n(message);

			j("string_0018");
			j("string_0068");
			n("string_0018");
			What_Now_3();
		},
		"jack_2_choice_8_entry_0002": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("string_0018");
			What_Now_3();
		}
	});

}

function What_Now_3(){

	n("string_0069");
	n("string_0070");
	j("string_0071");
	j("string_0018");
	j("string_0072");
	n("string_0073");

	var insult = "";
	if($.hippies) insult+="string_0095";
	if($.im_a_poet) insult+="string_0096";
	if(insult!=""){
		n("string_0076", tr('jack_2', insult));
	}else{
		n("string_0077");
	}

	The_Game_Ends();

}

function The_Game_Ends(){
	Wait(500);
	Start_Outro();
}

