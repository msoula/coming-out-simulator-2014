// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

    m("dinner_4");
    n("dinner_4");

	n("string_0000");
	m("string_0001");
	m("string_0002");

	Choose({
		"dinner_4_choice_1_entry_0000": function(message){
			n(message);
			m("string_0003");
			My_Fault();
		},
		"dinner_4_choice_1_entry_0001": function(message){
			n(message);
			m("string_0004");
			My_Fault();
		},
		"dinner_4_choice_1_entry_0002": function(message){
			n(message);
			m("string_0005");
			My_Fault();
		}
	});

}

function My_Fault(){

	Show("clock_time","clock_1930");

	n("string_0000");
	m("string_0006");
	m("string_0007");

	Show("mom","mom_cry");

	m("string_0008");
	m("string_0009");

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
	m("string_0010");
	n("string_0011");
	m("string_0012");
	n("string_0013");
	m("string_0014");
	n("string_0015");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("string_0010");
	n("string_0016");
	m("string_0012");
	n("string_0017");
	m("string_0014");
	n("string_0018");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("string_0019");
	m("string_0010");
	n("string_0020");
	m("string_0012");
	n("string_0021");
	m("string_0014");

	Show("nicky","dinner_nicky_defiant");
	n("string_0022");
	What_Are_You();

}

function What_Are_You(){

	m("string_0000");
	m("string_0023");
	n("string_0024");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("string_0025");

	Choose({
		"dinner_4_choice_3_entry_0000": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("string_0026");
			}
			n("string_0027");
			m("string_0028");
			m("string_0029");
			n("string_0030");
			Have_You_Had_Sex();

		},
		"dinner_4_choice_3_entry_0001": function(message){

			$.what_are_you = "confused";

			n(message);
			m("string_0031");
			m("string_0032");
			m("string_0033");
			n("string_0000");
			m("string_0034");
			Have_You_Had_Sex();

		},
		"dinner_4_choice_3_entry_0002": function(message){

			$.what_are_you = "son";

			n(message);
			n("string_0000");
			n("string_0035");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m("string_0000");
	m("string_0036");
	Choose({
		"dinner_4_choice_4_entry_0000": function(message){
			n(message);
			m("string_0037");
			Have_You_Had_Sex_2();
		},
		"dinner_4_choice_4_entry_0001": function(message){
			n(message);
			m("string_0038");
			n("string_0039");
			m("string_0040");
			Have_You_Had_Sex_2();
		},
		"dinner_4_choice_4_entry_0002": function(message){
			n(message);
			m("string_0041");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n("string_0000");
	m("string_0042");

	Show("nicky","dinner_nicky_outrage");

	n("string_0043");
	n("string_0044");
	m("string_0045");

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
			m("string_0046");
			m("string_0047");
			m("string_0048");
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

	m("string_0000");
	m("string_0049");
	n("string_0050");
	m("string_0051");
	m("string_0052");
	m("string_0053");
	n("string_0000");

	m("string_0054");

	switch($.what_are_you){
		case "bisexual":
			m("string_0055");
			break;
		case "confused":
			m("string_0056");
			break;
		case "son":
			m("string_0057");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("string_0058");
			break;
		case "bottom":
			m("string_0059");
			break;
		case "versatile":
			m("string_0060");
			break;
	}

	m("string_0061");

	Choose({
		"dinner_4_choice_6_entry_0000": function(message){
			$.promise_silence = "yes";

			n(message);
			m("string_0062");
			m("string_0000");
			m("string_0063");
			Father_Soon_2();
		},
		"dinner_4_choice_6_entry_0001": function(message){
			$.promise_silence = "no";

			n(message);
			m("string_0064");
			m("string_0065");
			Father_Soon_2();
		},
		"dinner_4_choice_6_entry_0002": function(message){
			$.promise_silence = "tit for tat";

			n(message);
			m("string_0066");
			n("string_0067");
			m("string_0068");
			m("string_0069");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
