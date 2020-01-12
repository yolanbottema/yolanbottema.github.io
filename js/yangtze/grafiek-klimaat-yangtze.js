var data = {
    labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    datasets: [{
        label: "Gemiddelde neerslag Shanghai in mm",
        backgroundColor: "#05529d",
        hoverBackgroundColor: "#DA1B83",
        data: [44, 56, 73, 87, 91, 168, 138, 134, 133, 53, 49, 40]
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