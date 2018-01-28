// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");

	f("dinner_5_dialog_0000");
	f("dinner_5_dialog_0001");

	Show("dad","dad_serious");

	m("dinner_5_dialog_0002");
	n("dinner_5_dialog_0003");

	f("dinner_5_dialog_0004");
	f("dinner_5_dialog_0005");
	n("dinner_5_dialog_0006");

	f("dinner_5_dialog_0007");

	Choose({
		"dinner_5_choice_1_entry_0000": function(message){
			n(message);
			f("dinner_5_dialog_0008");
			n("dinner_5_dialog_0009");
			Casual();
		},
		"dinner_5_choice_1_entry_0001": function(message){
			n(message);
			f("dinner_5_dialog_0010");
			f("dinner_5_dialog_0011");
			n("dinner_5_dialog_0009");
			Casual();
		},
		"dinner_5_choice_1_entry_0002": function(message){
			n(message);
			f("dinner_5_dialog_0012");
			f("dinner_5_dialog_0013");
			n("dinner_5_dialog_0009");
			Casual();
		}
	});

}

function Casual(){

	f("dinner_5_dialog_0014");
	f("dinner_5_dialog_0015");

	Show("clock_time","clock_1950");

	Choose({
		"dinner_5_choice_2_entry_0000": function(message){

			n(message);

			$.grounded = 2;
			f("dinner_5_dialog_0016");
			f("dinner_5_dialog_0017");
			f("dinner_5_dialog_0018");

			Casual_2();

		},
		"dinner_5_choice_2_entry_0001": function(message){

			n(message);

			$.grounded = 1;
			f("dinner_5_dialog_0019");
			f("dinner_5_dialog_0020");
			f("dinner_5_dialog_0021");

			Casual_2();

		},
		"dinner_5_choice_2_entry_0002": function(message){

			n(message);

			$.grounded = 0;
			m("dinner_5_dialog_0022");
			f("dinner_5_dialog_0023");
			f("dinner_5_dialog_0024");
			f("dinner_5_dialog_0009");
			n("dinner_5_dialog_0009");
			m("dinner_5_dialog_0009");
			f("dinner_5_dialog_0025");

			Casual_2();

		}
	});

}

