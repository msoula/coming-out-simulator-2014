// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

    f("dinner_5");
    m("dinner_5");
    n("dinner_5");

	PlaySound("sfx","dinner_door");

	f("string_0000");
	f("string_0001");

	Show("dad","dad_serious");

	m("string_0002");
	n("string_0003");

	f("string_0004");
	f("string_0005");
	n("string_0006");

	f("string_0007");

	Choose({
		"dinner_5_choice_1_entry_0000": function(message){
			n(message);
			f("string_0008");
			n("string_0009");
			Casual();
		},
		"dinner_5_choice_1_entry_0001": function(message){
			n(message);
			f("string_0010");
			f("string_0011");
			n("string_0009");
			Casual();
		},
		"dinner_5_choice_1_entry_0002": function(message){
			n(message);
			f("string_0012");
			f("string_0013");
			n("string_0009");
			Casual();
		}
	});

}

function Casual(){

	f("string_0014");
	f("string_0015");

	Show("clock_time","clock_1950");

	Choose({
		"dinner_5_choice_2_entry_0000": function(message){

			n(message);

			$.grounded = 2;
			f("string_0016");
			f("string_0017");
			f("string_0018");

			Casual_2();

		},
		"dinner_5_choice_2_entry_0001": function(message){

			n(message);

			$.grounded = 1;
			f("string_0019");
			f("string_0020");
			f("string_0021");

			Casual_2();

		},
		"dinner_5_choice_2_entry_0002": function(message){

			n(message);

			$.grounded = 0;
			m("string_0022");
			f("string_0023");
			f("string_0024");
			f("string_0009");
			n("string_0009");
			m("string_0009");
			f("string_0025");

			Casual_2();

		}
	});

}

