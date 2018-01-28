// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){

	/////// SET UP SCENE ////////

    j("jack_1");
    n("jack_1");

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("string_0000");
	j("string_0001");
	j("string_0002");
	n("string_0003");
	n("string_0004");
	j("string_0005");
	j("string_0006");

	Choose({
		"jack_1_choice_1_entry_0000": Inception_Dream,
		"jack_1_choice_1_entry_0001": Inception_Awake,
		"jack_1_choice_1_entry_0002": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("string_0007");
	n("string_0008");
	j("string_0009");

	Choose({
		"jack_1_choice_2_entry_0000": Sadsack,
		"jack_1_choice_2_entry_0001": function(message){
			$.im_a_poet = true;

			n(message);
			j("string_0010");
			n("string_0011");
			n("string_0012");
			j("string_0013");
			n("string_0014");
			Thanks();
		},
		"jack_1_choice_2_entry_0002": function(message){
			$.hippies = true;

			n(message);
			j("string_0015");
			n("string_0016");
			n("string_0014");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("string_0017");
	n("string_0018");
	j("string_0010");
	j("string_0019");

	Choose({
		"jack_1_choice_3_entry_0000": function(message){
			n(message);
			Thanks();
		},
		"jack_1_choice_3_entry_0001": function(message){
			n(message);
			j("string_0020");
			n("string_0021");
			n("string_0014");
			Thanks();
		},
		"jack_1_choice_3_entry_0002": function(message){
			n(message);
			j("string_0022");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("string_0023");
	n("string_0024");
	n("string_0025");
	n("string_0026");
	j("string_0027");

	Choose({
		"jack_1_choice_4_entry_0000": function(message){

			$.im_a_poet = true;

			n("string_0028");
			n("string_0029");
			j("string_0030");
			n("string_0031");
			n("string_0014");
			Thanks();

		},
		"jack_1_choice_4_entry_0001": Sadsack,
		"jack_1_choice_4_entry_0002":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("string_0032");
			j("string_0033");
			n("string_0034");
			n("string_0014");
			Thanks();

		}
	});

}

function Sadsack(message){

	$.sadsack = true;

	n(message);
	j("string_0035");
	j("string_0036");
	n("string_0037");
	Thanks();

}

function Thanks(){

	n("string_0038");
	j("string_0039");
	j("string_0040");
	n("string_0041");
	n("string_0042");

	j("string_0043");
	n("string_0044");

	j("string_0045");
	n("string_0046");

	j("string_0047");
	n("string_0048");

	Choose({
		"jack_1_choice_5_entry_0000": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("string_0049");
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
			j("string_0050");
			Hiding();
		}
	});

}

function Hiding(){

	j("string_0051");

	if($.inception_answer=="awake"){
		j("string_0052");
	}
	if($.inception_answer=="dream"){
		j("string_0053");
	}

	if($.sadsack){
		j("string_0054");
		j("string_0055");
	}

	n("string_0056");
	j("string_0057");
	if($.hippies){
		n("string_0058");
		n("string_0059");
		n("string_0060");
		j("string_0061");
		n("string_0062");
		j("string_0063");
	}else{
		j("string_0064");
	}

	j("string_0065");
	j("string_0066");

	Choose({
		"jack_1_choice_6_entry_0000": Hiding_2,
		"jack_1_choice_6_entry_0001": Hiding_2,
		"jack_1_choice_6_entry_0002": Hiding_2
	});

}

function Hiding_2(message){

	n(message);

	if($.coming_out_readiness=="no"){
		n("string_0067");
	}

	j("string_0068");
	j("string_0069");
	j("string_0070");

	n("string_0071");

	j("string_0072");
	j("string_0073");

	if($.im_a_poet){
		n("string_0074");
	}else{
		n("string_0075");
	}

	if($.coming_out_readiness=="yes"){
		j("string_0076");
		j("string_0077");
	}else{
		j("string_0078");
	}
	j("string_0079");

	Choose({
		"jack_1_choice_7_entry_0000": Hiding_3,
		"jack_1_choice_7_entry_0001": Hiding_3,
		"jack_1_choice_7_entry_0002": Hiding_3
	});

}

function Hiding_3(message){

	n(message);
	j("string_0080");
	n("string_0081");
	n("string_0082");
	n("string_0083");
	j("string_0080");
	n("string_0084");

	j("string_0085");
	n("string_0086");
	j("string_0087");
	switch($.inception_answer){
		case "dream": j("string_0088"); break;
		case "awake": j("string_0089"); break;
		case "neither": j("string_0090"); break;
	}
	n("string_0091");
	j("string_0092");
	if($.coming_out_readiness=="maybe"){
		j("string_0093");
	}
	j("string_0094");

	var insult = "";
	if($.hippies) insult+="string_0095";
	if($.im_a_poet) insult+="string_0096";
	n("string_0097");
	if(insult!=""){
		n("string_0098", tr('jack_1', insult));
	}else{
		n("string_0099");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
