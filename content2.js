console.log('content2');
let playlist_size_array = [];
var playlist_size;
setTimeout(1.0);
document.querySelectorAll('[dir="auto"][class="style-scope yt-formatted-string"]').forEach(s => playlist_size_array.push(s.innerText));
for(var i = 0 ; i < playlist_size_array.length - 1 ; i++) {
    if(playlist_size_array[i]=='/'){
        playlist_size = playlist_size_array[i+1];
    }
}
while (document.getElementsByTagName("ytd-playlist-panel-video-renderer").length < playlist_size){
    console.log('Started');
    let total_duration_in_string_2 = add_total_time()
    console.log(total_duration_in_string_2);
    document.getElementById("publisher-container").insertAdjacentHTML("beforeEnd","<span id='totaltime'> - "+total_duration_in_string_2+"</span>");
}


function add_total_time(){
    let times = [];
    document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer").forEach(s => times.push(s.innerText));
    if(times.length) {
        let time_split = [];
        console.log('times\n');
        console.log(times);
        times.forEach(s => time_split.push(s.split(":")));
        total_duration_1 = 0;
        for( var i = 0 ; i < playlist_size ; i++) {
            time_add(time_split[i]);
        }
        console.log('total duration\n');
        console.log(total_duration_1);
        let total_duration_in_string_1 = calculate_total_duration(total_duration_1);
        //document.getElementById("stats").append(" • ");
        //document.getElementById("stats").append(total_duration_in_string);
        return total_duration_in_string_1;
    } else {
        setTimeout(add_total_time,1000);
    }
}


function calculate_total_duration(total_duration){
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
        return total_duration_in_string;
    }
    else if(total_duration>=60) {
        let total_duration_in_string = "";
        if(Math.floor(total_duration / 60)<10){
            total_duration_in_string = total_duration_in_string.concat("0");    
        }
        total_duration_in_string = total_duration_in_string.concat((Math.floor(total_duration / 60)).toString());
        total_duration_in_string = total_duration_in_string.concat(":");
        total_duration = total_duration % 60;
        if(total_duration<10){
            total_duration_in_string = total_duration_in_string.concat("0");    
        }
        total_duration_in_string = total_duration_in_string.concat((total_duration).toString());
        return total_duration_in_string;
    }
    else{
        let total_duration_in_string = "";
        total_duration_in_string = total_duration_in_string.concat("0:");
        if(total_duration<10){
            total_duration_in_string = total_duration_in_string.concat("0");    
        }
        total_duration_in_string = total_duration_in_string.concat(total_duration.toString());
        return total_duration_in_string;
    }
}

function time_add(s){
    if(s.length == 1) {
        total_duration_1 = total_duration_1 + Number(s[0]);
    }
    else if(s.length == 2) {
        total_duration_1 = total_duration_1 + Number(s[0]*60);
        total_duration_1 = total_duration_1 + Number(s[1]);
    }
    else if(s.length == 3) {
        total_duration_1 = total_duration_1 + Number(s[0]*60*60);
        total_duration_1 = total_duration_1 + Number(s[1]*60);
        total_duration_1 = total_duration_1 + Number(s[2]);
    }
}