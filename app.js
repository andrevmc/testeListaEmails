var cx_emails = {
    "email":    
    [
        {
            "nome": "Acacio Campelo", 
            "assunto": "Assunto A",
            "data_envio": "Sat Sep 12 2015 09:01:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Adão Lencastre", 
            "assunto": "Assunto B",
            "data_envio": "Thu Sep 10 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Apuã Rosmaninho", 
            "assunto": "Assunto C",
            "data_envio": "Wed Sep 09 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Armanda Torcato", 
            "assunto": "Assunto D",
            "data_envio": "Tue Sep 08 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Bruna Grangeia", 
            "assunto": "Assunto F",
            "data_envio": "Sun Sep 07 2015 08:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Bráulio Lobato", 
            "assunto": "Assunto G",
            "data_envio": "Mon Sep 06 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Donata Camello", 
            "assunto": "Assunto H",
            "data_envio": "Fri Sep 05 2015 17:07:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Elisabete Beça", 
            "assunto": "Assunto I",
            "data_envio": "Mon Sep 14 2015 17:00:58 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Estela Saldaña", 
            "assunto": "Assunto J",
            "data_envio": "Thu Nov 30 2014 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Eudes Porciúncula", 
            "assunto": "Assunto K",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Fabíola Rebouças", 
            "assunto": "Assunto L",
            "data_envio": "Mon Sep 14 2015 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Feliciano Monte", 
            "assunto": "Assunto M",
            "data_envio": "Thu Sep 15 2015 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Filomena Naves", 
            "assunto": "Assunto N",
            "data_envio": "Tue Sep 08 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Glória Delgado", 
            "assunto": "Assunto O",
            "data_envio": "Sun Sep 07 2015 08:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Henriqueta Moreno", 
            "assunto": "Assunto P",
            "data_envio": "Mon Sep 06 2015 17:18:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Rebeca Gusmão", 
            "assunto": "Assunto Q",
            "data_envio": "Fri Sep 05 2015 17:07:29 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Hermígio Viégas", 
            "assunto": "Assunto R",
            "data_envio": "Fri Sep 04 2015 17:00:58 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Horácio Mota", 
            "assunto": "Assunto S",
            "data_envio": "Thu Nov 30 2014 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Morgana Morgado", 
            "assunto": "Assunto T",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Rosário Quintal", 
            "assunto": "Assunto U",
            "data_envio": "Thu Sep 15 2015 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Rubim Bonilha", 
            "assunto": "Assunto V",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Rúben Serpa", 
            "assunto": "Assunto X",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Solange Jesus", 
            "assunto": "Assunto Z",
            "data_envio": "Thu Nov 30 2014 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Soraia Fonseca", 
            "assunto": "Assunto Y",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Ubirajara Flores", 
            "assunto": "Assunto W",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        },
        {
            "nome": "Ulisses Vale", 
            "assunto": "Assunto 1",
            "data_envio": "Thu Nov 30 2014 17:44:50 GMT-0200 (Horário brasileiro de verão)"
        },
        {
            "nome": "Xênia Bautista", 
            "assunto": "Assunto 2",
            "data_envio": "Fri Oct 15 2014 17:43:47 GMT-0300 (Hora oficial do Brasil)"
        }           
    ]
}


function loadingTable(){
    var t = cx_emails.email.length,
        arrayEmails = [];

    for (var i=0; i < t; i++){
        var nome = cx_emails.email[i].nome;
        var assunto = cx_emails.email[i].assunto;
        // var data_envio = cx_emails.email[i].data_envio;
      
        if (dateFormat(new Date(cx_emails.email[i].data_envio)) == dateFormat(new Date())){
            var data_envio = hourFormat(new Date(cx_emails.email[i].data_envio));
        } else {
            var data_envio = dateFormat(new Date(cx_emails.email[i].data_envio));
        }

        var strHTML  = "<tr>" +
                     "<td>" + nome + "</td>"+
                     "<td>" + assunto + "</td>"+
                     "<td>" + data_envio + "</td>"+
                     "</tr>";     
        arrayEmails.push(strHTML);
    }  
    return arrayEmails;
}

function dateFormat(obj){
    var ano = obj.getFullYear();
    var mes = obj.getMonth() + 1 < 10 ? "0" + (obj.getMonth() + 1):obj.getMonth() + 1;
    var dia = obj.getDate() < 10 ? "0" + (obj.getDate()):obj.getDate();

    vDateFormata = ano + "/" + mes + "/" + dia;

    return vDateFormata;
}

function hourFormat(obj){
    var hora = obj.getHours() < 10 ? "0" + (obj.getHours()):obj.getHours();
    var minute = obj.getMinutes() < 10 ? "0" + (obj.getMinutes()):obj.getMinutes();

    vHourFormat = "Hoje às " + hora + "h" + minute;

    return vHourFormat;
}

$("#table_email tbody").html(loadingTable())