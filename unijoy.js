var activeta; //active text area
var unijoy = new Array();
// unijoy bangla numbers
unijoy['0'] = '\u09e6'; //'০'; 
unijoy['1'] = '\u09e7'; //'১';
unijoy['2'] = '\u09e8'; //'২';
unijoy['3'] = '\u09e9'; //'৩';
unijoy['4'] = '\u09ea'; //'৪';
unijoy['5'] = '\u09eb'; //'৫';
unijoy['6'] = '\u09ec'; //'৬';
unijoy['7'] = '\u09ed'; //'৭';
unijoy['8'] = '\u09ee'; //'৮';
unijoy['9'] = '\u09ef'; //'৯';
// unijoy bangla equivalents
unijoy['j'] = '\u0995'; // ko
unijoy['d'] = '\u09BF'; // hrossho i kar
unijoy['gd'] = '\u0987'; // hrossho i
unijoy['D'] = '\u09C0'; // dirgho i kar
unijoy['gD'] = '\u0988'; // dirgho i
unijoy['c'] = '\u09C7'; // e kar
unijoy['gc'] = '\u098F'; // E
unijoy['gs'] = '\u0989'; // hrossho u
unijoy['s'] = '\u09C1'; // hrossho u kar
unijoy['S'] = '\u09C2'; // dirgho u kar
unijoy['gS'] = '\u098A'; // dirgho u
unijoy['v'] = '\u09B0'; // ro
unijoy['a'] = '\u098B'; // wri
unijoy['f'] = '\u09BE'; // a kar
unijoy['gf'] = '\u0986'; //shore a
unijoy['F'] = '\u0985'; // shore ao
//unijoy['ao']='\u0985'; // shore o
unijoy['n'] = '\u09B8'; // dontyo so
unijoy['t'] = '\u099f'; // to
unijoy['J'] = '\u0996'; // Kho
//unijoy['kh'] = '\u0996'; // kho
unijoy['b'] = '\u09A8'; // dontyo no
unijoy['B'] = '\u09A3'; // murdhonyo no
unijoy['k'] = '\u09A4'; // tto
unijoy['K'] = '\u09A5'; // ttho
unijoy['e'] = '\u09A1'; // ddo
unijoy['E'] = '\u09A2'; // ddho
unijoy['h'] = '\u09AC'; // bo
unijoy['H'] = '\u09AD'; // bho
//unijoy['v']='\u09AD'; // bho
//unijoy['rh']='o';	 // doye bindu ro
unijoy['p'] = '\u09DC';	// doye bindu ro
unijoy['P'] ='\u09DD'; // dhoye bindu ro
unijoy['o'] ='\u0997'; // go
unijoy['O'] ='\u0998'; // gho
//unijoy['gh']='\u0998'; // gho
unijoy['i'] ='\u09B9'; // ho
unijoy['I'] ='\u099E'; // yo
unijoy['u'] ='\u099C'; // borgio jo
unijoy['U'] ='\u099D'; // jho
//unijoy['jh']='\u099D'; // jho
unijoy['y'] ='\u099A'; //  cho
unijoy['Y'] ='\u099B'; // cho
//unijoy['C']='\u099B'; // ccho
unijoy['T'] ='\u09A0'; // tho
unijoy['r'] ='\u09AA'; // po
unijoy['R'] ='\u09AB'; // fo
//unijoy['ph']='\u09AB'; // fo
unijoy['l'] ='\u09A6'; // do
unijoy['L'] ='\u09A7'; // dho
unijoy['w'] ='\u09AF'; // ontoshyo zo
unijoy['W'] ='\u09DF'; // ontostho yo
unijoy['q'] ='\u0999'; // Uma
unijoy['Q'] ='\u0982'; // uniswor
unijoy['V'] ='\u09B2'; // lo
unijoy['m'] ='\u09AE'; // mo
unijoy['M'] ='\u09B6'; // talobyo sho
unijoy['N'] ='\u09B7'; // mordhonyo sho
unijoy['gx'] = '\u0993'; //'\u09CB'; // o
unijoy['X'] ='\u09CC'; // ou kar
unijoy['gX'] ='\u0994'; // OU
//unijoy['Ou']='\u0994'; // OU
unijoy['gC'] = '\u0990'; // Oi
unijoy['\\'] = '\u0983'; // khandaTa
unijoy['|'] = '\u09CE'; // bisworgo
unijoy["G"] = "\u0964"; // dari
//unijoy[".."] = "."; // fullstop
unijoy['g'] = ' ';//'\u09CD' + '\u200c'; // hosonto
unijoy['&'] = '\u0981'; // chondrobindu
unijoy['Z'] = '\u09CD'+'\u09AF'; // jo fola
unijoy['gh'] = '\u09CD'+ '\u09AC'; // bo fola
unijoy['ga'] = '\u098B'; // wri kar
unijoy['a'] = '\u09C3'; // wri 
//unijoy['k'] ="\u0995"  + '\u09CD'+ '\u09B8';
unijoy['vZ'] = unijoy['v']+ '\u200C'+ '\u09CD'+'\u09AF';
unijoy['z'] = '\u09CD'+ unijoy['v'];
unijoy['x'] = '\u09CB';
unijoy['C'] = '\u09C8'; //Oi Kar

