let playlist_size = Number(document.querySelector('#publisher-container > div > yt-formatted-string').innerText.split('/')[1].trim().split(' ')[0]);

check(document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer").length);

function check(a) {
    console.log(a);
    if (a<playlist_size) setTimeout( () => check(document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer").length),100);
    else document.getElementById("publisher-container").insertAdjacentHTML("beforeEnd","<span id='totaltime' class='yt-simple-endpoint style-scope yt-formatted-string'> - "+add_total_time()+"</span>");
}

function add_total_time() {
    let times = [];
    document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer").forEach(s => times.push(s.innerText));
    let time_split = [];
    times.forEach(s => time_split.push(s.split(":")));
    total_duration_1 = 0;
    for(var i = 0 ; i < playlist_size ; i++) {
        time_add(time_split[i]);
    }
    let total_duration_in_string_1 = calculate_total_duration(total_duration_1);
    return total_duration_in_string_1;
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