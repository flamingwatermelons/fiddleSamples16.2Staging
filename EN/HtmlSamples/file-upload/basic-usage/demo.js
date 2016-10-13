$(function () {
            $("#igUpload1").igUpload({
                mode: 'single',
                autostartupload: true,
<<<<<<< HEAD
                progressUrl: "http://staging.igniteui.local/16-2/IGUploadStatusHandler.ashx",
=======
                progressUrl: "http://dev.igniteui.local/16-2/IGUploadStatusHandler.ashx",
>>>>>>> 33e2affe828c3a6d046103189a8e30cf4af727fb
                controlId: "serverID1",
                onError: function (e, args) {
                    showAlert(args);
                }
            });
        });

        function showAlert(args) {
            $("#error-message").html(args.errorMessage).stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
        }