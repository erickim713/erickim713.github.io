
$(document).ready(function(){
	// this is for the experience ui
	$('#all').click(function(){
		
		if($(this).hasClass('not-active-button')){
			// if all is off then toggleoff
			toggleon($(this));
			toggleoff($('#work'));
			toggleoff($('#school'));
			toggleoff($('#personal'));
		}
		effect($('#all'), $('#work'), $('#school'), $('#personal'));
	});
	$('#work').click(function(){
		
		if($(this).hasClass('not-active-button')){
			
			// if work is off then turn it on
			toggleon($(this));
			if ($('#all').hasClass('active-button')) {
				toggleoff($('#all'));
			}
		}
		else{
			
			// when turning off, if rest of the 
			toggleoff($(this));
			if($('#school').hasClass('not-active-button') && $('#personal').hasClass('not-active-button')){
				// then turn on all automatically
				toggleon($('#all'));
			}
		}
		effect($('#all'), $('#work'), $('#school'), $('#personal'));
	});
	$('#school').click(function(){
		
		
		if($(this).hasClass('not-active-button')){
			
			// if work is off then turn it on
			toggleon($(this));
			if ($('#all').hasClass('active-button')) {
				toggleoff($('#all'));
			}
		}
		else{
			
			// when turning off, if rest of the 
			toggleoff($(this));
			if($('#work').hasClass('not-active-button') && $('#personal').hasClass('not-active-button')){
				// then turn on all automatically
				toggleon($('#all'));
			}
		}
		effect($('#all'), $('#work'), $('#school'), $('#personal'));
	});
	$('#personal').click(function(){
		
		if($(this).hasClass('not-active-button')){
			
			// if work is off then turn it on
			toggleon($(this));
			if ($('#all').hasClass('active-button')) {
				toggleoff($('#all'));
			}
		}
		else{
			
			// when turning off, if rest of the 
			toggleoff($(this));
			if($('#school').hasClass('not-active-button') && $('#work').hasClass('not-active-button')){
				// then turn on all automatically
				toggleon($('#all'));
			}
		}
		effect($('#all'), $('#work'), $('#school'), $('#personal'));
	});
	
});

function toggleon(x){
	x.removeClass('not-active-button');
	x.addClass('active-button');
}

function toggleoff(x){
	x.removeClass('active-button');
	x.addClass('not-active-button');
}

function effect(aa, bb, cc, dd){
	// var all = table + ' ' + a;
	var work_header = '#main-table .work-header';
	var work_entry = '#main-table .work-entry';
	var school_header = '#main-table .school-header';
	var school_entry = '#main-table .school-entry';
	var personal_header = '#main-table .personal-header';
	var personal_entry = '#main-table .personal-entry';

	if (aa.hasClass('active-button')) {
		$(work_header).show();
		$(work_entry).show();
		$(school_header).show();
		$(school_entry).show();
		$(personal_header).show();
		$(personal_entry).show();
	}
	else{
		$(work_header).hide();
		$(work_entry).hide();
		$(school_header).hide();
		$(school_entry).hide();
		$(personal_header).hide();
		$(personal_entry).hide();
		if(bb.hasClass('active-button')){
			$(work_header).show();
			$(work_entry).show();
		}
		if(cc.hasClass('active-button')){
			$(school_header).show();
			$(school_entry).show();
		}
		if(dd.hasClass('active-button')){
			$(personal_header).show();
			$(personal_entry).show();
		}
	}
}