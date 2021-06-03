let times = [];
document.querySelectorAll("span.ytd-thumbnail-overlay-time-status-renderer").forEach(s => times.push(s.innerText.trim()));

let time_split = [];
times.forEach(s => time_split.push(s.split(":")));

let total_duration = 0;
time_split.forEach(time_add);

let total_duration_in_array = [];
if (total_duration>=3600) {
    let total_duration_in_string = (Math.floor(total_duration / 3600)).toString();
    total_duration_in_string = total_duration_in_string.concat(":");
    total_duration = total_duration % 3600;
    if(Math.floor(total_duration / 60)<10){
        total_duration_in_string = total_duration_in_string.concat("0");    
    }
    total_duration_in_string = total_duration_in_string.concat((Math.floor(total_duration / 60)).toString());
    total_duration_in_string = total_duration_in_string.concat(":");
    total_duration = total_duration % 60;
    if(total_duration<10){
        total_duration_in_string = total_duration_in_string.concat("0");    
    }
    total_duration_in_string = total_duration_in_string.concat(total_duration.toString());
    document.getElementById("stats").append(" • ");
    document.getElementById("stats").append(total_duration_in_string);
}
else if(total_duration>=60) {
    if(Math.floor(total_duration / 60)<10){
        total_duration_in_string = total_duration_in_string.concat("0");    
    }
    let total_duration_in_string = (Math.floor(total_duration / 60)).toString();
    total_duration_in_string = total_duration_in_string.concat(":");
    total_duration = total_duration % 60;
    if(total_duration<10){
        total_duration_in_string = total_duration_in_string.concat("0");    
    }
    total_duration_in_string = total_duration_in_string.concat((total_duration).toString());
    document.getElementById("stats").append(total_duration_in_string);
}
else{
    total_duration_in_string = total_duration_in_string.concat("0:");
    if(total_duration<10){
        total_duration_in_string = total_duration_in_string.concat("0");    
    }
    let total_duration_in_string = total_duration.toString();
    document.getElementById("stats").append(total_duration_in_string);
}

function time_add(s){
    if(s.length == 1) {
        total_duration = total_duration + Number(s[0]);
    }
    else if(s.length == 2) {
        total_duration = total_duration + Number(s[0]*60);
        total_duration = total_duration + Number(s[1]);
    }
    else if(s.length == 3) {
        total_duration = total_duration + Number(s[0]*60*60);
        total_duration = total_duration + Number(s[1]*60);
        total_duration = total_duration + Number(s[2]);
    }
}