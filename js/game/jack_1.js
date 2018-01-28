// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){

	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("jack_1_dialog_0000");
	j("jack_1_dialog_0001");
	j("jack_1_dialog_0002");
	n("jack_1_dialog_0003");
	n("jack_1_dialog_0004");
	j("jack_1_dialog_0005");
	j("jack_1_dialog_0006");

	Choose({
		"jack_1_choice_1_entry_0000": Inception_Dream,
		"jack_1_choice_1_entry_0001": Inception_Awake,
		"jack_1_choice_1_entry_0002": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("jack_1_dialog_0007");
	n("jack_1_dialog_0008");
	j("jack_1_dialog_0009");

	Choose({
		"jack_1_choice_2_entry_0000": Sadsack,
		"jack_1_choice_2_entry_0001": function(message){
			$.im_a_poet = true;

			n(message);
			j("jack_1_dialog_0010");
			n("jack_1_dialog_0011");
			n("jack_1_dialog_0012");
			j("jack_1_dialog_0013");
			n("jack_1_dialog_0014");
			Thanks();
		},
		"jack_1_choice_2_entry_0002": function(message){
			$.hippies = true;

			n(message);
			j("jack_1_dialog_0015");
			n("jack_1_dialog_0016");
			n("jack_1_dialog_0014");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("jack_1_dialog_0017");
	n("jack_1_dialog_0018");
	j("jack_1_dialog_0010");
	j("jack_1_dialog_0019");

	Choose({
		"jack_1_choice_3_entry_0000": function(message){
			n(message);
			Thanks();
		},
		"jack_1_choice_3_entry_0001": function(message){
			n(message);
			j("jack_1_dialog_0020");
			n("jack_1_dialog_0021");
			n("jack_1_dialog_0014");
			Thanks();
		},
		"jack_1_choice_3_entry_0002": function(message){
			n(message);
			j("jack_1_dialog_0022");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("jack_1_dialog_0023");
	n("jack_1_dialog_0024");
	n("jack_1_dialog_0025");
	n("jack_1_dialog_0026");
	j("jack_1_dialog_0027");

	Choose({
		"jack_1_choice_4_entry_0000": function(message){

			$.im_a_poet = true;

			n("jack_1_dialog_0028");
			n("jack_1_dialog_0029");
			j("jack_1_dialog_0030");
			n("jack_1_dialog_0031");
			n("jack_1_dialog_0014");
			Thanks();

		},
		"jack_1_choice_4_entry_0001": Sadsack,
		"jack_1_choice_4_entry_0002":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("jack_1_dialog_0032");
			j("jack_1_dialog_0033");
			n("jack_1_dialog_0034");
			n("jack_1_dialog_0014");
			Thanks();

		}
	});

}

function Sadsack(message){

	$.sadsack = true;

	n(message);
	j("jack_1_dialog_0035");
	j("jack_1_dialog_0036");
	n("jack_1_dialog_0037");
	Thanks();

}

function Thanks(){

	n("jack_1_dialog_0038");
	j("jack_1_dialog_0039");
	j("jack_1_dialog_0040");
	n("jack_1_dialog_0041");
	n("jack_1_dialog_0042");

	j("jack_1_dialog_0043");
	n("jack_1_dialog_0044");

	j("jack_1_dialog_0045");
	n("jack_1_dialog_0046");

	j("jack_1_dialog_0047");
	n("jack_1_dialog_0048");

	Choose({
		"jack_1_choice_5_entry_0000": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("jack_1_dialog_0049");
			Hiding();
		},
		"jack_1_choice_5_entry_0001": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"jack_1_choice_5_entry_0002": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("jack_1_dialog_0050");
			Hiding();
		}
	});

}

function Hiding(){

	j("jack_1_dialog_0051");

	if($.inception_answer=="awake"){
		j("jack_1_dialog_0052");
	}
	if($.inception_answer=="dream"){
		j("jack_1_dialog_0053");
	}

	if($.sadsack){
		j("jack_1_dialog_0054");
		j("jack_1_dialog_0055");
	}

	n("jack_1_dialog_0056");
	j("jack_1_dialog_0057");
	if($.hippies){
		n("jack_1_dialog_0058");
		n("jack_1_dialog_0059");
		n("jack_1_dialog_0060");
		j("jack_1_dialog_0061");
		n("jack_1_dialog_0062");
		j("jack_1_dialog_0063");
	}else{
		j("jack_1_dialog_0064");
	}

	j("jack_1_dialog_0065");
	j("jack_1_dialog_0066");

	Choose({
		"jack_1_choice_6_entry_0000": Hiding_2,
		"jack_1_choice_6_entry_0001": Hiding_2,
		"jack_1_choice_6_entry_0002": Hiding_2
	});

}

function Hiding_2(message){

	n(message);

	if($.coming_out_readiness=="no"){
		n("jack_1_dialog_0067");
	}

	j("jack_1_dialog_0068");
	j("jack_1_dialog_0069");
	j("jack_1_dialog_0070");

	n("jack_1_dialog_0071");

	j("jack_1_dialog_0072");
	j("jack_1_dialog_0073");

	if($.im_a_poet){
		n("jack_1_dialog_0074");
	}else{
		n("jack_1_dialog_0075");
	}

	if($.coming_out_readiness=="yes"){
		j("jack_1_dialog_0076");
		j("jack_1_dialog_0077");
	}else{
		j("jack_1_dialog_0078");
	}
	j("jack_1_dialog_0079");

	Choose({
		"jack_1_choice_7_entry_0000": Hiding_3,
		"jack_1_choice_7_entry_0001": Hiding_3,
		"jack_1_choice_7_entry_0002": Hiding_3
	});

}

function Hiding_3(message){

	n(message);
	j("jack_1_dialog_0080");
	n("jack_1_dialog_0081");
	n("jack_1_dialog_0082");
	n("jack_1_dialog_0083");
	j("jack_1_dialog_0080");
	n("jack_1_dialog_0084");

	j("jack_1_dialog_0085");
	n("jack_1_dialog_0086");
	j("jack_1_dialog_0087");
	switch($.inception_answer){
		case "dream": j("jack_1_dialog_0088"); break;
		case "awake": j("jack_1_dialog_0089"); break;
		case "neither": j("jack_1_dialog_0090"); break;
	}
	n("jack_1_dialog_0091");
	j("jack_1_dialog_0092");
	if($.coming_out_readiness=="maybe"){
		j("jack_1_dialog_0093");
	}
	j("jack_1_dialog_0094");

	var insult = "";
	if($.hippies) insult+="jack_1_dialog_param_0000";
	if($.im_a_poet) insult+="jack_1_dialog_param_0001";
	n("jack_1_dialog_0095");
	if(insult!=""){
		n("jack_1_dialog_0096", insult);
	}else{
		n("jack_1_dialog_0097");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
