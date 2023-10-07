document.addEventListener("DOMContentLoaded", function () {
    const urlInput = document.getElementById("urlInput");
    const fetchDataBtn = document.getElementById("fetchDataBtn");
    const dataTable = document.getElementById("dataTable");

    fetchDataBtn.addEventListener("click", function () {
        const url = urlInput.value;
        if (url) {
            axios.get(url)
                .then(function (response) {
                    const data = response.data;
                    displayDataInTable(data);
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Failed to fetch data from the URL.");
                });
        } else {
            alert("Please enter a URL.");
        }
    });

    function displayDataInTable(data) {
        // Assuming data is an array of objects with keys and values.
        let tableHTML = "<tr>";
        for (const key in data[0]) {
            tableHTML += `<th>${key}</th>`;
        }
        tableHTML += "</tr>";

        data.forEach(item => {
            tableHTML += "<tr>";
            for (const key in item) {
                tableHTML += `<td>${item[key]}</td>`;
            }
            tableHTML += "</tr>";
        });

        dataTable.innerHTML = tableHTML;
    }
});
