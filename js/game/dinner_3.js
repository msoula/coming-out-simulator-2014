// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("dinner_3_dialog_0000");

	Choose({
		"dinner_3_choice_1_entry_0000": Tutor,
		"dinner_3_choice_1_entry_0001": Tutor,
		"dinner_3_choice_1_entry_0002": Tutor
	});

}

function Tutor(message){

	n(message);
	m("dinner_3_dialog_0001");

	if($.hippies){
		m("dinner_3_dialog_0002");
		n("dinner_3_dialog_0003");
	}else if($.im_a_poet){
		m("dinner_3_dialog_0004");
		n("dinner_3_dialog_0003");
	}

	m("dinner_3_dialog_0005");
	n("dinner_3_dialog_0006");

	if($.studying_subject!=$.studying_subject_2){
		m("dinner_3_dialog_0007", $.studying_subject, $.studying_subject_2);
	}else{
		m("dinner_3_dialog_0008", $.studying_subject);
	}

	m("dinner_3_dialog_0009");

	Choose({
		"dinner_3_choice_2_entry_0000": Tutor_Seeing,
		"dinner_3_choice_2_entry_0001": Tutor_Matchmake,
		"dinner_3_choice_2_entry_0002": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("dinner_3_dialog_0010");
	m("dinner_3_dialog_0011");

	Choose({
		"dinner_3_choice_3_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0012");
			n("dinner_3_dialog_0012");
			n("dinner_3_dialog_0013");
			m("dinner_3_dialog_0012");
			n("dinner_3_dialog_0014");
			m("dinner_3_dialog_0012");
			Threat_School();
		},
		"dinner_3_choice_3_entry_0001": function(message){
			n(message);
			m("dinner_3_dialog_0015");
			n("dinner_3_dialog_0016");
			m("dinner_3_dialog_0012");
			m("dinner_3_dialog_0017");
			n("dinner_3_dialog_0018");
			m("dinner_3_dialog_0019");
			Threat_Tutor();
		},
		"dinner_3_choice_3_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0012");
			m("dinner_3_dialog_0020");
			m("dinner_3_dialog_0021");
			n("dinner_3_dialog_0022");

			if($.relationship=="friend"){
				m("dinner_3_dialog_0023");
			}
			if($.relationship=="best friend"){
				m("dinner_3_dialog_0024");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("dinner_3_dialog_0025");
	n("dinner_3_dialog_0026");
	m("dinner_3_dialog_0027");
	m("dinner_3_dialog_0028");

	Choose({
		"dinner_3_choice_4_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0029");
			m("dinner_3_dialog_0030");
			n("dinner_3_dialog_0031");
			m("dinner_3_dialog_0032");
			Threat_Tutor();
		},
		"dinner_3_choice_4_entry_0001": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("dinner_3_dialog_0033");

			Show("nicky","dinner_nicky_defiant");

			n("dinner_3_dialog_0034");
			n("dinner_3_dialog_0035");
			m("dinner_3_dialog_0012");
			n("dinner_3_dialog_0012");
			Threat_School();
		},
		"dinner_3_choice_4_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0036");
			m("dinner_3_dialog_0037");
			n("dinner_3_dialog_0038");
			m("dinner_3_dialog_0039");
			n("dinner_3_dialog_0040");
			m("dinner_3_dialog_0012");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("dinner_3_dialog_0041");
	n("dinner_3_dialog_0042");
	n("dinner_3_dialog_0043");
	m("dinner_3_dialog_0012");
	m("dinner_3_dialog_0044");

	Choose({
		"dinner_3_choice_5_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0012");
			n("dinner_3_dialog_0012");
			n("dinner_3_dialog_0013");
			n("dinner_3_dialog_0045");
			m("dinner_3_dialog_0012");
			Threat_School();
		},
		"dinner_3_choice_5_entry_0001": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("dinner_3_dialog_0046");
				n("dinner_3_dialog_0047");
			}else{
				m("dinner_3_dialog_0048");
			}
			m("dinner_3_dialog_0049");
			Threat_Tutor();
		},
		"dinner_3_choice_5_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0050");
			if($.lying_about_hanging_out){
				m("dinner_3_dialog_0046");
				n("dinner_3_dialog_0047");
			}
			m("dinner_3_dialog_0049");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){

	Show("nicky","dinner_nicky_defiant");

	n("dinner_3_dialog_0012");
	m("dinner_3_dialog_0051");

	Choose({
		"dinner_3_choice_6_entry_0000":function(message){
			n(message);
			m("dinner_3_dialog_0052");
			n("dinner_3_dialog_0012");
			m("dinner_3_dialog_0053");
			n("dinner_3_dialog_0012");
			n("dinner_3_dialog_0054");
			m("dinner_3_dialog_0055");
			Plot_Twist();
		},
		"dinner_3_choice_6_entry_0001": function(message){
			n(message);
			m("dinner_3_dialog_0056");
			n("dinner_3_dialog_0057");
			m("dinner_3_dialog_0058");
			n("dinner_3_dialog_0012");
			m("dinner_3_dialog_0055");
			Plot_Twist();
		},
		"dinner_3_choice_6_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0059");
			m("dinner_3_dialog_0060");
			n("dinner_3_dialog_0061");
			m("dinner_3_dialog_0062");
			m("dinner_3_dialog_0063");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;

	m("dinner_3_dialog_0064");

	Show("nicky","dinner_nicky_outrage");

	n("dinner_3_dialog_0065");
	m("dinner_3_dialog_0066");
	n("dinner_3_dialog_0067");
	m("dinner_3_dialog_0068");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"dinner_3_choice_7_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0069");
			m("dinner_3_dialog_0070");
			n("dinner_3_dialog_0012");
			Plot_Twist();
		},
		"dinner_3_choice_7_entry_0001": function(message){
			n(message);
			m("dinner_3_dialog_0069");
			m("dinner_3_dialog_0071");
			n("dinner_3_dialog_0012");
			Plot_Twist();
		},
		"dinner_3_choice_7_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0069");
			m("dinner_3_dialog_0072");
			n("dinner_3_dialog_0012");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("dinner_3_dialog_0073");
	m("dinner_3_dialog_0074");

	Show("nicky","dinner_nicky_sit");
	n("dinner_3_dialog_0012");

	Show("clock_time","clock_1920");

	Choose({
		"dinner_3_choice_8_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0075");
			Plot_Twist_2();
		},
		"dinner_3_choice_8_entry_0001": function(message){
			n(message);
			m("dinner_3_dialog_0076");
			m("dinner_3_dialog_0077");
			Plot_Twist_2();
		},
		"dinner_3_choice_8_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0078");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n("dinner_3_dialog_0012");
	m("dinner_3_dialog_0079");

	// Dinner_1
	m("dinner_3_dialog_0080", $.what_you_called_out);
	m("dinner_3_dialog_0081");
	m("dinner_3_dialog_0082");

	n("dinner_3_dialog_0012");

	if($.im_a_poet){
		m("dinner_3_dialog_0083");
	}
	if($.hippies){
		m("dinner_3_dialog_0084");
	}
	if($.im_a_poet || $.hippies){
		m("dinner_3_dialog_0085");
		m("dinner_3_dialog_0086");
	}

	Choose({
		"dinner_3_choice_9_entry_0000": function(message){
			n(message);
			m("dinner_3_dialog_0087");
			n("dinner_3_dialog_0088");
			m("dinner_3_dialog_0089");
			Plot_Twist_3();
		},
		"dinner_3_choice_9_entry_0001": function(message){
			n(message);
			m("dinner_3_dialog_0090");
			m("dinner_3_dialog_0091");
			Plot_Twist_3();
		},
		"dinner_3_choice_9_entry_0002": function(message){
			n(message);
			m("dinner_3_dialog_0092");
			m("dinner_3_dialog_0093");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