function Casual_2(){

	m("dinner_5_dialog_0026");
	f("dinner_5_dialog_0027");

	Choose({
		"dinner_5_choice_3_entry_0000": function(message){

			n(message);

			f("dinner_5_dialog_0028");
			if($.studying_subject!=$.studying_subject_2){
				f("dinner_5_dialog_0029", $.studying_subject, $.studying_subject_2);
			}else{
				f("dinner_5_dialog_0030", $.studying_subject);
			}

			m("dinner_5_dialog_0031");
			Getting_A_Tutor();

		},
		"dinner_5_choice_3_entry_0001": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("dinner_5_dialog_0032");
				}
				if($.grounded==2){
					f("dinner_5_dialog_0033");
				}
				f("dinner_5_dialog_0034");

				n("dinner_5_dialog_0035");

				$.grounded++;
				if($.grounded==2){
					f("dinner_5_dialog_0036");
				}
				if($.grounded==3){
					f("dinner_5_dialog_0037");
				}

			}

			m("dinner_5_dialog_0038");
			Getting_A_Tutor();

		},
		"dinner_5_choice_3_entry_0002": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("dinner_5_dialog_0039");
			Show("nicky","dinner_nicky_sit");

			m("dinner_5_dialog_0040");
			f("dinner_5_dialog_0041");
			f("dinner_5_dialog_0042");
			f("dinner_5_dialog_0043");
			n("dinner_5_dialog_0006");
			m("dinner_5_dialog_0044");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("dinner_5_dialog_0045");
	f("dinner_5_dialog_0046");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("dinner_5_dialog_0047");
			if($.tried_talking_about_it){
				m("dinner_5_dialog_0048");
			}
			break;
		case "no":
			n("dinner_5_dialog_0049");
			m("dinner_5_dialog_0050");
			break;
		case "tit for tat":
			n("dinner_5_dialog_0051");
			if($.tried_talking_about_it){
				m("dinner_5_dialog_0048");
			}
			break;
	}

	f("dinner_5_dialog_0052");
	f("dinner_5_dialog_0053");
	m("dinner_5_dialog_0054");

	Choose({
		"dinner_5_choice_4_entry_0000": function(message){
			n(message);
			f("dinner_5_dialog_0055");
			Getting_A_Tutor_2();
		},
		"dinner_5_choice_4_entry_0001": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"dinner_5_choice_4_entry_0002": function(message){
			n(message);
			f("dinner_5_dialog_0056");
			n("dinner_5_dialog_0057");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){

	f("dinner_5_dialog_0058");
	f("dinner_5_dialog_0059");

	n("dinner_5_dialog_0060");
	f("dinner_5_dialog_0061");

	if($.changing_schools){
		m("dinner_5_dialog_0062");
		m("dinner_5_dialog_0063");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("dinner_5_dialog_0064", $.studying_subject, $.studying_subject_2);
	}else{
		m("dinner_5_dialog_0065", $.studying_subject);
	}

	f("dinner_5_dialog_0066");
	m("dinner_5_dialog_0067");
	f("dinner_5_dialog_0068");
	m("dinner_5_dialog_0009");

	Show("dad","dad_threat");

	f("dinner_5_dialog_0069");
	if($.changing_schools){
		f("dinner_5_dialog_0070");
	}else{
		f("dinner_5_dialog_0071");
	}

	n("dinner_5_dialog_0072");
	f("dinner_5_dialog_0073");
	f("dinner_5_dialog_0074");

	n("dinner_5_dialog_0009");

	Choose({
		"dinner_5_dialog_0136": Agree_With_Dad,
		"No.": Argue_With_Dad
	});

}

function Agree_With_Dad(){

	n("dinner_5_dialog_0075");

	f("dinner_5_dialog_0076");
	f("dinner_5_dialog_0077");
	f("dinner_5_dialog_0078");
	m("dinner_5_dialog_0009");
	n("dinner_5_dialog_0009");

	f("dinner_5_dialog_0079");
	f("dinner_5_dialog_0080");

	Choose({
		"dinner_5_choice_5_entry_0000": function(message){

			n(message);

			f("dinner_5_dialog_0081");
			f("dinner_5_dialog_0082");

			Show("dad","dad_serious");

			f("dinner_5_dialog_0083");
			n("dinner_5_dialog_0009");
			Agreeable_Ending();

		},
		"dinner_5_choice_5_entry_0001": function(message){

			n(message);

			Show("mom","mom_cry");
			m("dinner_5_dialog_0084");
			f("dinner_5_dialog_0009");
			Argument_Ending();

		},
		"dinner_5_choice_5_entry_0002": function(message){

			n(message);

			m("dinner_5_dialog_0085");
			f("dinner_5_dialog_0009");
			f("dinner_5_dialog_0086");
			m("dinner_5_dialog_0087");
			f("dinner_5_dialog_0088");
			n("dinner_5_dialog_0089");

			Show("dad","dad_serious");

			f("dinner_5_dialog_0090");
			n("dinner_5_dialog_0006");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("dinner_5_dialog_0091");

	Show("nicky","dinner_nicky_sit");
	n("dinner_5_dialog_0009");
	f("dinner_5_dialog_0092");
	f("dinner_5_dialog_0093");

	Choose({
		"dinner_5_choice_6_entry_0000": function(message){
			n(message);
			f("dinner_5_dialog_0094");
			f("dinner_5_dialog_0095");
			n("dinner_5_dialog_0096");
			f("dinner_5_dialog_0097");
			f("dinner_5_dialog_0098");
			n("dinner_5_dialog_0099");
			Dinner_Ending();
		},
		"dinner_5_choice_6_entry_0001": function(message){
			n(message);
			f("dinner_5_dialog_0100");
			n("dinner_5_dialog_0101");
			if($.studying_subject!=$.studying_subject_2){
				f("dinner_5_dialog_0102", $.studying_subject, $.studying_subject_2);
			}else{
				f("dinner_5_dialog_0103", $.studying_subject);
			}
			f("dinner_5_dialog_0104");
			f("dinner_5_dialog_0105");
			n("dinner_5_dialog_0006");
			Dinner_Ending();
		},
		"dinner_5_choice_6_entry_0002": function(message){
			n(message);
			f("dinner_5_dialog_0106");
			f("dinner_5_dialog_0107");
			n("dinner_5_dialog_0108");
			n("dinner_5_dialog_0109");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("dinner_5_dialog_0110");

	f("dinner_5_dialog_0111");
	n("dinner_5_dialog_0112");
	f("dinner_5_dialog_0113");
	n("dinner_5_dialog_0114");

	Choose({
		"dinner_5_choice_7_entry_0000": function(message){

			n(message);

			Show("mom","mom_cry");
			m("dinner_5_dialog_0084");

			m("dinner_5_dialog_0115");
			f("dinner_5_dialog_0116");
			Argument_Ending();
		},
		"dinner_5_choice_7_entry_0001": function(message){

			n(message);

			Show("mom","mom_cry");
			m("dinner_5_dialog_0084");

			f("dinner_5_dialog_0117");
			if($.hippies){
				m("dinner_5_dialog_0118");
			}
			f("dinner_5_dialog_0119");
			Argument_Ending();
		},
		"dinner_5_choice_7_entry_0002": function(message){

			n(message);

			Show("mom","mom_cry");
			m("dinner_5_dialog_0084");

			m("dinner_5_dialog_0120");
			if($.hippies){
				m("dinner_5_dialog_0118");
			}
			f("dinner_5_dialog_0119");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n("dinner_5_dialog_0009");

	if($.top_or_bottom=="top"){
		m("dinner_5_dialog_0121");
	}
	switch($.what_are_you){
		case "bisexual":
			m("dinner_5_dialog_0122");
			n("dinner_5_dialog_0009");
			break;
		case "confused":
			m("dinner_5_dialog_0123");
			f("dinner_5_dialog_0124");
			n("dinner_5_dialog_0009");
			break;
		case "son":
			n("dinner_5_dialog_0125");
			break;
	}

	f("dinner_5_dialog_0126");
	n("dinner_5_dialog_0009");
	m("dinner_5_dialog_0127");

	f("dinner_5_dialog_0128");
	n("dinner_5_dialog_0009");
	m("dinner_5_dialog_0129");

	f("dinner_5_dialog_0130");
	n("dinner_5_dialog_0009");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("dinner_5_dialog_0131");
		f("dinner_5_dialog_0132");
	}
	if($.crying=="mocking"){
		m("dinner_5_dialog_0133");
		f("dinner_5_dialog_0132");
	}

	f("dinner_5_dialog_0134");
	f("dinner_5_dialog_0135");

	Choose({
		"dinner_5_choice_8_entry_0000": function(message){

			n("dinner_5_dialog_0136");
			n("dinner_5_dialog_0137");
			n("dinner_5_dialog_0138");

			Show("nicky","dinner_nicky_outrage");
			n("dinner_5_dialog_0139");

			Dinner_Ending_Punch();

		},
		"dinner_5_choice_8_entry_0001": function(message){

			n(message);
			f("dinner_5_dialog_0140");
			n("dinner_5_dialog_0009");

			Show("dad","dad_serious");

			m("dinner_5_dialog_0141");
			f("dinner_5_dialog_0142");

			Show("dad",null);

			f("dinner_5_dialog_0143");
			PlaySound("sfx","dinner_door");

			m("dinner_5_dialog_0009");

			Show("mom","mom_cry");

			m("dinner_5_dialog_0144");

			Dinner_Ending();

		},
		"dinner_5_choice_8_entry_0002": function(message){

			n(message);
			f("dinner_5_dialog_0009");
			m("dinner_5_dialog_0145");
			f("dinner_5_dialog_0146");
			m("dinner_5_dialog_0147");
			f("dinner_5_dialog_0148");
			m("dinner_5_dialog_0149");
			f("dinner_5_dialog_0150");
			m("dinner_5_dialog_0151");

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