var carry = '';
var old_len = 0;
var ctrlPressed = false;
var first_letter = false;
var lastInserted;

isIE = document.all ? 1 : 0;
var switched = false;

function checkKeyDown(ev) {
	var e = (window.event) ? event.keyCode : ev.which;
	if (e == '17') {
		ctrlPressed = true;
	}
}
function checkKeyUp(ev) {
	var e = (window.event) ? event.keyCode : ev.which;
	if (e == '17') {
        ctrlPressed = false;
	}
}
function parseunijoy(evnt) {
	// main unijoy parser
	var t = document.getElementById(activeta);
	var e = (window.event) ? event.keyCode : evnt.which;
	if (e == '113') {
		//switch the keyboard mode
		if (ctrlPressed) {
			switched = !switched;
			return true;
		}
	}
	if (switched) return true;
	if (ctrlPressed) {
		e = 0; 
	}
	var char_e = String.fromCharCode(e);
	if (e == 8 || e == 32) {
		carry = " ";	
		old_len = 1;
		return;
	}
	lastcarry = carry;
	carry += "" + char_e;
	bangla = parseunijoyCarry(carry);
	tempBangla = parseunijoyCarry(char_e);
	if (tempBangla == ".." || bangla == "..") {
		return false;
	}
	if (char_e=="g") {
		if (carry=="gg") {
			insertConjunction('\u09CD' + '\u200c',old_len);
			old_len=1;
			return false;
		}
		insertAtCursor("\u09CD");old_len = 1;
		carry="g";
		return false;
	}
	else if (old_len == 0) {
		insertConjunction(bangla,1);
		old_len = 1;
		return false;
	} else if (char_e == "A")	{
		newChar = unijoy['v']+ '\u09CD';
		insertAtCursor(newChar);
		old_len = 1;
		return false;
	} else if ((bangla == '' && tempBangla != '')) {
		bangla = tempBangla;
		if (bangla == '')	{
			carry = '';
			return;
		} else {
			carry = char_e;
			insertAtCursor(bangla);
			old_len = bangla.length;
			return false;
		}
	} else if (bangla != '') {
		insertConjunction(bangla, old_len);
		old_len = bangla.length;
		return false;
	}
}
function parseunijoyCarry(code) {
    if (!unijoy[code]) {
        return '';
    } else {
        return (unijoy[code]);
    }
}
function insertAtCursor(myValue) {
	lastInserted = myValue;
	var myField = document.getElementById(activeta);
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		sel.collapse(true);
		sel.select();
	}
	// mozilla / netscape support
	else if (myField.selectionStart || myField.selectionStart == 0) {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		startPos = (startPos == -1 ? myField.value.length : startPos );
		myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		var scrollTop = myField.scrollTop;
		myField.value += myValue;
		myField.focus();
		myField.scrollTop = scrollTop;
	}
}
function insertConjunction(myValue, len) {
    lastInserted = myValue;
    var myField = document.getElementById(activeta);
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
		if (myField.value.length >= len) {
            sel.moveStart('character', -1*(len));
        }
        sel.text = myValue;
        sel.collapse(true);
        sel.select();
    } else if (myField.selectionStart || myField.selectionStart == 0) {
		myField.focus();
		var startPos = myField.selectionStart-len;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		startPos = (startPos == -1 ? myField.value.length : startPos );
		myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		var scrollTop = myField.scrollTop;
		myField.value += myValue;
		myField.focus();
		myField.scrollTop = scrollTop;
	}
}
function makeUnijoyEditor(textAreaId) {
	activeTextAreaInstance = document.getElementById(textAreaId);
	activeTextAreaInstance.onkeypress = parseunijoy; 
	activeTextAreaInstance.onkeydown = checkKeyDown; 
	activeTextAreaInstance.onkeyup = checkKeyUp;
	activeTextAreaInstance.onfocus = function(){ activeta=textAreaId; };
}