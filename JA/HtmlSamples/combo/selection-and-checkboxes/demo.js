$(function () {
var colors = [
            { Name: "jQuery/HTML5/ASP.NET MVC コントロール" },
            { Name: "ASP.NET コントロール" },
            { Name: "Windows Forms コントロール" },
            { Name: "WPF コントロール" },
            { Name: "Android ネイティブ モバイル コントロール" },
            { Name: "iOS コントロール" },
            { Name: "SharePlus" },
            { Name: "ReportPlus" },
            { Name: "Indigo Studio" }
        ];

        $(function () {

            $("#singleSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                dropDownOnFocus: true
            });

            $("#multiSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true
                }
            });

            $("#checkboxSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true,
                    showCheckboxes: true
                }
            });

        });
});