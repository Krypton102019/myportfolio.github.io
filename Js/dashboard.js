const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri','Sat'],
        datasets: [{
            label: 'Price Values Update',
            data: [825, 2514, 789, 2954,700,5000,3214 ],
            backgroundColor: [
                'rgb(136 ,120 ,121)',


            ],pointBorderWidth:5,
            pointBorderColor: 'rgb(136 ,126 ,121)',
            borderColor: [
                'rgba(235, 145, 156)',

            ],tension: 0.5,
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});