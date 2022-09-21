let data=[{"id":1,"first_name":"Byram","last_name":"Botwood","email":"bbotwood0@domainmarket.com"},
             {"id":2,"first_name":"Cissiee","last_name":"Marlen","email":"cmarlen1@aboutads.info"},
             {"id":3,"first_name":"Vanny","last_name":"Charter","email":"vcharter2@multiply.com"},
             {"id":4,"first_name":"Quincey","last_name":"Cayley","email":"qcayley3@networkadvertising.org"},
             {"id":5,"first_name":"Onfre","last_name":"Gauche","email":"ogauche4@bing.com"},
             {"id":6,"first_name":"Ken","last_name":"Klimaszewski","email":"kklimaszewski5@reverbnation.com"},
             {"id":7,"first_name":"Greer","last_name":"Dreigher","email":"gdreigher6@de.vu"},
             {"id":8,"first_name":"Karoly","last_name":"Venturoli","email":"kventuroli7@state.tx.us"},
             {"id":9,"first_name":"Roxine","last_name":"Alessandretti","email":"ralessandretti8@guardian.co.uk"},
             {"id":10,"first_name":"Colet","last_name":"Jago","email":"cjago9@nih.gov"}]
             

             function add(){
            let row=""
            for(a of data){
                row=row+ `<tr>
                            <td>${a.id}</td>
                            <td>${a.first_name}</td>
                            <td>${a.last_name}</td>
                            <td>${a.email}</td>
                            </tr>`
            }
            document.getElementById('table').innerHTML=row
             }