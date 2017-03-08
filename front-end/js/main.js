//(function(){
"use strict;"
        var cardsData = 
            [{
                cardTitle: "City Center",
                streetInfo: "Tverskaya",
                accidents: 10
            },
            {
                cardTitle: "UZAO",
                streetInfo: "Teply Stan",
                accidents: "1"
            },
            {
                 cardTitle: "SZAO",
                 streetInfo: "Leningradskoe schosse",
                 accidents: "100"
            }];
    
        angular.module("mcda",[])
        .component("infoCard",{
            bindings: {
                cardTitle: "@",
                streetInfo: "@",
                accidents: "@"
            },
            template: `
{{$ctrl.data.rows}}
            <div ng-repeat="row in $ctrl.data">
            <div class="info-card">
                <h2>{{row.name}}</h2>
                <div>
                    <h3>Details on street {{row.id}}</h3>
                    <p>Overall acceidents this month {{row.id}}</p>
                </div>
            </div>
            `,
            controller: function($http) {
                this.data = cardsData;
               // $http.get("/db").then((response)=>{
                //    this.data = response.data;
                //})
            }
        })
//});