var ctx = document.getElementsByClassName("line-chart");


                    //type , data, options 
                    var charGraph = new Chart(ctx,{
                        type: 'line',
                        data:{
                           labels: ["jan","Fev","Mar","Abril","maio","jun","jul","ago"],
                           datasets: [{
                               label:"Progresso - 2020",
                               data: [2,10,7,12,8,6,5,9],
                               borderWidth: 3,
                               borderColor: 'rgba(77,166,253,0.85)',
                               backgroundColor: 'red',
                           }]
                        }, 
                        options:{
                            title:{
                                display: true,
                                fontSize: 20,
                                text: "Relatório",
                                color: "red"
                            },
                        }
                    })
