function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("dinner_1_dialog_0000");
	n("dinner_1_dialog_0001");

	Choose({
		"dinner_1_choice_1_entry_0000": Waiting_1,
		"dinner_1_choice_1_entry_0001": Waiting_1,
		"dinner_1_choice_1_entry_0002": Waiting_1
	});

}

function Waiting_1(message){

	$.what_you_called_out = message;
	n(message);

	n("dinner_1_dialog_0001");

	Choose({
		"dinner_1_choice_2_entry_0000": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"dinner_1_choice_2_entry_0001": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"dinner_1_choice_2_entry_0002": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){

	n(message);
	n("dinner_1_dialog_0001");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"dinner_1_choice_3_entry_0000": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("dinner_1_dialog_0002");
			}else{
				m("dinner_1_dialog_0003");
			}

			Show("nicky","dinner_nicky_sit");
			n("dinner_1_dialog_0004");

			Waiting_End();
		},
		"dinner_1_choice_3_entry_0001": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("dinner_1_dialog_0005");

			Show("nicky","dinner_nicky_sit");
			n("dinner_1_dialog_0006");

			Waiting_End();
		},
		"dinner_1_choice_3_entry_0002": function(message){

			n("dinner_1_dialog_0007");
			n("dinner_1_dialog_0008");

			Show("nicky","dinner_nicky_outrage");
			n("dinner_1_dialog_0009");

			Show("mom","mom_stand");

			m("dinner_1_dialog_0010");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("dinner_1_dialog_0011");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}