function Casual_2(){

	m("string_0026");
	f("string_0027");

	Choose({
		"dinner_5_choice_3_entry_0000": function(message){

			n(message);

			f("string_0028");
			if($.studying_subject!=$.studying_subject_2){
				f("string_0029", tr('dinner_2', $.studying_subject), tr('dinner_2', $.studying_subject_2));
			}else{
				f("string_0030", tr('dinner_2', $.studying_subject));
			}

			m("string_0031");
			Getting_A_Tutor();

		},
		"dinner_5_choice_3_entry_0001": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("string_0032");
				}
				if($.grounded==2){
					f("string_0033");
				}
				f("string_0034");

				n("string_0035");

				$.grounded++;
				if($.grounded==2){
					f("string_0036");
				}
				if($.grounded==3){
					f("string_0037");
				}

			}

			m("string_0038");
			Getting_A_Tutor();

		},
		"dinner_5_choice_3_entry_0002": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("string_0039");
			Show("nicky","dinner_nicky_sit");

			m("string_0040");
			f("string_0041");
			f("string_0042");
			f("string_0043");
			n("string_0006");
			m("string_0044");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("string_0045");
	f("string_0046");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("string_0047");
			if($.tried_talking_about_it){
				m("string_0048");
			}
			break;
		case "no":
			n("string_0049");
			m("string_0050");
			break;
		case "tit for tat":
			n("string_0051");
			if($.tried_talking_about_it){
				m("string_0048");
			}
			break;
	}

	f("string_0052");
	f("string_0053");
	m("string_0054");

	Choose({
		"dinner_5_choice_4_entry_0000": function(message){
			n(message);
			f("string_0055");
			Getting_A_Tutor_2();
		},
		"dinner_5_choice_4_entry_0001": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"dinner_5_choice_4_entry_0002": function(message){
			n(message);
			f("string_0056");
			n("string_0057");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){

	f("string_0058");
	f("string_0059");

	n("string_0060");
	f("string_0061");

	if($.changing_schools){
		m("string_0062");
		m("string_0063");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("string_0064", tr('dinner_2', $.studying_subject), tr('dinner_2', $.studying_subject_2));
	}else{
		m("string_0065", tr('dinner_2', $.studying_subject));
	}

	f("string_0066");
	m("string_0067");
	f("string_0068");
	m("string_0009");

	Show("dad","dad_threat");

	f("string_0069");
	if($.changing_schools){
		f("string_0070");
	}else{
		f("string_0071");
	}

	n("string_0072");
	f("string_0073");
	f("string_0074");

	n("string_0009");

	Choose({
		"string_0136": Agree_With_Dad,
		"No.": Argue_With_Dad
	});

}

function Agree_With_Dad(){

	n("string_0075");

	f("string_0076");
	f("string_0077");
	f("string_0078");
	m("string_0009");
	n("string_0009");

	f("string_0079");
	f("string_0080");

	Choose({
		"dinner_5_choice_5_entry_0000": function(message){

			n(message);

			f("string_0081");
			f("string_0082");

			Show("dad","dad_serious");

			f("string_0083");
			n("string_0009");
			Agreeable_Ending();

		},
		"dinner_5_choice_5_entry_0001": function(message){

			n(message);

			Show("mom","mom_cry");
			m("string_0084");
			f("string_0009");
			Argument_Ending();

		},
		"dinner_5_choice_5_entry_0002": function(message){

			n(message);

			m("string_0085");
			f("string_0009");
			f("string_0086");
			m("string_0087");
			f("string_0088");
			n("string_0089");

			Show("dad","dad_serious");

			f("string_0090");
			n("string_0006");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("string_0091");

	Show("nicky","dinner_nicky_sit");
	n("string_0009");
	f("string_0092");
	f("string_0093");

	Choose({
		"dinner_5_choice_6_entry_0000": function(message){
			n(message);
			f("string_0094");
			f("string_0095");
			n("string_0096");
			f("string_0097");
			f("string_0098");
			n("string_0099");
			Dinner_Ending();
		},
		"dinner_5_choice_6_entry_0001": function(message){
			n(message);
			f("string_0100");
			n("string_0101");
			if($.studying_subject!=$.studying_subject_2){
				f("string_0102", tr('dinner_2', $.studying_subject), tr('dinner_2', $.studying_subject_2));
			}else{
				f("string_0103", tr('dinner_2', $.studying_subject));
			}
			f("string_0104");
			f("string_0105");
			n("string_0006");
			Dinner_Ending();
		},
		"dinner_5_choice_6_entry_0002": function(message){
			n(message);
			f("string_0106");
			f("string_0107");
			n("string_0108");
			n("string_0109");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("string_0110");

	f("string_0111");
	n("string_0112");
	f("string_0113");
	n("string_0114");

	Choose({
		"dinner_5_choice_7_entry_0000": function(message){

			n(message);

			Show("mom","mom_cry");
			m("string_0084");

			m("string_0115");
			f("string_0116");
			Argument_Ending();
		},
		"dinner_5_choice_7_entry_0001": function(message){

			n(message);

			Show("mom","mom_cry");
			m("string_0084");

			f("string_0117");
			if($.hippies){
				m("string_0118");
			}
			f("string_0119");
			Argument_Ending();
		},
		"dinner_5_choice_7_entry_0002": function(message){

			n(message);

			Show("mom","mom_cry");
			m("string_0084");

			m("string_0120");
			if($.hippies){
				m("string_0118");
			}
			f("string_0119");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n("string_0009");

	if($.top_or_bottom=="top"){
		m("string_0121");
	}
	switch($.what_are_you){
		case "bisexual":
			m("string_0122");
			n("string_0009");
			break;
		case "confused":
			m("string_0123");
			f("string_0124");
			n("string_0009");
			break;
		case "son":
			n("string_0125");
			break;
	}

	f("string_0126");
	n("string_0009");
	m("string_0127");

	f("string_0128");
	n("string_0009");
	m("string_0129");

	f("string_0130");
	n("string_0009");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("string_0131");
		f("string_0132");
	}
	if($.crying=="mocking"){
		m("string_0133");
		f("string_0132");
	}

	f("string_0134");
	f("string_0135");

	Choose({
		"dinner_5_choice_8_entry_0000": function(message){

			n("string_0136");
			n("string_0137");
			n("string_0138");

			Show("nicky","dinner_nicky_outrage");
			n("string_0139");

			Dinner_Ending_Punch();

		},
		"dinner_5_choice_8_entry_0001": function(message){

			n(message);
			f("string_0140");
			n("string_0009");

			Show("dad","dad_serious");

			m("string_0141");
			f("string_0142");

			Show("dad",null);

			f("string_0143");
			PlaySound("sfx","dinner_door");

			m("string_0009");

			Show("mom","mom_cry");

			m("string_0144");

			Dinner_Ending();

		},
		"dinner_5_choice_8_entry_0002": function(message){

			n(message);
			f("string_0009");
			m("string_0145");
			f("string_0146");
			m("string_0147");
			f("string_0148");
			m("string_0149");
			f("string_0150");
			m("string_0151");

			Dinner_Ending_Punch();

		}
	});

}

function Dinner_Ending_Punch(){

	Wait(500);

	queue(ClearDialogue,0);

	StopSound("clock");
	PlaySound("sfx","dinner_punch");

	Show("dad",null);
	Show("mom","mom_cry");
	Show("nicky","dinner_nicky_punched");
	Show("dinner_punch_arm","dinner_punch_arm",{x:0,y:300});

	$.punched = true;
	Dinner_Ending();

}

function Dinner_Ending(){

	Wait(500);

	queue(ClearDialogue,0);

	Wait(500);

	PlaySound("clock","dinner_meowing",{loop:-1});
	Show("clock","clock_meowing");
	Show("clock_time","clock_2000");

	Wait(1000);

	Clear();
	Start_Jack_2();

}

