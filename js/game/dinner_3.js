// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

    m("dinner_3");
    n("dinner_3");

	n("string_0000");

	Choose({
		"dinner_3_choice_1_entry_0000": Tutor,
		"dinner_3_choice_1_entry_0001": Tutor,
		"dinner_3_choice_1_entry_0002": Tutor
	});

}

function Tutor(message){

	n(message);
	m("string_0001");

	if($.hippies){
		m("string_0002");
		n("string_0003");
	}else if($.im_a_poet){
		m("string_0004");
		n("string_0003");
	}

	m("string_0005");
	n("string_0006");

	if($.studying_subject!=$.studying_subject_2){
		m("string_0007", tr('dinner_2', $.studying_subject), tr('dinner_2', $.studying_subject_2));
	}else{
		m("string_0008", tr('dinner_2', $.studying_subject));
	}

	m("string_0009");

	Choose({
		"dinner_3_choice_2_entry_0000": Tutor_Seeing,
		"dinner_3_choice_2_entry_0001": Tutor_Matchmake,
		"dinner_3_choice_2_entry_0002": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("string_0010");
	m("string_0011");

	Choose({
		"dinner_3_choice_3_entry_0000": function(message){
			n(message);
			m("string_0012");
			n("string_0012");
			n("string_0013");
			m("string_0012");
			n("string_0014");
			m("string_0012");
			Threat_School();
		},
		"dinner_3_choice_3_entry_0001": function(message){
			n(message);
			m("string_0015");
			n("string_0016");
			m("string_0012");
			m("string_0017");
			n("string_0018");
			m("string_0019");
			Threat_Tutor();
		},
		"dinner_3_choice_3_entry_0002": function(message){
			n(message);
			m("string_0012");
			m("string_0020");
			m("string_0021");
			n("string_0022");

			if($.relationship=="friend"){
				m("string_0023");
			}
			if($.relationship=="best friend"){
				m("string_0024");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("string_0025");
	n("string_0026");
	m("string_0027");
	m("string_0028");

	Choose({
		"dinner_3_choice_4_entry_0000": function(message){
			n(message);
			m("string_0029");
			m("string_0030");
			n("string_0031");
			m("string_0032");
			Threat_Tutor();
		},
		"dinner_3_choice_4_entry_0001": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("string_0033");

			Show("nicky","dinner_nicky_defiant");

			n("string_0034");
			n("string_0035");
			m("string_0012");
			n("string_0012");
			Threat_School();
		},
		"dinner_3_choice_4_entry_0002": function(message){
			n(message);
			m("string_0036");
			m("string_0037");
			n("string_0038");
			m("string_0039");
			n("string_0040");
			m("string_0012");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("string_0041");
	n("string_0042");
	n("string_0043");
	m("string_0012");
	m("string_0044");

	Choose({
		"dinner_3_choice_5_entry_0000": function(message){
			n(message);
			m("string_0012");
			n("string_0012");
			n("string_0013");
			n("string_0045");
			m("string_0012");
			Threat_School();
		},
		"dinner_3_choice_5_entry_0001": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("string_0046");
				n("string_0047");
			}else{
				m("string_0048");
			}
			m("string_0049");
			Threat_Tutor();
		},
		"dinner_3_choice_5_entry_0002": function(message){
			n(message);
			m("string_0050");
			if($.lying_about_hanging_out){
				m("string_0046");
				n("string_0047");
			}
			m("string_0049");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){

	Show("nicky","dinner_nicky_defiant");

	n("string_0012");
	m("string_0051");

	Choose({
		"dinner_3_choice_6_entry_0000":function(message){
			n(message);
			m("string_0052");
			n("string_0012");
			m("string_0053");
			n("string_0012");
			n("string_0054");
			m("string_0055");
			Plot_Twist();
		},
		"dinner_3_choice_6_entry_0001": function(message){
			n(message);
			m("string_0056");
			n("string_0057");
			m("string_0058");
			n("string_0012");
			m("string_0055");
			Plot_Twist();
		},
		"dinner_3_choice_6_entry_0002": function(message){
			n(message);
			m("string_0059");
			m("string_0060");
			n("string_0061");
			m("string_0062");
			m("string_0063");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;

	m("string_0064");

	Show("nicky","dinner_nicky_outrage");

	n("string_0065");
	m("string_0066");
	n("string_0067");
	m("string_0068");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"dinner_3_choice_7_entry_0000": function(message){
			n(message);
			m("string_0069");
			m("string_0070");
			n("string_0012");
			Plot_Twist();
		},
		"dinner_3_choice_7_entry_0001": function(message){
			n(message);
			m("string_0069");
			m("string_0071");
			n("string_0012");
			Plot_Twist();
		},
		"dinner_3_choice_7_entry_0002": function(message){
			n(message);
			m("string_0069");
			m("string_0072");
			n("string_0012");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("string_0073");
	m("string_0074");

	Show("nicky","dinner_nicky_sit");
	n("string_0012");

	Show("clock_time","clock_1920");

	Choose({
		"dinner_3_choice_8_entry_0000": function(message){
			n(message);
			m("string_0075");
			Plot_Twist_2();
		},
		"dinner_3_choice_8_entry_0001": function(message){
			n(message);
			m("string_0076");
			m("string_0077");
			Plot_Twist_2();
		},
		"dinner_3_choice_8_entry_0002": function(message){
			n(message);
			m("string_0078");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n("string_0012");
	m("string_0079");

	// Dinner_1
	m("string_0080", tr('dinner_1', $.what_you_called_out));
	m("string_0081");
	m("string_0082");

	n("string_0012");

	if($.im_a_poet){
		m("string_0083");
	}
	if($.hippies){
		m("string_0084");
	}
	if($.im_a_poet || $.hippies){
		m("string_0085");
		m("string_0086");
	}

	Choose({
		"dinner_3_choice_9_entry_0000": function(message){
			n(message);
			m("string_0087");
			n("string_0088");
			m("string_0089");
			Plot_Twist_3();
		},
		"dinner_3_choice_9_entry_0001": function(message){
			n(message);
			m("string_0090");
			m("string_0091");
			Plot_Twist_3();
		},
		"dinner_3_choice_9_entry_0002": function(message){
			n(message);
			m("string_0092");
			m("string_0093");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
