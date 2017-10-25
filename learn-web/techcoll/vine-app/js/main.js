"use strict";
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    eventHandler();
} else {
    document.addEventListener('DOMContentLoaded', eventHandler);
}
function eventHandler() {
    // код здесь
    var _data = getData();
    console.log(_data);

    // запрашиваем данные
    function getData() {
        // генерим json здесь:
        // https://www.json-generator.com/
        return [{"_id":"59f090e96b3d066d342d3329","index":0,"inStock":false,"price":"$962.01","picture":"http://placehold.it/128x128","year":1903,"color":"red","type":"semisweet","city":"National","name":"BREINIGSVILLE Comstar","company":"EXOSWITCH","about":"Deserunt aliqua Lorem veniam pariatur velit sunt aute amet officia in est ipsum in minim. Consequat magna veniam eu tempor aliquip. Pariatur est reprehenderit esse officia sunt incididunt labore ea fugiat aute. Labore sint est dolore aliqua. Ut voluptate ad enim quis aliquip id magna tempor veniam nostrud mollit cillum aute.\r\n","tags":["eu","nisi","occaecat","ea","dolore","sint","eu"]},{"_id":"59f090e9ed915cf10642f024","index":1,"inStock":false,"price":"$567.78","picture":"http://placehold.it/128x128","year":1909,"color":"red","type":"semi-dry","city":"Watrous","name":"REW Waretel","company":"HONOTRON","about":"Esse aliquip eiusmod veniam quis in occaecat culpa duis ex adipisicing. Et anim ex laborum sint laboris deserunt anim nostrud velit cillum. Eiusmod cillum aute elit dolor culpa aute ad quis nulla laboris excepteur.\r\n","tags":["velit","non","nulla","et","pariatur","voluptate","anim"]},{"_id":"59f090e91b329ab9c26d9939","index":2,"inStock":true,"price":"$533.14","picture":"http://placehold.it/128x128","year":1909,"color":"red","type":"sweet","city":"Mahtowa","name":"NORVELT Cubicide","company":"CYTREX","about":"Cillum enim ad ex anim proident. Ad magna nulla ullamco laborum. Tempor ea veniam laboris dolore in magna minim ut tempor sint pariatur esse ea. Aute laboris occaecat nulla laborum laboris sint. Ut ipsum ad in Lorem et sunt. Fugiat eu reprehenderit dolore qui adipisicing ullamco dolore minim aliquip minim. Ut occaecat ex aute id aliqua ullamco enim consectetur ad voluptate veniam sunt elit.\r\n","tags":["ipsum","excepteur","elit","voluptate","in","Lorem","consectetur"]},{"_id":"59f090e913b227b028181216","index":3,"inStock":true,"price":"$134.42","picture":"http://placehold.it/128x128","year":2008,"color":"rose","type":"semi-dry","city":"Maxville","name":"BYNUM Poshome","company":"ECLIPSENT","about":"Commodo minim consequat ex non reprehenderit ut in voluptate sint ut Lorem exercitation. In excepteur eu minim qui ad nulla cupidatat aute deserunt. Occaecat aliquip eiusmod ut incididunt in tempor proident. Velit voluptate ea excepteur est id sit nostrud nisi magna ut est pariatur eu. Commodo duis proident aliqua dolor ipsum nostrud mollit consequat exercitation nulla culpa irure. Velit magna labore aliqua labore mollit consequat nulla qui deserunt aliqua aute. In ullamco amet et eu nostrud in esse id est aute enim.\r\n","tags":["Lorem","commodo","minim","aliquip","ad","anim","occaecat"]},{"_id":"59f090e90a8285569643eaaf","index":4,"inStock":false,"price":"$801.21","picture":"http://placehold.it/128x128","year":1985,"color":"red","type":"semisweet","city":"Elliston","name":"GORHAM Uxmox","company":"QUONATA","about":"Sit quis est nulla elit cillum cupidatat labore. Aliqua incididunt et deserunt quis deserunt sint. Qui officia dolore duis quis sit duis elit. Magna in duis officia sunt tempor deserunt eu occaecat duis Lorem. Culpa Lorem Lorem dolore occaecat irure sit ut cupidatat minim reprehenderit dolore.\r\n","tags":["excepteur","ipsum","adipisicing","aliqua","labore","ea","cillum"]},{"_id":"59f090e90d267b0e55bad01d","index":5,"inStock":true,"price":"$427.02","picture":"http://placehold.it/128x128","year":1916,"color":"rose","type":"sweet","city":"Hessville","name":"HAROLD Amtas","company":"MANGELICA","about":"Consectetur tempor pariatur nulla eiusmod et esse ullamco minim nostrud. Minim ut ipsum labore esse ipsum occaecat deserunt veniam aliqua enim fugiat qui consequat. Ut officia quis mollit anim culpa laborum nulla do Lorem elit et adipisicing dolore.\r\n","tags":["incididunt","labore","dolore","dolor","irure","commodo","non"]},{"_id":"59f090e9909278f4ce69426d","index":6,"inStock":false,"price":"$722.01","picture":"http://placehold.it/128x128","year":1954,"color":"white","type":"dry","city":"Kieler","name":"HEALY Beadzza","company":"AQUASURE","about":"Nulla id in nostrud minim pariatur aute pariatur sit duis in consequat irure. Aliquip nostrud cillum voluptate labore excepteur nulla duis nisi esse. Adipisicing minim nisi reprehenderit proident.\r\n","tags":["irure","adipisicing","elit","enim","consequat","culpa","pariatur"]},{"_id":"59f090e9146167efa7ea796b","index":7,"inStock":false,"price":"$879.28","picture":"http://placehold.it/128x128","year":2009,"color":"white","type":"dry","city":"Crayne","name":"NORTHCHASE Ovation","company":"ELEMANTRA","about":"Anim labore pariatur sint cillum aliqua cillum minim voluptate voluptate aliqua ea veniam. Culpa aliquip anim ad cillum voluptate. Esse consectetur excepteur sunt adipisicing ut excepteur in aliquip sit voluptate laborum cupidatat sunt. Cupidatat nulla eu cillum mollit elit aliquip anim.\r\n","tags":["id","duis","tempor","ut","voluptate","aute","ut"]},{"_id":"59f090e97163d63a2ce70582","index":8,"inStock":true,"price":"$319.80","picture":"http://placehold.it/128x128","year":1986,"color":"white","type":"semisweet","city":"Waukeenah","name":"SOUTHVIEW Elpro","company":"ORBIXTAR","about":"In officia eu ullamco quis amet nulla in culpa aliqua. Labore dolor officia ipsum id sunt voluptate adipisicing et. Elit excepteur culpa mollit consectetur in nulla. Proident velit deserunt consectetur occaecat occaecat exercitation non anim quis dolor aute eu nulla. Enim duis velit voluptate laborum ex. Adipisicing qui eu ipsum cillum non reprehenderit.\r\n","tags":["ut","officia","non","mollit","excepteur","mollit","et"]},{"_id":"59f090e9b09985961f093014","index":9,"inStock":false,"price":"$670.20","picture":"http://placehold.it/128x128","year":1962,"color":"red","type":"semi-dry","city":"Bison","name":"BOOMER Geekola","company":"VALREDA","about":"Ipsum do officia tempor voluptate dolor fugiat sint laborum. Reprehenderit nostrud dolore anim nulla nostrud fugiat. Ad ut eiusmod sint minim culpa culpa aute consectetur mollit. Cillum esse incididunt esse fugiat non excepteur dolore sit.\r\n","tags":["dolor","nisi","ex","reprehenderit","quis","officia","aliquip"]},{"_id":"59f090e9298036a903e80f45","index":10,"inStock":true,"price":"$749.50","picture":"http://placehold.it/128x128","year":1978,"color":"red","type":"dry","city":"Finderne","name":"IRWIN Nipaz","company":"INQUALA","about":"Est consectetur dolore id consectetur. In officia tempor consequat reprehenderit reprehenderit officia mollit. Ipsum aute veniam minim nostrud exercitation. Nulla consectetur tempor et in excepteur enim commodo.\r\n","tags":["sit","dolore","magna","irure","nulla","velit","minim"]},{"_id":"59f090e98761eed1e1d8afc0","index":11,"inStock":false,"price":"$506.45","picture":"http://placehold.it/128x128","year":1944,"color":"rose","type":"semi-dry","city":"Limestone","name":"CHAMBERINO Letpro","company":"CENTREGY","about":"Ex incididunt id incididunt labore enim ullamco eiusmod dolor consequat dolore. Magna labore enim et in officia ad pariatur cupidatat deserunt aute deserunt laborum adipisicing eiusmod. Qui nisi nulla id incididunt culpa non.\r\n","tags":["dolore","deserunt","qui","consectetur","dolor","ea","ea"]},{"_id":"59f090e92ca01fc88f1e51bf","index":12,"inStock":false,"price":"$769.80","picture":"http://placehold.it/128x128","year":1942,"color":"white","type":"semi-dry","city":"Cedarville","name":"CONCHO Crustatia","company":"FUTURIS","about":"Qui dolor fugiat cupidatat ut. Esse reprehenderit amet amet cillum adipisicing ipsum ad nulla cillum enim esse consectetur sunt qui. Incididunt ullamco nulla quis exercitation fugiat dolore in ipsum cupidatat tempor deserunt aute. Sint est elit excepteur sit culpa anim nisi eu. Culpa culpa nulla aliqua in ullamco est exercitation proident mollit ex. Duis amet consectetur nulla ea magna officia fugiat labore enim labore ipsum magna.\r\n","tags":["ad","commodo","pariatur","nulla","officia","culpa","duis"]},{"_id":"59f090e9e7ad37e4f8e98a08","index":13,"inStock":false,"price":"$766.54","picture":"http://placehold.it/128x128","year":2005,"color":"rose","type":"sweet","city":"Lindcove","name":"HEMLOCK Sloganaut","company":"FLEETMIX","about":"Irure sunt reprehenderit ex cillum laboris. Dolore commodo exercitation voluptate occaecat ipsum eu duis amet id duis aliqua eiusmod. Pariatur veniam ex sint nulla do.\r\n","tags":["enim","dolore","eu","cupidatat","Lorem","consequat","ex"]},{"_id":"59f090e9c7f5586a4efcba19","index":14,"inStock":false,"price":"$110.73","picture":"http://placehold.it/128x128","year":1998,"color":"white","type":"semi-dry","city":"Cartwright","name":"GRANDVIEW Biohab","company":"IMAGINART","about":"Deserunt magna est ad ex cupidatat magna. Commodo esse ipsum do eu fugiat esse sint id Lorem sint laborum esse aliquip consectetur. Dolore fugiat quis do sunt aliqua reprehenderit adipisicing in dolor consequat. Ipsum sunt amet ut excepteur. Sunt veniam ut deserunt voluptate culpa et velit excepteur id mollit incididunt. Mollit dolor proident eiusmod anim ut. Aliquip quis duis enim anim non commodo sunt incididunt eu fugiat eu sit.\r\n","tags":["consequat","adipisicing","laborum","deserunt","occaecat","quis","laborum"]},{"_id":"59f090e9bb84fcc59e719379","index":15,"inStock":true,"price":"$505.48","picture":"http://placehold.it/128x128","year":1927,"color":"white","type":"semi-dry","city":"Kidder","name":"BARRELVILLE Imkan","company":"VERTIDE","about":"Laboris consequat commodo minim aliqua esse id. Commodo dolor officia incididunt eu. Aliquip anim irure sint minim pariatur.\r\n","tags":["excepteur","aliquip","eiusmod","enim","ea","sit","in"]}]
    }
}


