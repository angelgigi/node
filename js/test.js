/**
 * Created by Administrator on 2017/7/11.
 */

var response = {
    "list": [
        {
            "id": 4097,
            "name": "jkjk",
            "countryCode": "huh",
            "district": "name",
            "population": "7890655"
        },
        {
            "id": 4096,
            "name": "wewe",
            "countryCode": "jij",
            "district": "kokoko",
            "population": "345678"
        },
        {
            "id": 4090,
            "name": "8888",
            "countryCode": "ooo",
            "district": "ret",
            "population": "888888"
        },
        {
            "id": 199,
            "name": "PotosÃ­",
            "countryCode": "BOL",
            "district": "PotosÃ­",
            "population": "140642"
        },
        {
            "id": 198,
            "name": "Sucre",
            "countryCode": "BOL",
            "district": "Chuquisaca",
            "population": "178426"
        },
        {
            "id": 197,
            "name": "Oruro",
            "countryCode": "BOL",
            "district": "Oruro",
            "population": "223553"
        },
        {
            "id": 196,
            "name": "Cochabamba",
            "countryCode": "BOL",
            "district": "Cochabamba",
            "population": "482800"
        },
        {
            "id": 195,
            "name": "El Alto",
            "countryCode": "BOL",
            "district": "La Paz",
            "population": "534466"
        },
        {
            "id": 194,
            "name": "La Paz",
            "countryCode": "BOL",
            "district": "La Paz",
            "population": "758141"
        },
        {
            "id": 193,
            "name": "Santa Cruz de la Sierra",
            "countryCode": "BOL",
            "district": "Santa Cruz",
            "population": "935361"
        },
        {
            "id": 192,
            "name": "Thimphu",
            "countryCode": "BTN",
            "district": "Thimphu",
            "population": "22000"
        },
        {
            "id": 191,
            "name": "Hamilton",
            "countryCode": "BMU",
            "district": "Hamilton",
            "population": "1200"
        },
        {
            "id": 190,
            "name": "Saint George",
            "countryCode": "BMU",
            "district": "Saint GeorgeÂ´s",
            "population": "1800"
        },
        {
            "id": 189,
            "name": "Parakou",
            "countryCode": "BEN",
            "district": "Borgou",
            "population": "103577"
        },
        {
            "id": 188,
            "name": "Djougou",
            "countryCode": "BEN",
            "district": "Atacora",
            "population": "134099"
        },
        {
            "id": 187,
            "name": "Porto-Novo",
            "countryCode": "BEN",
            "district": "OuÃ©mÃ©",
            "population": "194000"
        },
        {
            "id": 186,
            "name": "Cotonou",
            "countryCode": "BEN",
            "district": "Atlantique",
            "population": "536827"
        },
        {
            "id": 185,
            "name": "Belmopan",
            "countryCode": "BLZ",
            "district": "Cayo",
            "population": "7105"
        },
        {
            "id": 184,
            "name": "Belize City",
            "countryCode": "BLZ",
            "district": "Belize City",
            "population": "55810"
        },
        {
            "id": 183,
            "name": "Mons",
            "countryCode": "BEL",
            "district": "Hainaut",
            "population": "90935"
        }
    ]
};

function sortNumber(a,b)
{
    return b - a
}
var arr=response.list;
var idList= new Array();
for ( var i=0;i<arr.length;i++){
    idList.push(arr[i].id);
    idList.sort(sortNumber);
    console.log(idList);
    if(idList.length>0)
    {
        console.log(idList[0])
    }
}

// 1.接受参数
// 2.组装实体
// 3.生成Id
// 4.添加到数据对象
var entity={name:"sds",ssd:"sd"};
entity.id=idList[0]+1;

response.list.push(entity)