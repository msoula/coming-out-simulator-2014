// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

    m("dinner_2");
    n("dinner_2");

	m("string_0003");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("string_0004");
			n("string_0005");
			break;
		case "wait":
			m("string_0006");
			n("string_0007");
			break;
		case "play":
			m("string_0008");
			n("string_0009");
			break;
	}

	m("string_0010");

	Choose({
		"dinner_2_choice_1_entry_0000": function(message){
			n(message);
			n("string_0011");
			m("string_0012");
			m("string_0013");
			Start_Dinner_2_1();
		},
		"dinner_2_choice_1_entry_0001": function(message){
			n(message);
			m("string_0014");
			n("string_0015");
			m("string_0012");
			n("string_0011");
			m("string_0016");
			Start_Dinner_2_1();
		},
		"dinner_2_choice_1_entry_0002": function(message){
			n(message);
			m("string_0017");
			n("string_0018");
			m("string_0019");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("string_0020");
	n("string_0021");
	m("string_0022");
	n("string_0023");

	Choose({
		"dinner_2_choice_2_entry_0000": function(message){
			$.studying_subject = "string_0000";
			Start_Dinner_2_2(message);
		},
		"dinner_2_choice_2_entry_0001": function(message){
			$.studying_subject = "string_0001";
			Start_Dinner_2_2(message);
		},
		"dinner_2_choice_2_entry_0002": function(message){
			$.studying_subject = "string_0002";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("string_0024");
	m("string_0025", tr('dinner_2', $.studying_subject));
	n("string_0012");
	m("string_0026");
	m("string_0027");
	n("string_0028");
	m("string_0029");
	m("string_0030");

	Choose({
		"dinner_2_choice_3_entry_0000": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"dinner_2_choice_3_entry_0001": function(message){

			$.relationship = "best friend";
			n(message);

			$.lying_about_hanging_out = true;
			m("string_0031");
			n("string_0032");
			m("string_0033");
			n("string_0034");
			m("string_0012");
			m("string_0035");
			n("string_0036");
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
		m("string_0037");
		n("string_0034");
		m("string_0012");
		m("string_0035");
		n("string_0036");
	}else{
		m("string_0038");
		n("string_0039");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("string_0040");
	m("string_0041");
	m("string_0042");
	$.lying_about_relationship = true;
	Choose({
		"dinner_2_choice_4_entry_0000": callback,
		"dinner_2_choice_4_entry_0001": callback,
		"dinner_2_choice_4_entry_0002": callback
	});
}

function Buddy_1_point_5(){

	m("string_0043");
	m("string_0044");

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
	m("string_0045");
	if($.lying_about_relationship){
		m("string_0046");
		n("string_0047");
		m("string_0012");
		m("string_0048");
	}
	m("string_0049");
	m("string_0050");
	m("string_0051");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("string_0052");
	n("string_0053");
	m("string_0054");
	m("string_0055");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("string_0056");
	n("string_0057");
	m("string_0058");
	m("string_0059");
	Choose({
		"dinner_2_choice_6_entry_0000": function(message){
			n(message);
			m("string_0060");
			m("string_0061");
			Buddy_Choice();
		},
		"dinner_2_choice_6_entry_0001": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("string_0045");
					m("string_0046");
					n("string_0047");
					m("string_0012");

					m("string_0062");
					n("string_0063");
					m("string_0064");
					m("string_0054");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("string_0065");
				m("string_0062");
				n("string_0063");
				m("string_0064");
				m("string_0054");
				Buddy_Choice();

			}

		},
		"dinner_2_choice_6_entry_0002": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("string_0066");
		m("string_0067");
	}
	if($.relationship=="best friend"){
		m("string_0068");
		m("string_0067");
	}
	Choose({
		"dinner_2_choice_7_entry_0000": function(message){
			n(message);
			m("string_0069");
			n("string_0007");
			Buddy_Aftermath();
		},
		"dinner_2_choice_7_entry_0001": function(message){
			n(message);
			m("string_0070");
			Buddy_Aftermath();
		},
		"dinner_2_choice_7_entry_0002": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("string_0045");
					m("string_0046");
					n("string_0047");
					m("string_0012");
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

	m("string_0071");
	m("string_0072");
	m("string_0073");
	m("string_0074");

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

	n("string_0075");
	n("string_0076");
	m("string_0077");
	n("string_0078");
	m("string_0079");
	m("string_0080");

	Show("nicky","dinner_nicky_sit");
	n("string_0012");
	n("string_0081");

	Choose({
		"dinner_2_choice_9_entry_0000": function(message){
			$.studying_subject_2 = "string_0002";
			Grades_Start(message);
		},
		"dinner_2_choice_9_entry_0001": function(message){
			$.studying_subject_2 = "string_0000";
			Grades_Start(message);
		},
		"dinner_2_choice_9_entry_0002": function(message){
			$.studying_subject_2 = "string_0001";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m("string_0012");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("string_0082", tr('dinner_2', $.studying_subject));
	m("string_0083", tr('dinner_2', $.studying_subject_2));
	$.lying_about_studying = true;
	n("string_0084");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("string_0085");
		n("string_0086");
	}
	m("string_0087");
	n("string_0012");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("string_0088");
	n("string_0089");
	m("string_0045");
	if($.lying_about_hanging_out){
		m("string_0090");
		n("string_0091");
	}
	m("string_0012");
	m("string_0092", tr('dinner_2', $.studying_subject_2));
	n("string_0012");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
