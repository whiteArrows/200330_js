window.addEventListener("DOMContentLoaded", function(event){
    const apiList = document.querySelector('#tableau');
    var ajx = new XMLHttpRequest();
    ajx.open('GET', 'https://arfp.eu/dataset/cards');
    ajx.onload = function(){
        if(this.status === 200){
            /*var json = JSON.parse(this.responseText);*/
            var json = JSON.parse(this.responseText);
            console.log(json);


            var container_id = document.getElementById('id');
            var container_name = document.getElementById('name');
            var container_level = document.getElementById('level');
            var container_description = document.getElementById('description');
            var container_power = document.getElementById('power');
            var container_attack = document.getElementById('attack');
            var container_armor = document.getElementById('armor');
            var container_damage = document.getElementById('damage');
            var container_mitigation = document.getElementById('mitigation');
            var container_played = document.getElementById('played');
            var container_victory = document.getElementById('victory');
            var container_defeat = document.getElementById('defeat');
            var container_draw = document.getElementById('draw');

            /*add id dynamically to HTML*/
            container_id.id = "container_id";
            container_name.id = "container_name";
            container_level.id = "container_level";
            container_description.id = "container_description";
            container_power.id = "container_power";
            container_attack.id = "container_attack";
            container_armor.id = "container_armor";
            container_damage.id = "container_damage";
            container_mitigation.id = "container_mitigation";
            container_played.id = "container_played";
            container_victory.id = "container_victory";
            container_defeat.id = "container_defeat";
            container_draw.id = "container_draw";


            for(var i = 0; i < json.length; i++){ 
                /*apiList.innerHTML += (xx + '<th id="id"><tr><td>' + json[i].id + '</td></tr></th>');*/
                var th_id = document.createElement('div');
                var th_name = document.createElement('div');
                var th_level = document.createElement('div');
                var th_description = document.createElement('div');
                var th_power = document.createElement('div');
                var th_attack = document.createElement('div');
                var th_armor = document.createElement('div');
                var th_damage = document.createElement('div');
                var th_mitigation = document.createElement('div');
                var th_played = document.createElement('div');
                var th_victory = document.createElement('div');
                var th_defeat = document.createElement('div');
                var th_draw = document.createElement('div');

                th_id.textContent = '' + json[i].id;
                th_name.textContent = '' + json[i].name;
                th_level.textContent = '' + json[i].level;
                th_description.textContent = '' + json[i].description;
                th_power.textContent = '' + json[i].power;
                th_attack.textContent = '' + json[i].attack;
                th_armor.textContent = '' + json[i].armor;
                th_damage.textContent = '' + json[i].damage;
                th_mitigation.textContent = '' + json[i].mitigation;
                th_played.textContent = '' + json[i].played;
                th_victory.textContent = '' + json[i].victory;
                th_defeat.textContent = '' + json[i].defeat;
                th_draw.textContent = '' + json[i].draw;

                container_id.appendChild(th_id);
                container_name.appendChild(th_name);
                container_level.appendChild(th_level);
                container_description.appendChild(th_description);
                container_power.appendChild(th_power);
                container_attack.appendChild(th_attack);
                container_armor.appendChild(th_armor);
                container_damage.appendChild(th_damage);
                container_mitigation.appendChild(th_mitigation);
                container_played.appendChild(th_played);
                container_victory.appendChild(th_victory);
                container_defeat.appendChild(th_defeat);
                container_draw.appendChild(th_draw);



            }

        }
    };
    ajx.send();
});