// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("dinner_2_dialog_0000");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("dinner_2_dialog_0001");
			n("dinner_2_dialog_0002");
			break;
		case "wait":
			m("dinner_2_dialog_0003");
			n("dinner_2_dialog_0004");
			break;
		case "play":
			m("dinner_2_dialog_0005");
			n("dinner_2_dialog_0006");
			break;
	}

	m("dinner_2_dialog_0007");

	Choose({
		"dinner_2_choice_1_entry_0000": function(message){
			n(message);
			n("dinner_2_dialog_0008");
			m("dinner_2_dialog_0009");
			m("dinner_2_dialog_0010");
			Start_Dinner_2_1();
		},
		"dinner_2_choice_1_entry_0001": function(message){
			n(message);
			m("dinner_2_dialog_0011");
			n("dinner_2_dialog_0012");
			m("dinner_2_dialog_0009");
			n("dinner_2_dialog_0008");
			m("dinner_2_dialog_0013");
			Start_Dinner_2_1();
		},
		"dinner_2_choice_1_entry_0002": function(message){
			n(message);
			m("dinner_2_dialog_0014");
			n("dinner_2_dialog_0015");
			m("dinner_2_dialog_0016");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("dinner_2_dialog_0017");
	n("dinner_2_dialog_0018");
	m("dinner_2_dialog_0019");
	n("dinner_2_dialog_0020");

	Choose({
		"dinner_2_choice_2_entry_0000": function(message){
			$.studying_subject = "dinner_2_dialog_param_0000";
			Start_Dinner_2_2(message);
		},
		"dinner_2_choice_2_entry_0001": function(message){
			$.studying_subject = "dinner_2_dialog_param_0001";
			Start_Dinner_2_2(message);
		},
		"dinner_2_choice_2_entry_0002": function(message){
			$.studying_subject = "dinner_2_dialog_param_0002";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("dinner_2_dialog_0021");
	m("dinner_2_dialog_0022", $.studying_subject);
	n("dinner_2_dialog_0009");
	m("dinner_2_dialog_0023");
	m("dinner_2_dialog_0024");
	n("dinner_2_dialog_0025");
	m("dinner_2_dialog_0026");
	m("dinner_2_dialog_0027");

	Choose({
		"dinner_2_choice_3_entry_0000": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"dinner_2_choice_3_entry_0001": function(message){

			$.relationship = "best friend";
			n(message);

			$.lying_about_hanging_out = true;
			m("dinner_2_dialog_0028");
			n("dinner_2_dialog_0029");
			m("dinner_2_dialog_0030");
			n("dinner_2_dialog_0031");
			m("dinner_2_dialog_0009");
			m("dinner_2_dialog_0032");
			n("dinner_2_dialog_0033");
			Buddy_1_point_5();
		},
		"dinner_2_choice_3_entry_0002": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		m("dinner_2_dialog_0034");
		n("dinner_2_dialog_0031");
		m("dinner_2_dialog_0009");
		m("dinner_2_dialog_0032");
		n("dinner_2_dialog_0033");
	}else{
		m("dinner_2_dialog_0035");
		n("dinner_2_dialog_0036");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("dinner_2_dialog_0037");
	m("dinner_2_dialog_0038");
	m("dinner_2_dialog_0039");
	$.lying_about_relationship = true;
	Choose({
		"dinner_2_choice_4_entry_0000": callback,
		"dinner_2_choice_4_entry_0001": callback,
		"dinner_2_choice_4_entry_0002": callback
	});
}

function Buddy_1_point_5(){

	m("dinner_2_dialog_0040");
	m("dinner_2_dialog_0041");

	Choose({
		"dinner_2_choice_5_entry_0000": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"dinner_2_choice_5_entry_0001": Buddy_4,
		"dinner_2_choice_5_entry_0002": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("dinner_2_dialog_0042");
	if($.lying_about_relationship){
		m("dinner_2_dialog_0043");
		n("dinner_2_dialog_0044");
		m("dinner_2_dialog_0009");
		m("dinner_2_dialog_0045");
	}
	m("dinner_2_dialog_0046");
	m("dinner_2_dialog_0047");
	m("dinner_2_dialog_0048");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("dinner_2_dialog_0049");
	n("dinner_2_dialog_0050");
	m("dinner_2_dialog_0051");
	m("dinner_2_dialog_0052");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("dinner_2_dialog_0053");
	n("dinner_2_dialog_0054");
	m("dinner_2_dialog_0055");
	m("dinner_2_dialog_0056");
	Choose({
		"dinner_2_choice_6_entry_0000": function(message){
			n(message);
			m("dinner_2_dialog_0057");
			m("dinner_2_dialog_0058");
			Buddy_Choice();
		},
		"dinner_2_choice_6_entry_0001": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("dinner_2_dialog_0042");
					m("dinner_2_dialog_0043");
					n("dinner_2_dialog_0044");
					m("dinner_2_dialog_0009");

					m("dinner_2_dialog_0059");
					n("dinner_2_dialog_0060");
					m("dinner_2_dialog_0061");
					m("dinner_2_dialog_0051");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("dinner_2_dialog_0062");
				m("dinner_2_dialog_0059");
				n("dinner_2_dialog_0060");
				m("dinner_2_dialog_0061");
				m("dinner_2_dialog_0051");
				Buddy_Choice();

			}

		},
		"dinner_2_choice_6_entry_0002": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("dinner_2_dialog_0063");
		m("dinner_2_dialog_0064");
	}
	if($.relationship=="best friend"){
		m("dinner_2_dialog_0065");
		m("dinner_2_dialog_0064");
	}
	Choose({
		"dinner_2_choice_7_entry_0000": function(message){
			n(message);
			m("dinner_2_dialog_0066");
			n("dinner_2_dialog_0004");
			Buddy_Aftermath();
		},
		"dinner_2_choice_7_entry_0001": function(message){
			n(message);
			m("dinner_2_dialog_0067");
			Buddy_Aftermath();
		},
		"dinner_2_choice_7_entry_0002": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("dinner_2_dialog_0042");
					m("dinner_2_dialog_0043");
					n("dinner_2_dialog_0044");
					m("dinner_2_dialog_0009");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}

		}
	});
}


function Buddy_Aftermath(){

	m("dinner_2_dialog_0068");
	m("dinner_2_dialog_0069");
	m("dinner_2_dialog_0070");
	m("dinner_2_dialog_0071");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"dinner_2_choice_8_entry_0000": Buddy_Aftermath_2,
		"dinner_2_choice_8_entry_0001": Buddy_Aftermath_2,
		"dinner_2_choice_8_entry_0002": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){

	n(message);

	n("dinner_2_dialog_0072");
	n("dinner_2_dialog_0073");
	m("dinner_2_dialog_0074");
	n("dinner_2_dialog_0075");
	m("dinner_2_dialog_0076");
	m("dinner_2_dialog_0077");

	Show("nicky","dinner_nicky_sit");
	n("dinner_2_dialog_0009");
	n("dinner_2_dialog_0078");

	Choose({
		"dinner_2_choice_9_entry_0000": function(message){
			$.studying_subject_2 = "dinner_2_dialog_param_0002";
			Grades_Start(message);
		},
		"dinner_2_choice_9_entry_0001": function(message){
			$.studying_subject_2 = "dinner_2_dialog_param_0000";
			Grades_Start(message);
		},
		"dinner_2_choice_9_entry_0002": function(message){
			$.studying_subject_2 = "dinner_2_dialog_param_0001";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m("dinner_2_dialog_0009");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("dinner_2_dialog_0079", $.studying_subject);
	m("dinner_2_dialog_0080", $.studying_subject_2);
	$.lying_about_studying = true;
	n("dinner_2_dialog_0081");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("dinner_2_dialog_0082");
		n("dinner_2_dialog_0083");
	}
	m("dinner_2_dialog_0084");
	n("dinner_2_dialog_0009");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("dinner_2_dialog_0085");
	n("dinner_2_dialog_0086");
	m("dinner_2_dialog_0042");
	if($.lying_about_hanging_out){
		m("dinner_2_dialog_0087");
		n("dinner_2_dialog_0088");
	}
	m("dinner_2_dialog_0009");
	m("dinner_2_dialog_0089", $.studying_subject_2);
	n("dinner_2_dialog_0009");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
