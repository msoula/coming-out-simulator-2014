// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n("dinner_4_dialog_0000");
	m("dinner_4_dialog_0001");
	m("dinner_4_dialog_0002");

	Choose({
		"dinner_4_choice_1_entry_0000": function(message){
			n(message);
			m("dinner_4_dialog_0003");
			My_Fault();
		},
		"dinner_4_choice_1_entry_0001": function(message){
			n(message);
			m("dinner_4_dialog_0004");
			My_Fault();
		},
		"dinner_4_choice_1_entry_0002": function(message){
			n(message);
			m("dinner_4_dialog_0005");
			My_Fault();
		}
	});

}

function My_Fault(){

	Show("clock_time","clock_1930");

	n("dinner_4_dialog_0000");
	m("dinner_4_dialog_0006");
	m("dinner_4_dialog_0007");

	Show("mom","mom_cry");

	m("dinner_4_dialog_0008");
	m("dinner_4_dialog_0009");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"dinner_4_choice_2_entry_0000": Cry_1,
		"dinner_4_choice_2_entry_0001": Cry_2,
		"dinner_4_choice_2_entry_0002": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("dinner_4_dialog_0010");
	n("dinner_4_dialog_0011");
	m("dinner_4_dialog_0012");
	n("dinner_4_dialog_0013");
	m("dinner_4_dialog_0014");
	n("dinner_4_dialog_0015");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("dinner_4_dialog_0010");
	n("dinner_4_dialog_0016");
	m("dinner_4_dialog_0012");
	n("dinner_4_dialog_0017");
	m("dinner_4_dialog_0014");
	n("dinner_4_dialog_0018");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("dinner_4_dialog_0019");
	m("dinner_4_dialog_0010");
	n("dinner_4_dialog_0020");
	m("dinner_4_dialog_0012");
	n("dinner_4_dialog_0021");
	m("dinner_4_dialog_0014");

	Show("nicky","dinner_nicky_defiant");
	n("dinner_4_dialog_0022");
	What_Are_You();

}

function What_Are_You(){

	m("dinner_4_dialog_0000");
	m("dinner_4_dialog_0023");
	n("dinner_4_dialog_0024");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("dinner_4_dialog_0025");

	Choose({
		"dinner_4_choice_3_entry_0000": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("dinner_4_dialog_0026");
			}
			n("dinner_4_dialog_0027");
			m("dinner_4_dialog_0028");
			m("dinner_4_dialog_0029");
			n("dinner_4_dialog_0030");
			Have_You_Had_Sex();

		},
		"dinner_4_choice_3_entry_0001": function(message){

			$.what_are_you = "confused";

			n(message);
			m("dinner_4_dialog_0031");
			m("dinner_4_dialog_0032");
			m("dinner_4_dialog_0033");
			n("dinner_4_dialog_0000");
			m("dinner_4_dialog_0034");
			Have_You_Had_Sex();

		},
		"dinner_4_choice_3_entry_0002": function(message){

			$.what_are_you = "son";

			n(message);
			n("dinner_4_dialog_0000");
			n("dinner_4_dialog_0035");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m("dinner_4_dialog_0000");
	m("dinner_4_dialog_0036");
	Choose({
		"dinner_4_choice_4_entry_0000": function(message){
			n(message);
			m("dinner_4_dialog_0037");
			Have_You_Had_Sex_2();
		},
		"dinner_4_choice_4_entry_0001": function(message){
			n(message);
			m("dinner_4_dialog_0038");
			n("dinner_4_dialog_0039");
			m("dinner_4_dialog_0040");
			Have_You_Had_Sex_2();
		},
		"dinner_4_choice_4_entry_0002": function(message){
			n(message);
			m("dinner_4_dialog_0041");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n("dinner_4_dialog_0000");
	m("dinner_4_dialog_0042");

	Show("nicky","dinner_nicky_outrage");

	n("dinner_4_dialog_0043");
	n("dinner_4_dialog_0044");
	m("dinner_4_dialog_0045");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"dinner_4_choice_5_entry_0000":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"dinner_4_choice_5_entry_0001":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("dinner_4_dialog_0046");
			m("dinner_4_dialog_0047");
			m("dinner_4_dialog_0048");
			Throw_Up();
		},
		"dinner_4_choice_5_entry_0002":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"what.": Father_Soon,
		"whaaat.": Father_Soon,
		"whaaaaaaaaaaaaaaat.": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m("dinner_4_dialog_0000");
	m("dinner_4_dialog_0049");
	n("dinner_4_dialog_0050");
	m("dinner_4_dialog_0051");
	m("dinner_4_dialog_0052");
	m("dinner_4_dialog_0053");
	n("dinner_4_dialog_0000");

	m("dinner_4_dialog_0054");

	switch($.what_are_you){
		case "bisexual":
			m("dinner_4_dialog_0055");
			break;
		case "confused":
			m("dinner_4_dialog_0056");
			break;
		case "son":
			m("dinner_4_dialog_0057");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("dinner_4_dialog_0058");
			break;
		case "bottom":
			m("dinner_4_dialog_0059");
			break;
		case "versatile":
			m("dinner_4_dialog_0060");
			break;
	}

	m("dinner_4_dialog_0061");

	Choose({
		"dinner_4_choice_6_entry_0000": function(message){
			$.promise_silence = "yes";

			n(message);
			m("dinner_4_dialog_0062");
			m("dinner_4_dialog_0000");
			m("dinner_4_dialog_0063");
			Father_Soon_2();
		},
		"dinner_4_choice_6_entry_0001": function(message){
			$.promise_silence = "no";

			n(message);
			m("dinner_4_dialog_0064");
			m("dinner_4_dialog_0065");
			Father_Soon_2();
		},
		"dinner_4_choice_6_entry_0002": function(message){
			$.promise_silence = "tit for tat";

			n(message);
			m("dinner_4_dialog_0066");
			n("dinner_4_dialog_0067");
			m("dinner_4_dialog_0068");
			m("dinner_4_dialog_0069");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
