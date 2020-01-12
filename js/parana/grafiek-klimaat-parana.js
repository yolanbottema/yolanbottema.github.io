var data = {
    labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    datasets: [{
        label: "Gemiddelde neerslag Buenos Aires in mm",
        backgroundColor: "#05529d",
        hoverBackgroundColor: "#DA1B83",
        data: [104, 98, 115, 97, 80, 61, 59, 63, 68, 104, 98, 93],
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
};

Chart.Bar('chart', {
    options: options,
    data: data
});