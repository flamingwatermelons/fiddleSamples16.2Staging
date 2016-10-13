$(function () {
$.ig.loader({
        scriptPath: "http://staging.igniteui.local/16-2/IgniteUI/js/",
        cssPath: "http://staging.igniteui.local/16-2/IgniteUI/css/",
        resources: 'igHierarchicalGrid,' +
            'igExcel,' +
            'igGridExcelExporter'
    });
			
    $.ig.loader(function() {				
        var data = [
            { Name: "Food", Products: [
                { Name: "Bread", Quantity: 3 },
                { Name: "Pizza", Quantity: 4 }]
            },
            { Name: "Beverages", Products: [
                { Name: "Milk", Quantity: 1 },
                { Name: "Fruit punch", Quantity: 4 }]
            }];
					
        $("#hierarchicalGrid").igHierarchicalGrid({
            width: "400px",
            dataSource: data, //Array of objects defined above
            autoGenerateColumns: true,
            autoGenerateLayouts: true
        });

        $("#exportButton").igButton({ labelText: "Export" });
					
        $("#exportButton").on("igbuttonclick", function () {
            $.ig.GridExcelExporter.exportGrid($("#hierarchicalGrid"), {
                dataExportMode: $("#dataExportMode").val()
            });
        })
    });
});